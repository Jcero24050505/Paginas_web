import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CarCard } from "@/components/cars/CarCard";
import { useForm } from "react-hook-form";
import { ArrowLeft, Calendar, Check, Heart, MapPin, Phone, Share2, Truck } from "lucide-react";
import { Car } from "@/lib/types";

const CarDetail = () => {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Form definition for the contact form
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "Me interesa este coche y me gustaría recibir más información."
    }
  });

  // Example car data - Modified to match Car interface
  const car = {
    id: id || "2",
    marca: "BMW",
    modelo: "Serie 3",
    version: "320d xDrive M Sport",
    ano: 2022,
    precio: 48750,
    kilometros: 15200,
    combustible: "Diésel",
    cambio: "Automático",
    potencia: 190,
    provincia: "Madrid",
    descripcionCorta: "Excepcional BMW Serie 3 con paquete M Sport y tracción integral",
    descripcion: "Este BMW Serie 3 320d xDrive combina potencia, eficiencia y lujo en un solo vehículo. Con su potente motor diésel de 190CV y tracción integral, ofrece un rendimiento excepcional en cualquier condición. El paquete M Sport añade un toque deportivo tanto en el exterior como en el interior. El vehículo se encuentra en estado impecable, con un solo propietario y todas las revisiones realizadas en concesionario oficial. Incluye navegador profesional, techo panorámico, asistentes de conducción y mucho más. ¡Una oportunidad única para adquirir este vehículo premium!",
    imagenPrincipal: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    imagenes: [
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
    ],
    caracteristicas: [
      "Navegador GPS Profesional",
      "Techo panorámico",
      "Faros LED adaptativos",
      "Control de crucero adaptativo",
      "Asientos deportivos M",
      "Llantas de 19 pulgadas",
      "Sistema de sonido Harman Kardon",
      "Asistente de aparcamiento",
      "Head-up Display",
      "Acceso sin llave",
      "Tapicería de cuero",
      "Suspensión adaptativa",
      "Apple CarPlay y Android Auto",
      "Cámara 360º"
    ],
    vendedor: {
      id: "vend-2",
      nombre: "Premium Cars Madrid",
      tipo: "profesional" as const, // Fixed: explicitly typed as "profesional"
      telefono: "917654321",
      valoracion: 4.8
    },
    esDestacado: true,
    fechaPublicacion: "2023-06-15"
  };

  // Similar cars - Fixed to match Car interface
  const similarCars: Car[] = [
    {
      id: "sim-1",
      marca: "BMW",
      modelo: "Serie 5",
      version: "520d M Sport",
      ano: 2021,
      precio: 55000,
      kilometros: 20000,
      combustible: "Diésel",
      cambio: "Automático",
      potencia: 190,
      provincia: "Barcelona",
      descripcionCorta: "BMW Serie 5 con acabado M Sport y navegador profesional",
      descripcion: "BMW Serie 5 en perfecto estado con acabado M Sport, todos los extras y mantenimiento al día.",
      imagenPrincipal: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      imagenes: [],
      caracteristicas: ["Navegador GPS", "Techo panorámico", "Asistente de conducción"],
      vendedor: {
        id: "vend-5",
        nombre: "Auto Premium Barcelona",
        tipo: "profesional", // Fixed: using the literal type
        telefono: "932345678",
        valoracion: 4.7
      },
      esDestacado: true,
      fechaPublicacion: "2023-06-10"
    },
    {
      id: "sim-2",
      marca: "Mercedes",
      modelo: "Clase C",
      version: "C220d AMG Line",
      ano: 2022,
      precio: 46900,
      kilometros: 18000,
      combustible: "Diésel",
      cambio: "Automático",
      potencia: 194,
      provincia: "Madrid",
      descripcionCorta: "Mercedes Clase C con paquete AMG Line y muy pocos kilómetros",
      descripcion: "Mercedes-Benz Clase C en estado impecable con acabado AMG Line. Vehículo revisado y certificado por la marca.",
      imagenPrincipal: "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      imagenes: [],
      caracteristicas: ["Navegador GPS", "Techo panorámico", "Asientos climatizados"],
      vendedor: {
        id: "vend-1",
        nombre: "Concesionario Oficial Mercedes-Benz",
        tipo: "profesional", // Fixed: using the literal type
        telefono: "912345678",
        valoracion: 4.8
      },
      esDestacado: false,
      fechaPublicacion: "2023-05-15"
    },
    {
      id: "sim-3",
      marca: "Audi",
      modelo: "A4",
      version: "40 TDI S line",
      ano: 2023,
      precio: 49800,
      kilometros: 5000,
      combustible: "Diésel",
      cambio: "Automático",
      potencia: 204,
      provincia: "Valencia",
      descripcionCorta: "Audi A4 seminuevo con acabado S line",
      descripcion: "Audi A4 prácticamente nuevo con acabado S line. Equipamiento completo y garantía oficial hasta 2026.",
      imagenPrincipal: "https://images.unsplash.com/photo-1606664520689-92be5370df99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      imagenes: [],
      caracteristicas: ["Virtual Cockpit", "Asistente de conducción", "Luces Matrix LED"],
      vendedor: {
        id: "vend-3",
        nombre: "Audi Center Valencia",
        tipo: "profesional", // Fixed: using the literal type
        telefono: "962345678",
        valoracion: 4.9
      },
      esDestacado: true,
      fechaPublicacion: "2023-06-01"
    }
  ];

  const formattedPrice = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(car.precio);
  
  const formattedKm = new Intl.NumberFormat("es-ES").format(car.kilometros);

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    // Here would be the logic to send the contact form
    alert("Mensaje enviado correctamente. El vendedor contactará contigo pronto.");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        {/* Breadcrumbs */}
        <div className="bg-white border-b py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm text-gray-600">
              <Link to="/" className="hover:text-carmarketplace-600">Inicio</Link>
              <span className="mx-2">›</span>
              <Link to="/comprar" className="hover:text-carmarketplace-600">Comprar</Link>
              <span className="mx-2">›</span>
              <Link to={`/coches?marca=${car.marca}`} className="hover:text-carmarketplace-600">{car.marca}</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-900 font-medium">{car.marca} {car.modelo}</span>
            </div>
          </div>
        </div>
        
        {/* Vehicle main info */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
                {car.marca} {car.modelo} {car.version}
              </h1>
              <p className="text-gray-600 mt-1">{car.provincia} - Publicado el {new Date(car.fechaPublicacion).toLocaleDateString('es-ES')}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <h2 className="text-3xl md:text-4xl font-bold text-carmarketplace-600">{formattedPrice}</h2>
            </div>
          </div>
          
          {/* Vehicle gallery and main info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Gallery */}
            <div className="lg:col-span-2 space-y-4">
              <div className="aspect-video overflow-hidden rounded-lg bg-gray-200">
                <img 
                  src={car.imagenPrincipal} 
                  alt={`${car.marca} ${car.modelo}`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {car.imagenes.map((imagen, index) => (
                  <div key={index} className="aspect-video overflow-hidden rounded-lg bg-gray-200">
                    <img 
                      src={imagen} 
                      alt={`${car.marca} ${car.modelo} - vista ${index + 2}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              {/* Vehicle details tabs */}
              <Tabs defaultValue="descripcion" className="mt-8">
                <TabsList className="w-full grid grid-cols-3 mb-6">
                  <TabsTrigger value="descripcion">Descripción</TabsTrigger>
                  <TabsTrigger value="caracteristicas">Características</TabsTrigger>
                  <TabsTrigger value="equipamiento">Equipamiento</TabsTrigger>
                </TabsList>
                
                <TabsContent value="descripcion" className="bg-white p-6 rounded-lg border">
                  <h3 className="font-bold text-xl mb-4">Descripción del vehículo</h3>
                  <div className="space-y-4">
                    <p className="text-gray-700">{car.descripcion}</p>
                    <div className="grid grid-cols-2 gap-6 mt-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-900">Certificaciones</h4>
                        <ul className="space-y-2">
                          {(car as any).certificaciones && (car as any).certificaciones.map((item: string, i: number) => (
                            <li key={i} className="flex items-center">
                              <Check className="h-5 w-5 text-green-500 mr-2" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-900">Garantía</h4>
                        <p className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          <span>{(car as any).garantia} incluida</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="caracteristicas" className="bg-white p-6 rounded-lg border">
                  <h3 className="font-bold text-xl mb-4">Ficha técnica</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-500 text-sm">MARCA Y MODELO</h4>
                        <p className="font-medium">{car.marca} {car.modelo} {car.version}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-500 text-sm">AÑO</h4>
                        <p className="font-medium">{car.ano}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-500 text-sm">KILOMETRAJE</h4>
                        <p className="font-medium">{formattedKm} km</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-500 text-sm">COMBUSTIBLE</h4>
                        <p className="font-medium">{car.combustible}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-500 text-sm">CAMBIO</h4>
                        <p className="font-medium">{car.cambio}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-500 text-sm">POTENCIA</h4>
                        <p className="font-medium">{car.potencia} CV</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-500 text-sm">PROVINCIA</h4>
                        <p className="font-medium">{car.provincia}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-500 text-sm">GARANTÍA</h4>
                        <p className="font-medium">{(car as any).garantia}</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="equipamiento" className="bg-white p-6 rounded-lg border">
                  <h3 className="font-bold text-xl mb-4">Equipamiento y extras</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6">
                    {car.caracteristicas.map((feature, i) => (
                      <div key={i} className="flex items-center py-2">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
              
              {/* Similar vehicles */}
              <div className="mt-12">
                <h3 className="font-heading font-bold text-2xl mb-6">Vehículos similares</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {similarCars.map((similarCar) => (
                    <CarCard key={similarCar.id} car={similarCar} />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar with actions and seller info */}
            <div className="space-y-6">
              {/* Actions */}
              <div className="bg-white rounded-lg border p-6 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center"
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    <Heart className={`mr-2 h-5 w-5 ${isFavorite ? 'fill-carmarketplace-accent-500 text-carmarketplace-accent-500' : ''}`} />
                    {isFavorite ? 'Guardado' : 'Guardar'}
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Share2 className="mr-2 h-5 w-5" />
                    Compartir
                  </Button>
                </div>
                
                <Button size="lg" className="w-full bg-carmarketplace-600 hover:bg-carmarketplace-700 mb-4">
                  <Phone className="mr-2 h-5 w-5" />
                  {car.vendedor.telefono}
                </Button>
                
                {(car as any).financiacion?.disponible && (
                  <div className="border rounded-lg p-4 mb-4 bg-carmarketplace-50">
                    <h3 className="font-bold text-lg mb-2">Financiación disponible</h3>
                    <p className="text-sm mb-3">
                      Entrada: <span className="font-semibold">{(car as any).financiacion.entrada}€</span> | 
                      Cuota: <span className="font-semibold">{(car as any).financiacion.cuota}€/mes</span>
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Solicitar financiación
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">
                      *Financiación sujeta a aprobación por parte de la entidad financiera
                    </p>
                  </div>
                )}
              </div>
              
              {/* Seller info */}
              <div className="bg-white rounded-lg border p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    <img 
                      src={(car.vendedor as any).logo} 
                      alt={car.vendedor.nombre} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{car.vendedor.nombre}</h3>
                    <div className="flex items-center">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(car.vendedor.valoracion) ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">{car.vendedor.valoracion}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                  <span>{(car.vendedor as any).direccion}</span>
                </div>
                
                <Badge variant="outline" className="mb-4">
                  {car.vendedor.tipo === 'profesional' ? 'Concesionario oficial' : 'Vendedor particular'}
                </Badge>
                
                <Button className="w-full">Ver más vehículos</Button>
              </div>
              
              {/* Contact form */}
              <div className="bg-white rounded-lg border p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-4">Contactar con el vendedor</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre</FormLabel>
                          <FormControl>
                            <Input placeholder="Tu nombre" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Tu email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teléfono</FormLabel>
                          <FormControl>
                            <Input placeholder="Tu número de teléfono" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensaje</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Escribe tu mensaje aquí..." 
                              className="h-24" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full">Enviar mensaje</Button>
                  </form>
                </Form>
              </div>
              
              {/* Ad space or additional info */}
              <div className="bg-gray-100 rounded-lg border p-6 text-center">
                <Calendar className="h-8 w-8 mx-auto mb-2 text-carmarketplace-600" />
                <h4 className="font-semibold text-lg mb-2">¿Quieres ver el coche?</h4>
                <p className="text-sm text-gray-600 mb-4">Programa una visita presencial o videollamada con el vendedor</p>
                <Button variant="outline" className="w-full">
                  Programar cita
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services section */}
        <div className="bg-white border-t mt-12 py-12">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-bold text-2xl text-center mb-8">Servicios adicionales</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 border rounded-lg">
                <Truck className="h-12 w-12 text-carmarketplace-600 mb-4" />
                <h3 className="font-bold text-lg mb-2">Transporte a domicilio</h3>
                <p className="text-gray-600 mb-4">Te entregamos el vehículo en la puerta de tu casa en cualquier punto de España.</p>
                <Button variant="outline" className="mt-auto">Solicitar información</Button>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 border rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-12 w-12 text-carmarketplace-600 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v.01M12 8v.01M12 12v.01M12 16v.01M12 20v.01M16 12h4.01M8 12H4m16-8H4v16h16V4z" />
                </svg>
                <h3 className="font-bold text-lg mb-2">Informe completo del vehículo</h3>
                <p className="text-gray-600 mb-4">Accede al historial completo del vehículo: propietarios, ITV, reparaciones, etc.</p>
                <Button variant="outline" className="mt-auto">Consultar informe</Button>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 border rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-12 w-12 text-carmarketplace-600 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                <h3 className="font-bold text-lg mb-2">Garantía mecánica ampliada</h3>
                <p className="text-gray-600 mb-4">Extiende la garantía hasta 3 años con cobertura total mecánica y eléctrica.</p>
                <Button variant="outline" className="mt-auto">Ampliar garantía</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CarDetail;
