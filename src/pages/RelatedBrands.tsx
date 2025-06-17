import { useState, useEffect } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const RelatedBrands = () => {
  const [selectedBrand, setSelectedBrand] = useState<number | null>(null);
  const navigate = useNavigate();

  // Sample brands data
  const brands = [
    {
      id: 1,
      name: 'Hyundai',
      claim: 'Innovación y diseño accesible',
      logoUrl: 'https://grupocobendai.com/img/logo-hyundai-cobendai.png',
      path: '/modelos/hyundai',
      models: [
        {
          name: 'Bayon',
          imageUrl: 'https://imagenes.km77.com/fotos/bbtcontent/clippingnew/KM7KPH20210302_0023/full-original.jpg'
        },
        {
          name: 'IONIQ 5',
          imageUrl: 'https://images.coches.com/_vn_/hyundai/IONIQ-5/fad2f9a62825dec61a5b58ee7660dae8.jpg?w=1920&ar=16:9'
        },
        {
          name: 'Kona Electrico',
          imageUrl: 'https://images.prismic.io/carwow/619d5fe4-78e6-40e0-a647-8ade7da85c54_LHD+Hyundai+Kona+Electric+2024+Exterior-03.jpg'
        }
      ]
    },
    {
      id: 2,
      name: 'Motorcar',
      claim: 'Elegancia y tecnología francesa',
      logoUrl: 'https://grupocobendai.com/img/logo-peugeot-motorcar.png',
      path: '/modelos/peugeot',
      models: [
        {
          name: 'Peugot 208',
          imageUrl: 'https://www.peugeot.es/content/dam/peugeot/master/b2c/our-range/showroom/208/2024-09-october-window-evolution-208-wl/new-208---hybrid-page---wl/PEUGEOT_208_HYBRID_STYLE_2410STYP_001_FR_632x632.jpg?imwidth=768'
        },
        {
          name: 'SUV Peugeot 2008',
          imageUrl: 'https://www.media.stellantis.com/cache/9/e/c/0/4/9ec0496772a27e8e64b81b1c9bd10c8ba5dc8b67.jpeg'
        },
        {
          name: 'SUV Peugeot 3008',
          imageUrl: 'https://images.coches.com/_vn_/peugeot/3008/5c9af7e150702e9dd953f0a52f989778.jpg?w=1920&ar=16:9'
        }
      ]
    },
    {
      id: 3,
      name: 'Suzuki',
      claim: 'Espíritu aventurero',
      logoUrl: 'https://grupocobendai.com/img/logo-suzuki-asimco.png',
      path: '/modelos/suzuki',
      models: [
        {
          name: 'Suzuki Swace',
          imageUrl: 'https://auto.suzuki.es/storage/images/8qjrwxzkyfwlkby3u3evmyhlqir1ownlyzpa8iix.jpg'
        },
        {
          name: 'Suzuki Across',
          imageUrl: 'https://auto.suzuki.es/storage/images/cdhl7x1y0tpidgqmdqierpoceegwpv02gheanpnl.jpg'
        },
        {
          name: 'Nuevo Suzuki Swift',
          imageUrl: 'https://auto.suzuki.es/assets/img/new-swift-front.png'
        }
      ]
    },
    {
      id: 4,
      name: 'KGM',
      claim: 'Calidad garantizada',
      logoUrl: 'https://grupocobendai.com/KGM-marca/img/LogoKGM.png',
      path: '/modelos/ssangyong',
      models: [
        {
          name: 'Korando',
          imageUrl: 'https://www.autopista.es/uploads/s1/13/29/01/63/ssangyong-actualiza-la-imagen-de-su-suv-korando-dando-mas-protagonismo-al-color-negro.jpeg'
        },
        {
          name: 'Korando Emotion',
          imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/precio-ssangyong-korando-e-motion-202183295-1638869494-1-1639307421.jpg'
        },
        {
          name: 'Musso sport',
          imageUrl: 'https://images.coches.com/_vn_/ssangyong/Musso/1c8a1739b0906e9983d335fabdc8682b.jpg?w=1920&ar=16:9'
        }
      ]
    },
    {
      id: 5,
      name: 'Subaru',
      claim: 'Seguridad y rendimiento',
      logoUrl: 'https://grupocobendai.com/img/Logo-subaru.png',
      path: '/modelos/subaru',
      models: [
        {
          name: 'Nuevo Forester',
          imageUrl: 'https://cdn.motor1.com/images/mgl/P3JyAX/s1/prueba-subaru-forester-2025.webp'
        },
        {
          name: 'Outback',
          imageUrl: 'https://www.subarubarcelona.es/images/blog/original/1609764392subaru-outback.jpg'
        },
        {
          name: 'Solterra',
          imageUrl: 'https://fotos.quecochemecompro.com/subaru-solterra/subaru-solterra-lado.jpg?size=750x400'
        }
      ]
    },
    {
      id: 6,
      name: 'MG',
      claim: 'Tradición británica renovada',
      logoUrl: 'https://grupocobendai.com/img/logo-mg.png',
      path: '/modelos/mg',
      models: [
        {
          name: 'MG4 Electric',
          imageUrl: 'https://static.motor.es/fotos-jato/mg/uploads/mg-mg4-633610d3a3607.jpg'
        },
        {
          name: 'MG5',
          imageUrl: 'https://static.motor.es/fotos-jato/mg/uploads/mg-mg5-6268186d9213b.jpg'
        },
        {
          name: 'MG HS PHEV',
          imageUrl: 'https://mgmotor.imgix.net/images/model/hs-phev-2024/hs-phev-outstanding-performance.jpg?ixlib=js-3.3.0&crop=focalpoint&fit=crop&fm=webp&fp-x=0.5&fp-y=0.5&h=440&q=80&ratio=2&w=720%20720w&auto=format'
        }
      ]
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.brand-card') && !target.closest('.brand-details')) {
        setSelectedBrand(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Nuestras marcas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
            Marcas de Confianza para tu Movilidad
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed">
            En Grupo Cobendai, colaboramos con marcas líderes del sector automovilístico para ofrecerte una experiencia de movilidad excepcional. Nuestra selección cuidadosa de fabricantes garantiza calidad, innovación y un servicio integral para todos nuestros clientes en Madrid.
          </p>
        </div>
      </section>
      
      {/* Brands Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:underline text-lg">
              <ArrowLeft size={20} className="mr-2" /> Volver al inicio
            </Link>
          </div>

          {/* Brands Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 relative">
            {brands.map((brand) => (
              <div key={brand.id} className="relative">
                <div 
                  className="brand-card bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                  onClick={() => setSelectedBrand(selectedBrand === brand.id ? null : brand.id)}
                >
                  <img 
                    src={brand.logoUrl} 
                    alt={brand.name}
                    className="h-24 md:h-32 object-contain mx-auto mb-6"
                  />
                  <p className="text-lg text-gray-700 text-center font-medium">{brand.claim}</p>
                </div>

                {/* Brand Details Popup */}
                {selectedBrand === brand.id && (
                  <div className="brand-details fixed inset-0 z-50 flex items-center justify-center px-4">
                    <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setSelectedBrand(null)}></div>
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-8 z-10">
                      <button 
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-2"
                        onClick={() => setSelectedBrand(null)}
                      >
                        <X size={24} />
                      </button>

                      <h3 className="text-3xl font-bold mb-6">{brand.name}</h3>

                      {/* Models Carousel */}
                      <div className="mb-8">
                        <Swiper
                          modules={[Navigation, Pagination, Autoplay]}
                          spaceBetween={30}
                          slidesPerView={1}
                          navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next',
                          }}
                          pagination={{ 
                            clickable: true,
                            bulletClass: 'swiper-pagination-bullet !bg-blue-600'
                          }}
                          autoplay={{ 
                            delay: 4000,
                            disableOnInteraction: false
                          }}
                          className="relative"
                        >
                          {brand.models.map((model, index) => (
                            <SwiperSlide key={index}>
                              <div className="aspect-w-16 aspect-h-9">
                                <img 
                                  src={model.imageUrl} 
                                  alt={model.name}
                                  className="w-full h-[400px] object-cover rounded-lg"
                                />
                                <p className="text-center mt-4 text-xl font-semibold">{model.name}</p>
                              </div>
                            </SwiperSlide>
                          ))}
                          <div className="swiper-button-prev !w-12 !h-12 !bg-white !rounded-full !shadow-md flex items-center justify-center">
                            <ChevronLeft size={24} className="text-blue-600" />
                          </div>
                          <div className="swiper-button-next !w-12 !h-12 !bg-white !rounded-full !shadow-md flex items-center justify-center">
                            <ChevronRight size={24} className="text-blue-600" />
                          </div>
                        </Swiper>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col md:flex-row gap-4">
                        <button 
                          className="flex-1 bg-blue-600 text-white text-lg font-medium py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors"
                          onClick={() => {
                            setSelectedBrand(null);
                            navigate(brand.path);
                          }}
                        >
                          Ver todos los modelos {brand.name}
                        </button>
                        <Link 
                          to="/servicios"
                          className="flex-1 border-2 border-blue-600 text-blue-600 text-lg font-medium py-4 px-8 rounded-lg hover:bg-blue-50 transition-colors text-center"
                        >
                          Servicios {brand.name}
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">¿Quieres más información sobre alguna marca?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Contacta con nosotros para obtener más detalles sobre nuestros servicios para cualquiera de las marcas con las que trabajamos.
          </p>
          <Link 
            to="/contacto" 
            className="inline-block bg-white text-blue-700 px-10 py-4 rounded-lg text-xl font-medium hover:bg-gray-100 transition-colors"
          >
            Contactar
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RelatedBrands;