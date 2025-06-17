import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2082b3] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Espacio Acción</h3>
            <p className="mb-4">
              Centro de escalada y actividades deportivas para todas las edades.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/espacioaccion" className="hover:text-[#50aed9]">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/espacioaccion/" className="hover:text-[#feda75]">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com/EscaladaAccion" className="hover:text-[#50aed9]">
                <Twitter size={20} />
              </a>
              <a href="https://www.youtube.com/user/espacioaccion" className="hover:text-[#50aed9]">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#50aed9]">Inicio</Link>
              </li>
              <li>
                <Link to="/el-centro" className="hover:text-[#50aed9]">El Centro</Link>
              </li>
              <li>
                <Link to="/actividades" className="hover:text-[#50aed9]">Actividades</Link>
              </li>
              <li>
                <Link to="/tarifas" className="hover:text-[#50aed9]">Tarifas</Link>
              </li>
              <li>
                <Link to="/programacion" className="hover:text-[#50aed9]">Programación</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/actividades/cursos" className="hover:text-[#50aed9]">Cursos</Link>
              </li>
              <li>
                <Link to="/actividades/entrenamiento" className="hover:text-[#50aed9]">Entrenamiento</Link>
              </li>
              <li>
                <Link to="/actividades/escuela-juvenil" className="hover:text-[#50aed9]">Escuela Juvenil</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>C. de Marcelino Álvarez, 6, 28017 Madrid</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>91 326 72 92</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>informacion@espacioaccion.es</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#50aed9] text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Espacio Acción. Todos los derechos reservados.</p>
            <div className="mt-4 md:mt-0">
              <Link to="/privacidad" className="hover:text-[#50aed9] mr-4">Política de Privacidad</Link>
              <Link to="/cookies" className="hover:text-[#50aed9] mr-4">Política de Cookies</Link>
              <Link to="/legal" className="hover:text-[#50aed9]">Aviso Legal</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;