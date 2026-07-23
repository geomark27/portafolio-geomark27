'use client';

import { FormEvent, useLayoutEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createSupabaseBrowserClient } from '@/lib/supabase/client';
import type { ExperienceRecord, SiteProfile } from '@/lib/admin-types';
import styles from './admin.module.css';

const emptyProfile: SiteProfile = {
  id: true,
  name: '',
  headline: '',
  summary: '',
  email: '',
  github_url: '',
  linkedin_url: '',
  years_experience: 4,
  professional_roles: 3,
  certification: 'AWS',
  skills_summary: '',
  architecture_title: '🏗️ System Architecture',
  architecture_description: '',
  cloud_title: '☁️ Cloud & DevOps',
  cloud_description: '',
  performance_title: '⚡ Performance & Scalability',
  performance_description: '',
  hero_title: 'Building Efficient Distributed Systems',
  hero_description: '',
  hero_role: 'Software Developer & AWS Solutions Architect',
  availability_text: 'Available for work',
  is_available: true,
  hero_technologies: [
    { icon: '🐹', label: 'Go', title: 'Primary language for microservices' },
    { icon: '☁️', label: 'AWS', title: 'Cloud platform and architecture' },
    { icon: '🗄️', label: 'SQL Server', title: 'Enterprise database systems' },
    { icon: '🐳', label: 'Docker', title: 'Container orchestration' },
  ],
  hero_primary_cta_text: 'View Projects',
  hero_secondary_cta_text: 'Get in Touch',
  hero_third_stat_value: '99%',
  hero_third_stat_label: 'Client Satisfaction',
  hero_third_stat_icon: '⭐',
};

function parseHeroTechnologies(value: string) {
  return value.split('\n').map((line) => {
    const [icon = '', label = '', title = ''] = line.split('|').map((part) => part.trim());
    return { icon, label, title: title || label };
  }).filter((technology) => technology.label);
}

function formatHeroTechnologies(technologies: SiteProfile['hero_technologies']) {
  return technologies.map(({ icon, label, title }) => `${icon} | ${label} | ${title}`).join('\n');
}

function sortExperienceRecords(records: ExperienceRecord[]) {
  return [...records].sort((a, b) => {
    if (a.is_pinned !== b.is_pinned) return a.is_pinned ? -1 : 1;
    return a.sort_order - b.sort_order;
  });
}

function experienceFromForm(form: FormData, fallbackPosition: number) {
  const requestedPosition = Number(form.get('position'));

  return {
    role: String(form.get('role') || ''),
    company: String(form.get('company') || ''),
    period: String(form.get('period') || ''),
    location: String(form.get('location') || ''),
    highlights: String(form.get('highlights') || '').split('\n').map((item) => item.trim()).filter(Boolean),
    sort_order: Number.isFinite(requestedPosition) && requestedPosition > 0
      ? requestedPosition - 1
      : fallbackPosition,
    is_pinned: form.get('is_pinned') === 'on',
  };
}

