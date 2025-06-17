import { NavLink, SocialLink, HeroImage } from '../types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Clases Escalada', path: '/clases-escalada' },
  { name: 'Cumple Peques', path: '/cumple-peques' },
  { name: 'Horarios y Precios', path: '/precios' },
  { name: 'Visita Virtual', path: '/visita-virtual' },
  { name: 'Condiciones y Normas', path: '/condiciones-y-normas' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { 
    name: 'Instagram', 
    url: 'https://www.instagram.com/rocktownclimb/', 
    icon: 'https://eep.io/mc-cdn-images/icons/social-block-v2/light-instagram-48.png' 
  },
  { 
    name: 'Facebook', 
    url: 'https://www.facebook.com/rocktownclimb/', 
    icon: 'https://eep.io/mc-cdn-images/icons/social-block-v2/light-facebook-48.png' 
  },
  { 
    name: 'Email', 
    url: 'mailto:info@rocktownclimb.com', 
    icon: 'https://eep.io/mc-cdn-images/icons/social-block-v2/light-email-48.png' 
  },
];

export const HERO_IMAGES: HeroImage[] = [
  { 
    url: 'https://mcusercontent.com/6bb17cf10d815a4eb3ca03956/images/86ffb59c-3aac-3448-212f-0fc924ffd8d7.jpg', 
    alt: 'RockTown Climbing Facility'
  },
  { 
    url: 'https://mcusercontent.com/6bb17cf10d815a4eb3ca03956/images/297b6944-6e04-a7ac-05c6-7c6547d1bbfc.jpg', 
    alt: 'RockTown Climbing Walls'
  },
  { 
    url: 'https://mcusercontent.com/6bb17cf10d815a4eb3ca03956/images/d68cc541-6e1d-cf48-68ff-5d214e7d0742.png', 
    alt: 'RockTown Climbing Logo'
  },
];