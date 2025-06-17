
export interface Car {
  id: string;
  marca: string;
  modelo: string;
  version: string;
  ano: number;
  precio: number;
  kilometros: number;
  combustible: string;
  cambio: string;
  potencia: number;
  provincia: string;
  descripcionCorta: string;
  descripcion: string;
  imagenPrincipal: string;
  imagenes: string[];
  caracteristicas: string[];
  vendedor: {
    id: string;
    nombre: string;
    tipo: 'particular' | 'profesional';
    telefono: string;
    valoracion: number;
  };
  esDestacado: boolean;
  fechaPublicacion: string;
}

export interface Categoria {
  id: string;
  nombre: string;
  slug: string;
  icono: string;
  cantidad: number;
}

export interface Marca {
  id: string;
  nombre: string;
  slug: string;
  logo: string;
}

export interface Testimonio {
  id: string;
  nombre: string;
  avatar: string;
  comentario: string;
  estrellas: number;
  vehiculo: string;
}
