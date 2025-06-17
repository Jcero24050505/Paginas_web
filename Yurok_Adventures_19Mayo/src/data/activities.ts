import { Activity } from '../types';

export const outdoorActivities: Activity[] = [
  {
    id: 'escalada-roca',
    title: 'Escalada en Roca',
    description: 'Experimenta la emoción de la escalada en rocas naturales con nuestros guías expertos. Adaptamos las rutas a todos los niveles, desde principiantes hasta escaladores avanzados.',
    imageUrl: 'https://images.pexels.com/photos/6650184/pexels-photo-6650184.jpeg',
    difficulty: 'medium',
    duration: '4-6 horas',
  },
  {
    id: 'barrancos',
    title: 'Descenso de Barrancos',
    description: 'Adéntrate en los cañones más espectaculares, combinando senderismo, natación y rapel en un entorno natural único.',
    imageUrl: 'https://images.pexels.com/photos/10342357/pexels-photo-10342357.jpeg',
    difficulty: 'medium',
    duration: '5-7 horas',
  },
  {
    id: 'ferratas',
    title: 'Vías Ferratas',
    description: 'Recorre rutas equipadas con cables, peldaños y puentes que te permitirán alcanzar lugares inaccesibles de otra manera mientras disfrutas de vistas increíbles.',
    imageUrl: 'https://images.pexels.com/photos/7129785/pexels-photo-7129785.jpeg',
    difficulty: 'medium',
    duration: '3-5 horas',
  },
  {
    id: 'senderismo',
    title: 'Senderismo',
    description: 'Explora los senderos más hermosos y descubre la naturaleza en su estado más puro con nuestras rutas guiadas.',
    imageUrl: 'https://images.pexels.com/photos/2365457/pexels-photo-2365457.jpeg',
    difficulty: 'easy',
    duration: '2-8 horas',
  },
  {
    id: 'raquetas',
    title: 'Raquetas de Nieve',
    description: 'Camina sobre la nieve y descubre paisajes invernales mágicos de forma segura con nuestros guías especializados.',
    imageUrl: 'https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg',
    difficulty: 'easy',
    duration: '3-4 horas',
  },
  {
    id: 'alpinismo',
    title: 'Alpinismo-Montañismo',
    description: 'Conquista las cumbres más emblemáticas con nuestros guías profesionales que garantizan tu seguridad mientras vives una experiencia inolvidable.',
    imageUrl: 'https://images.pexels.com/photos/2695755/pexels-photo-2695755.jpeg',
    difficulty: 'hard',
    duration: '6-10 horas',
  },
];

export const kidsActivities: Activity[] = [
  {
    id: 'cumpleanos',
    title: 'Cumpleaños Yurok',
    description: 'Celebra un cumpleaños inolvidable con actividades de escalada adaptadas para niños, juegos y merienda en nuestras instalaciones.',
    imageUrl: 'https://images.pexels.com/photos/8421893/pexels-photo-8421893.jpeg',
    ageGroup: '4-16 años',
    duration: '2-3 horas',
  },
  {
    id: 'escuela-ninos',
    title: 'Escuela de Escalada para Niños',
    description: 'Programa regular donde los niños aprenden técnicas de escalada adaptadas a su edad mientras se divierten y desarrollan habilidades psicomotrices.',
    imageUrl: 'https://images.pexels.com/photos/8422206/pexels-photo-8422206.jpeg',
    ageGroup: '4-16 años',
    duration: 'Programa trimestral',
  },
  {
    id: 'escuela-verano',
    title: 'Escuela de Verano Yurok',
    description: 'Campamento urbano donde combinamos escalada con otras actividades deportivas y lúdicas durante las vacaciones escolares.',
    imageUrl: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
    ageGroup: '4-16 años',
    duration: 'Semanal/Mensual (verano)',
  },
];

export const schoolActivities: Activity[] = [
  {
    id: 'primaria-1-2',
    title: 'Actividades 1º y 2º de Primaria',
    description: 'Juegos de iniciación a la escalada adaptados para los más pequeños, centrados en la psicomotricidad y la confianza.',
    imageUrl: 'https://images.pexels.com/photos/6404252/pexels-photo-6404252.jpeg',
    ageGroup: '6-8 años',
    duration: '1-2 horas',
  },
  {
    id: 'primaria-3-4',
    title: 'Actividades 3º y 4º de Primaria',
    description: 'Introducción a técnicas básicas de escalada combinadas con ejercicios de cooperación y trabajo en equipo.',
    imageUrl: 'https://images.pexels.com/photos/8422290/pexels-photo-8422290.jpeg',
    ageGroup: '8-10 años',
    duration: '2-3 horas',
  },
  {
    id: 'primaria-5-6',
    title: 'Actividades 5º y 6º de Primaria',
    description: 'Escalada deportiva adaptada con retos de dificultad progresiva y actividades para fomentar la autonomía.',
    imageUrl: 'https://images.pexels.com/photos/9559843/pexels-photo-9559843.jpeg',
    ageGroup: '10-12 años',
    duration: '2-3 horas',
  },
  {
    id: 'secundaria',
    title: 'Secundaria y Bachillerato',
    description: 'Programas de escalada deportiva completos enfocados en técnica, seguridad y superación personal.',
    imageUrl: 'https://images.pexels.com/photos/5407189/pexels-photo-5407189.jpeg',
    ageGroup: '12-18 años',
    duration: '3-4 horas',
  },
];