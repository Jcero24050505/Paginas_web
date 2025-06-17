import { PricingOption } from '../types';

export const pricingOptions: PricingOption[] = [
  {
    id: 'entrada-dia',
    title: 'Entrada de Día',
    price: 12,
    description: 'Acceso completo a todas las instalaciones del rocódromo durante un día.',
    imageUrl: 'https://images.pexels.com/photos/7991669/pexels-photo-7991669.jpeg',
    features: [
      'Acceso a todas las zonas de escalada',
      'Uso de vestuarios',
      'Orientación inicial para principiantes',
    ],
    type: 'single'
  },
  {
    id: 'bono-10',
    title: 'Bono 10 Sesiones',
    price: 100,
    description: 'Ahorra con nuestro bono para 10 visitas al rocódromo.',
    imageUrl: 'https://images.pexels.com/photos/7991380/pexels-photo-7991380.jpeg',
    features: [
      'Válido durante 3 meses',
      'Transferible entre amigos',
      'Acceso a todas las instalaciones',
      'Precio reducido por sesión'
    ],
    type: 'membership'
  },
  {
    id: 'mensualidad',
    title: 'Mensualidad Ilimitada',
    price: 50,
    description: 'Para los más asiduos, acceso ilimitado durante todo el mes.',
    imageUrl: 'https://images.pexels.com/photos/9560118/pexels-photo-9560118.jpeg',
    features: [
      'Acceso ilimitado todos los días',
      'Descuentos en cursos y actividades',
      'Reserva prioritaria para vías',
      'Descuento en alquiler de material'
    ],
    type: 'membership'
  },
  {
    id: 'alquiler-pies-gato',
    title: 'Alquiler Pies de Gato',
    price: 4,
    description: 'Calzado especializado para escalada, disponible en todas las tallas.',
    imageUrl: 'https://images.pexels.com/photos/4754771/pexels-photo-4754771.jpeg',
    features: [
      'Para una sesión',
      'Diversas tallas disponibles',
      'Calzado especializado para escalada'
    ],
    type: 'rental'
  },
  {
    id: 'alquiler-arnes',
    title: 'Alquiler Arnés',
    price: 3,
    description: 'Arnés de seguridad ajustable para todas las edades.',
    imageUrl: 'https://images.pexels.com/photos/2378204/pexels-photo-2378204.jpeg',
    features: [
      'Para una sesión',
      'Arnés ajustable',
      'Incluye mosquetón de seguridad'
    ],
    type: 'rental'
  },
  {
    id: 'alquiler-cuerda',
    title: 'Alquiler Cuerda',
    price: 5,
    description: 'Cuerda de escalada de alta calidad con la longitud adecuada.',
    imageUrl: 'https://images.pexels.com/photos/3512835/pexels-photo-3512835.jpeg',
    features: [
      'Para una sesión',
      'Cuerda dinámica de 60m',
      'Incluye bolsa para cuerda'
    ],
    type: 'rental'
  }
];

export const kidsPricing: PricingOption[] = [
  {
    id: 'acceso-libre-ninos',
    title: 'Acceso Libre Niños',
    price: 8,
    description: 'Entrada de día para niños y jóvenes hasta 16 años',
    imageUrl: 'https://images.pexels.com/photos/8422294/pexels-photo-8422294.jpeg',
    features: [
      'Acceso a zonas infantiles de escalada',
      'Supervisión de monitores',
      'Equipamiento básico incluido',
      'Vestuarios adaptados'
    ],
    type: 'single'
  },
  {
    id: 'bono-infantil',
    title: 'Bono Infantil 10 Sesiones',
    price: 70,
    description: 'Ahorra con nuestro bono para 10 visitas para niños',
    imageUrl: 'https://images.pexels.com/photos/8422135/pexels-photo-8422135.jpeg',
    features: [
      'Válido durante 4 meses',
      'Transferible entre hermanos',
      'Incluye pies de gato y arnés',
      'Acceso preferente a actividades infantiles'
    ],
    type: 'membership'
  }
];

export const adultPricing: PricingOption[] = [
  {
    id: 'acceso-libre-adultos',
    title: 'Acceso Libre Adultos',
    price: 12,
    description: 'Entrada de día para adultos con acceso a todas las instalaciones',
    imageUrl: 'https://images.pexels.com/photos/7991669/pexels-photo-7991669.jpeg',
    features: [
      'Acceso a todas las vías y boulder',
      'Uso de vestuarios y taquillas',
      'Asistencia técnica bajo petición',
      'Descuento en Yurok Café'
    ],
    type: 'single'
  },
  {
    id: 'bono-adulto',
    title: 'Bono Adulto 10 Sesiones',
    price: 100,
    description: 'La opción más económica para escaladores regulares',
    imageUrl: 'https://images.pexels.com/photos/7991414/pexels-photo-7991414.jpeg',
    features: [
      'Válido durante 3 meses',
      'Descuentos en material y cursos',
      'Acceso a sesiones técnicas gratuitas',
      'Sin restricciones horarias'
    ],
    type: 'membership'
  }
];