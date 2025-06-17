import { NavItem } from '../types';

export const navigationItems: NavItem[] = [
  {
    title: 'Rocódromo',
    submenu: [
      {
        title: 'Mi Primer Día',
        path: '/rocodromo/primer-dia',
      },
      {
        title: 'Instalaciones',
        path: '/rocodromo/instalaciones',
      },
      {
        title: 'Yurok Café',
        path: '/rocodromo/cafe',
      },
      {
        title: 'Ocupación de Barras',
        path: '/rocodromo/ocupacion',
      },
    ],
  },
  {
    title: 'Escuela de Escalada',
    submenu: [
      {
        title: 'Escuela Infantil',
        path: '/escuela/infantil',
      },
      {
        title: 'Entrenamiento Adulto',
        path: '/escuela/adulto',
      },
    ],
  },
  {
    title: 'Tarifas',
    submenu: [
      {
        title: 'Entrada y Bonos',
        path: '/tarifas/bonos',
      },
      {
        title: 'Alquilar Material',
        path: '/tarifas/material',
        submenu: [
          {
            title: 'Acceso Libre Niños',
            path: '/tarifas/material/ninos',
          },
          {
            title: 'Acceso Libre Adultos',
            path: '/tarifas/material/adultos',
          },
        ],
      },
    ],
  },
  {
    title: 'Actividades',
    submenu: [
      {
        title: 'Curso de Escalada Rocódromo',
        path: '/actividades/curso-escalada',
      },
      {
        title: 'Actividades para Niños',
        path: '/actividades/ninos',
        submenu: [
          {
            title: 'Cumpleaños Yurok',
            path: '/actividades/ninos/cumpleanos',
          },
          {
            title: 'Escuela de Escalada para Niños',
            path: '/actividades/ninos/escuela',
          },
          {
            title: 'Escuela de Verano Yurok',
            path: '/actividades/ninos/verano',
          },
        ],
      },
      {
        title: 'Actividades para Colegios',
        path: '/actividades/colegios',
        submenu: [
          {
            title: '1º y 2º de Primaria',
            path: '/actividades/colegios/primaria-1-2',
          },
          {
            title: '3º y 4º de Primaria',
            path: '/actividades/colegios/primaria-3-4',
          },
          {
            title: '5º y 6º de Primaria',
            path: '/actividades/colegios/primaria-5-6',
          },
          {
            title: 'Secundaria y Bachillerato',
            path: '/actividades/colegios/secundaria',
          },
          {
            title: 'Centros Formativos',
            path: '/actividades/colegios/formativos',
          },
        ],
      },
      {
        title: 'Actividades de Empresa',
        path: '/actividades/empresa',
      },
    ],
  },
  {
    title: 'Actividades en la Naturaleza',
    submenu: [
      {
        title: 'Escalada en Roca',
        path: '/naturaleza/escalada',
      },
      {
        title: 'Descenso de Barrancos',
        path: '/naturaleza/barrancos',
      },
      {
        title: 'Vías Ferratas',
        path: '/naturaleza/ferratas',
      },
      {
        title: 'Senderismo',
        path: '/naturaleza/senderismo',
      },
      {
        title: 'Raquetas de Nieve',
        path: '/naturaleza/raquetas',
      },
      {
        title: 'Alpinismo-Montañismo',
        path: '/naturaleza/alpinismo',
      },
    ],
  },
  {
    title: 'Contacto',
    path: '/contacto',
  },
];