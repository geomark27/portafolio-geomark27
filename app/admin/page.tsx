import { redirect } from 'next/navigation';
import AdminPanel from './AdminPanel';
import styles from './admin.module.css';
import { isSupabaseConfigured } from '@/lib/supabase/env';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import type { ExperienceRecord, SiteProfile } from '@/lib/admin-types';

export default async function AdminPage() {
  if (!isSupabaseConfigured) {
    return (
      <main className={styles.page}>
        <div className={styles.setupCard}>
          <p className={styles.eyebrow}>Setup required</p>
          <h1>Connect Supabase</h1>
          <p>Add the Supabase variables from <code>.env.example</code> to <code>.env.local</code>, then run the SQL schema.</p>
        </div>
      </main>
    );
  }

  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect('/admin/login');

  const [{ data: profile }, { data: experiences }] = await Promise.all([
    supabase.from('site_profile').select('*').eq('id', true).maybeSingle(),
    supabase
      .from('experiences')
      .select('*')
      .order('is_pinned', { ascending: false })
      .order('sort_order', { ascending: true }),
  ]);

  return (
    <AdminPanel
      initialProfile={profile as SiteProfile | null}
      initialExperiences={(experiences || []) as ExperienceRecord[]}
    />
  );
}
