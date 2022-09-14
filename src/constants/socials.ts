interface SocialLinkProps {
  name: string;
  brandColor?: string;
  website: string;
}

export const USERNAME = 'dylanbuchi';

export const SOCIAL_LINKS: Record<string, SocialLinkProps> = {
  linkedin: {
    name: 'Linkedin',
    brandColor: '#0077b5',
    website: 'https://linkedin.com',
  },
  github: {
    name: 'Github',
    brandColor: '#333',
    website: 'https://github.com',
  },

  twitter: {
    name: 'Twitter',
    brandColor: '#1da1f2',
    website: 'https://twitter.com',
  },
};
