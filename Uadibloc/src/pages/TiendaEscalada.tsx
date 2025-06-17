import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';

interface ProductProps {
  name: string;
  description: string;
  image: string;
  price: string;
}

const Product: React.FC<ProductProps> = ({ name, description, image, price }) => {
  return (
    <Card 
      image={image}
      imageAlt={name}
      className="h-full flex flex-col"
    >
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-700 mb-4 flex-grow">{description}</p>
      <div className="mt-auto">
        <p className="text-2xl font-bold text-orange-600 mb-4">{price}</p>
        <Button variant="primary" className="w-full">Saber más</Button>
      </div>
    </Card>
  );
};

const TiendaEscalada = () => {
  const products = [
    {
      name: "Arnés de escalada",
      description: "Camp CR3 es un arnés muy cómodo y ligero, ideal para la escalada en roca a todos los niveles. Gracias a su diseño esencial, es una excelente elección para todas las especialidades, desde la escalada en rocódromo hasta la escalada deportiva y la tradicional.",
      image: "https://www.uadibloc.com/img/tienda/arnes-escalada-camp-cr3.jpg",
      price: "43€"
    },
    {
      name: "Arnés Junior",
      description: "Diseñado específicamente para niños y jóvenes escaladores. Cómodo, ajustable y con todas las medidas de seguridad necesarias para los más pequeños de la casa.",
      image: "https://www.uadibloc.com/img/tienda/arnes-escalada-camp-energy-jr.jpg",
      price: "38€"
    },
    {
      name: "Magnesio líquido",
      description: "El magnesio líquido de Mushroom Pads proporciona un agarre excepcional y duradero. Ideal para sesiones largas de escalada, sin necesidad de reaplicar constantemente.",
      image: "https://www.uadibloc.com/img/tienda/magnesio-liquido-mushroompads.jpg",
      price: "10€"
    },
    {
      name: "Magnesio en polvo",
      description: "Magnesio en polvo de alta calidad de Mushroom Pads. Perfecto para mantener las manos secas durante la escalada, proporcionando un agarre óptimo en todo momento.",
      image: "https://www.uadibloc.com/img/tienda/magnesio-en-polvo-mushroom-pads.jpg",
      price: "8€"
    }
  ];

  const rentalItems = [
    { name: "Pies de gato", price: "3€" },
    { name: "Arnés", price: "2€" },
    { name: "Cuerda", price: "5€" },
    { name: "Set completo", price: "8€" }
  ];

  return (
    <>
      <PageHeader 
        title="Descubre nuestra tienda de escalada en pleno Madrid centro"
        backgroundImage="https://www.uadibloc.com/img/tienda-escalada-madrid-centro.jpg"
      />
      
      <Section title="Boutique de escalada">
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-700 text-center">
            En Uadibloc no solo encontrarás un rocódromo con las mejores y más modernas instalaciones. 
            También puedes <strong>alquilar material de escalada</strong> para utilizar en nuestras 
            instalaciones si no dispones de él, o comprar aquellos productos que te ayudarán a 
            completar tu equipo de escalada.
          </p>
        </div>
        
        <h3 className="text-2xl font-bold mb-8">Productos de venta en nuestra tienda de escalada</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <Product 
              key={index}
              name={product.name}
              description={product.description}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
        
        <div className="bg-gray-100 rounded-lg p-8 mt-16">
          <h3 className="text-2xl font-bold mb-6">MATERIAL DE ALQUILER EN SALA</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {rentalItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="text-lg font-bold mb-2">{item.name}</h4>
                <p className="text-2xl font-bold text-orange-600">{item.price}</p>
                <p className="text-sm text-gray-500 mt-1">por día</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">INFORMACIÓN GENERAL:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>El material está disponible exclusivamente para su uso en nuestras instalaciones.</li>
              <li>Se requiere un documento de identidad como fianza durante el período de alquiler.</li>
              <li>Consulta disponibilidad de tallas en pies de gato y arneses.</li>
              <li>Para reservar material con antelación, ponte en contacto con nosotros.</li>
            </ul>
          </div>
        </div>
      </Section>
      
      <Section background="orange" className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">¿Necesitas equipamiento específico?</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Podemos hacer pedidos especiales de material no disponible en tienda. 
          Pregúntanos y te asesoraremos sobre el mejor equipamiento para ti.
        </p>
        <Button to="/donde-estamos" variant="secondary">Contactar</Button>
      </Section>
    </>
  );
};

export default TiendaEscalada;