export default function AdminPanel({
  initialProfile,
  initialExperiences,
}: {
  initialProfile: SiteProfile | null;
  initialExperiences: ExperienceRecord[];
}) {
  const router = useRouter();
  const supabase = createSupabaseBrowserClient();
  const resolvedInitialProfile: SiteProfile = {
    ...emptyProfile,
    ...(initialProfile || {}),
    hero_technologies: initialProfile?.hero_technologies?.length
      ? initialProfile.hero_technologies
      : emptyProfile.hero_technologies,
  };
  const [profile, setProfile] = useState(resolvedInitialProfile);
  const [heroTechnologiesText, setHeroTechnologiesText] = useState(
    formatHeroTechnologies(resolvedInitialProfile.hero_technologies)
  );
  const [experiences, setExperiences] = useState(sortExperienceRecords(initialExperiences));
  const [editingExperienceId, setEditingExperienceId] = useState<string | null>(null);
  const [draggingExperienceId, setDraggingExperienceId] = useState<string | null>(null);
  const [openSection, setOpenSection] = useState<'profile' | 'hero' | 'experience' | null>('profile');
  const hasMounted = useRef(false);
  const [message, setMessage] = useState('');
  const [saving, setSaving] = useState(false);

  useLayoutEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    if (!openSection) return;

    let animationFrame = 0;
    const section = document.getElementById(`admin-${openSection}-section`);
    if (!section) return;

    const startPosition = window.scrollY;
    const targetPosition = section.getBoundingClientRect().top + window.scrollY - 16;
    const distance = targetPosition - startPosition;
    const duration = 400;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.scrollTo({ top: targetPosition });
      return;
    }

    const startTime = performance.now();
    const animateScroll = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      window.scrollTo({ top: startPosition + distance * easedProgress });

      if (progress < 1) animationFrame = requestAnimationFrame(animateScroll);
    };

    animationFrame = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [openSection]);

  async function persistProfile(successMessage: string) {
    setSaving(true);
    setMessage('');
    const profileToSave = {
      ...profile,
      hero_technologies: parseHeroTechnologies(heroTechnologiesText),
    };
    const { error } = await supabase.from('site_profile').upsert(profileToSave);
    if (!error) setProfile(profileToSave);
    setMessage(error ? error.message : successMessage);
    setSaving(false);
  }

  async function saveProfile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await persistProfile('Profile saved successfully.');
  }

  async function saveHero(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await persistProfile('Hero saved successfully.');
  }

  function toggleSection(section: 'profile' | 'hero' | 'experience') {
    setOpenSection((currentSection) => currentSection === section ? null : section);
  }

  async function addExperience(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const record = experienceFromForm(form, experiences.length);

    if (record.is_pinned) {
      const { error: unpinError } = await supabase
        .from('experiences')
        .update({ is_pinned: false })
        .eq('is_pinned', true);
      if (unpinError) {
        setMessage(unpinError.message);
        return;
      }
    }

    const { data, error } = await supabase.from('experiences').insert(record).select().single();
    if (error) {
      setMessage(error.message);
      return;
    }
    const currentRecords = record.is_pinned
      ? experiences.map((item) => ({ ...item, is_pinned: false }))
      : experiences;
    setExperiences(sortExperienceRecords([...currentRecords, data as ExperienceRecord]));
    event.currentTarget.reset();
    setMessage('Experience added successfully.');
  }

  async function updateExperience(event: FormEvent<HTMLFormElement>, id: string) {
    event.preventDefault();
    const current = experiences.find((item) => item.id === id);
    if (!current) return;

    const record = experienceFromForm(new FormData(event.currentTarget), current.sort_order);

    if (record.is_pinned) {
      const { error: unpinError } = await supabase
        .from('experiences')
        .update({ is_pinned: false })
        .neq('id', id);
      if (unpinError) {
        setMessage(unpinError.message);
        return;
      }
    }

    const { data, error } = await supabase
      .from('experiences')
      .update(record)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      setMessage(error.message);
      return;
    }

    setExperiences(sortExperienceRecords(experiences.map((item) => {
      if (item.id === id) return data as ExperienceRecord;
      return record.is_pinned ? { ...item, is_pinned: false } : item;
    })));
    setEditingExperienceId(null);
    setMessage('Experience updated successfully.');
  }

  async function removeExperience(id: string) {
    const { error } = await supabase.from('experiences').delete().eq('id', id);
    if (error) {
      setMessage(error.message);
      return;
    }
    setExperiences(experiences.filter((item) => item.id !== id));
    setMessage('Experience removed.');
  }

  async function persistExperienceOrder(orderedExperiences: ExperienceRecord[], previousExperiences: ExperienceRecord[]) {
    setExperiences(orderedExperiences);
    const results = await Promise.all(
      orderedExperiences.map((item) => supabase
        .from('experiences')
        .update({ sort_order: item.sort_order })
        .eq('id', item.id))
    );
    const failedUpdate = results.find((result) => result.error);

    if (failedUpdate?.error) {
      setExperiences(previousExperiences);
      setMessage(failedUpdate.error.message);
      return;
    }

    setMessage('Experience order saved.');
  }

  async function reorderExperience(sourceId: string, targetId: string) {
    if (sourceId === targetId) return;

    const previousExperiences = experiences;
    const pinnedExperiences = experiences.filter((item) => item.is_pinned);
    const movableExperiences = experiences.filter((item) => !item.is_pinned);
    const sourceIndex = movableExperiences.findIndex((item) => item.id === sourceId);
    const targetIndex = movableExperiences.findIndex((item) => item.id === targetId);

    if (sourceIndex < 0 || targetIndex < 0) return;

    const [movedExperience] = movableExperiences.splice(sourceIndex, 1);
    movableExperiences.splice(targetIndex, 0, movedExperience);
    const orderedExperiences = [...pinnedExperiences, ...movableExperiences]
      .map((item, index) => ({ ...item, sort_order: index }));

    await persistExperienceOrder(orderedExperiences, previousExperiences);
  }

  async function signOut() {
    await supabase.auth.signOut();
    router.push('/admin/login');
    router.refresh();
  }

  return (
    <main className={styles.page}>
      <div className={styles.dashboard}>
        <header className={styles.dashboardHeader}>
          <div>
            <p className={styles.eyebrow}>Content management</p>
            <h1>Portfolio Admin</h1>
          </div>
          <button type="button" className="btn btn-secondary" onClick={signOut}>Sign out</button>
        </header>

        {message && <p className={styles.notice}>{message}</p>}

        <section id="admin-profile-section" className={`${styles.panel} ${openSection === 'profile' ? styles.panelOpen : ''}`}>
          <button className={styles.accordionHeader} type="button" onClick={() => toggleSection('profile')} aria-expanded={openSection === 'profile'} aria-controls="admin-profile-content">
            <span><strong>Profile</strong><small>About, contact details and professional summary</small></span>
            <span className={styles.accordionIcon} aria-hidden="true">⌄</span>
          </button>
          <div id="admin-profile-content" className={styles.accordionContent} hidden={openSection !== 'profile'}>
            <form className={styles.form} onSubmit={saveProfile}>
              <div className={styles.formGrid}>
                {([
                  ['name', 'Name'],
                  ['headline', 'Headline'],
                  ['email', 'Email'],
                  ['github_url', 'GitHub URL'],
                  ['linkedin_url', 'LinkedIn URL'],
                ] as const).map(([key, label]) => (
                  <label key={key}>
                    {label}
                    <input value={profile[key]} onChange={(event) => setProfile({ ...profile, [key]: event.target.value })} required={key !== 'linkedin_url'} />
                  </label>
                ))}
              </div>
              <div className={styles.formGrid}>
                <label>Years of experience<input type="number" min="0" value={profile.years_experience} onChange={(event) => setProfile({ ...profile, years_experience: Number(event.target.value) })} required /></label>
                <label>Professional roles<input type="number" min="0" value={profile.professional_roles} onChange={(event) => setProfile({ ...profile, professional_roles: Number(event.target.value) })} required /></label>
                <label>Certification / credential<input value={profile.certification} onChange={(event) => setProfile({ ...profile, certification: event.target.value })} required /></label>
              </div>
              <label>Summary<textarea rows={5} value={profile.summary} onChange={(event) => setProfile({ ...profile, summary: event.target.value })} required /></label>
              <label>Skills summary<textarea rows={5} value={profile.skills_summary} onChange={(event) => setProfile({ ...profile, skills_summary: event.target.value })} required /></label>
              <div className={styles.formGrid}>
                <label>Architecture title<input value={profile.architecture_title} onChange={(event) => setProfile({ ...profile, architecture_title: event.target.value })} required /></label>
                <label>Cloud title<input value={profile.cloud_title} onChange={(event) => setProfile({ ...profile, cloud_title: event.target.value })} required /></label>
                <label>Performance title<input value={profile.performance_title} onChange={(event) => setProfile({ ...profile, performance_title: event.target.value })} required /></label>
              </div>
              <label>Architecture description<textarea rows={3} value={profile.architecture_description} onChange={(event) => setProfile({ ...profile, architecture_description: event.target.value })} required /></label>
              <label>Cloud description<textarea rows={3} value={profile.cloud_description} onChange={(event) => setProfile({ ...profile, cloud_description: event.target.value })} required /></label>
              <label>Performance description<textarea rows={3} value={profile.performance_description} onChange={(event) => setProfile({ ...profile, performance_description: event.target.value })} required /></label>
              <button className="btn btn-primary" type="submit" disabled={saving}>{saving ? 'Saving…' : 'Save profile'}</button>
            </form>
          </div>
        </section>

        <section id="admin-hero-section" className={`${styles.panel} ${openSection === 'hero' ? styles.panelOpen : ''}`}>
          <button className={styles.accordionHeader} type="button" onClick={() => toggleSection('hero')} aria-expanded={openSection === 'hero'} aria-controls="admin-hero-content">
            <span><strong>Hero</strong><small>Landing headline, availability, badges and actions</small></span>
            <span className={styles.accordionIcon} aria-hidden="true">⌄</span>
          </button>
          <div id="admin-hero-content" className={styles.accordionContent} hidden={openSection !== 'hero'}>
            <form className={styles.form} onSubmit={saveHero}>
              <div className={styles.formGrid}>
                <label>Hero title<input value={profile.hero_title} onChange={(event) => setProfile({ ...profile, hero_title: event.target.value })} required /></label>
                <label>Animated role<input value={profile.hero_role} onChange={(event) => setProfile({ ...profile, hero_role: event.target.value })} required /></label>
                <label>Availability text<input value={profile.availability_text} onChange={(event) => setProfile({ ...profile, availability_text: event.target.value })} required /></label>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" checked={profile.is_available} onChange={(event) => setProfile({ ...profile, is_available: event.target.checked })} />
                  Currently available for work
                </label>
              </div>
              <label>Hero description<textarea rows={4} value={profile.hero_description} onChange={(event) => setProfile({ ...profile, hero_description: event.target.value })} required /></label>
              <label>
                Hero technologies
                <textarea rows={5} value={heroTechnologiesText} onChange={(event) => setHeroTechnologiesText(event.target.value)} placeholder="🐹 | Go | Primary language for microservices" required />
                <span className={styles.fieldHint}>Use one technology per line: icon | name | tooltip</span>
              </label>
              <div className={styles.formGrid}>
                <label>Primary button text<input value={profile.hero_primary_cta_text} onChange={(event) => setProfile({ ...profile, hero_primary_cta_text: event.target.value })} required /></label>
                <label>Secondary button text<input value={profile.hero_secondary_cta_text} onChange={(event) => setProfile({ ...profile, hero_secondary_cta_text: event.target.value })} required /></label>
                <label>Third stat value<input value={profile.hero_third_stat_value} onChange={(event) => setProfile({ ...profile, hero_third_stat_value: event.target.value })} required /></label>
                <label>Third stat label<input value={profile.hero_third_stat_label} onChange={(event) => setProfile({ ...profile, hero_third_stat_label: event.target.value })} required /></label>
                <label>Third stat icon<input value={profile.hero_third_stat_icon} onChange={(event) => setProfile({ ...profile, hero_third_stat_icon: event.target.value })} required /></label>
              </div>
              <button className="btn btn-primary" type="submit" disabled={saving}>{saving ? 'Saving…' : 'Save hero'}</button>
            </form>
          </div>
        </section>

        <section id="admin-experience-section" className={`${styles.panel} ${openSection === 'experience' ? styles.panelOpen : ''}`}>
          <button className={styles.accordionHeader} type="button" onClick={() => toggleSection('experience')} aria-expanded={openSection === 'experience'} aria-controls="admin-experience-content">
            <span><strong>Experience</strong><small>Edit, pin and reorder professional experience</small></span>
            <span className={styles.accordionIcon} aria-hidden="true">⌄</span>
          </button>
          <div id="admin-experience-content" className={styles.accordionContent} hidden={openSection !== 'experience'}>
            <div className={styles.experienceList}>
            {experiences.map((item) => (
              <article
                key={item.id}
                className={`${styles.experienceCard} ${draggingExperienceId === item.id ? styles.dragging : ''}`}
                draggable={!item.is_pinned && editingExperienceId !== item.id}
                onDragStart={() => setDraggingExperienceId(item.id)}
                onDragEnd={() => setDraggingExperienceId(null)}
                onDragOver={(event) => {
                  if (!item.is_pinned) event.preventDefault();
                }}
                onDrop={(event) => {
                  event.preventDefault();
                  if (draggingExperienceId && !item.is_pinned) {
                    void reorderExperience(draggingExperienceId, item.id);
                  }
                  setDraggingExperienceId(null);
                }}
              >
                <div className={styles.experienceItem}>
                  <div>
                    <strong><span className={styles.dragHandle} aria-hidden="true">⋮⋮</span>{item.role}</strong>
                    <span>{item.company} · {item.period}</span>
                    <span>Position {item.sort_order + 1}</span>
                  </div>
                  <div className={styles.experienceActions}>
                    {item.is_pinned && <span className={styles.pinBadge}>Pinned</span>}
                    <button type="button" className={styles.editButton} onClick={() => setEditingExperienceId(editingExperienceId === item.id ? null : item.id)}>
                      {editingExperienceId === item.id ? 'Cancel' : 'Edit'}
                    </button>
                    <button type="button" className={styles.deleteButton} onClick={() => removeExperience(item.id)}>Delete</button>
                  </div>
                </div>

                {editingExperienceId === item.id && (
                  <form className={`${styles.form} ${styles.experienceEditor}`} onSubmit={(event) => updateExperience(event, item.id)}>
                    <div className={styles.formGrid}>
                      <label>Role<input name="role" defaultValue={item.role} required /></label>
                      <label>Company<input name="company" defaultValue={item.company} required /></label>
                      <label>Period<input name="period" defaultValue={item.period} required /></label>
                      <label>Location<input name="location" defaultValue={item.location} /></label>
                      <label>Position<input name="position" type="number" min="1" defaultValue={item.sort_order + 1} required /></label>
                      <label className={styles.checkboxLabel}>
                        <input name="is_pinned" type="checkbox" defaultChecked={item.is_pinned} />
                        Keep this experience pinned first
                      </label>
                    </div>
                    <label>Highlights<textarea name="highlights" rows={5} defaultValue={item.highlights.join('\n')} required /></label>
                    <button className="btn btn-primary" type="submit">Save experience</button>
                  </form>
                )}
              </article>
            ))}
            </div>
            <form className={styles.form} onSubmit={addExperience}>
              <div className={styles.formGrid}>
                <label>Role<input name="role" required /></label>
                <label>Company<input name="company" required /></label>
                <label>Period<input name="period" placeholder="Sep 2025 – Present" required /></label>
                <label>Location<input name="location" /></label>
                <label>Position<input name="position" type="number" min="1" defaultValue={experiences.length + 1} required /></label>
                <label className={styles.checkboxLabel}>
                  <input name="is_pinned" type="checkbox" />
                  Keep this experience pinned first
                </label>
              </div>
              <label>Highlights<textarea name="highlights" rows={5} placeholder="One achievement per line" required /></label>
              <button className="btn btn-secondary" type="submit">Add experience</button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
