export const contactConfig = {
  email: 'rmarcosgeovanny1027@gmail.com',
  github: {
    url: 'https://github.com/geomark27',
    handle: '@geomark27',
  },
  linkedin: {
    url: 'https://linkedin.com/in/marcos-ramos-831475207/',
    text: 'Conecta conmigo',
  },
  twitter: {
    url: 'https://twitter.com/yourhandle',
    handle: '@yourhandle',
  },
  cta: {
    title: 'Interested in working together?',
    description: 'Available for freelance projects, technical consulting, and collaboration opportunities in distributed systems architecture and cloud solutions.',
    message: 'Have a project in mind? Let\'s talk about how I can help you.',
    buttonText: 'Send Message',
  },
  footer: '© 2025 Software Developer Portfolio. Built with Next.js & TypeScript.',
};

export const contactLinks = [
  {
    id: 'email',
    title: 'Email',
    url: `mailto:${contactConfig.email}`,
    text: '',
    icon: 'email',
  },
  {
    id: 'github',
    title: 'GitHub',
    url: contactConfig.github.url,
    text: '',
    icon: 'github',
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    url: contactConfig.linkedin.url,
    text: '',
    icon: 'linkedin',
  },
];
