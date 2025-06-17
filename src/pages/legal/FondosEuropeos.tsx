import PageHeader from '../../components/PageHeader';
import Section from '../../components/Section';

const FondosEuropeos = () => {
  return (
    <>
      <PageHeader title="FONDOS EUROPEOS" />
      
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-lg text-gray-700 mb-6">
              Subvenciones del Programa para el fomento de la contratación en el ámbito de la Comunidad de Madrid:
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-10">
            <h2 className="text-xl font-bold mb-4">Programa</h2>
            <p className="mb-6">Incentivos a la contratación estable de personas jóvenes</p>
            
            <h2 className="text-xl font-bold mb-4">Descripción</h2>
            <p className="mb-6">
              Ayudas dirigidas a empresas que contraten de manera indefinida a personas jóvenes, con el fin de fomentar el empleo estable y de calidad.
            </p>
            
            <h2 className="text-xl font-bold mb-4">Período</h2>
            <p className="mb-6">2021-2023</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
              <img 
                src="https://www.uadibloc.com/img/fondos-europeos.jpg" 
                alt="Fondos Europeos" 
                className="max-w-[250px]"
              />
              <img 
                src="https://www.uadibloc.com/img/fondos-europeos.jpg" 
                alt="Fondos Europeos" 
                className="max-w-[250px]"
              />
            </div>
          </div>
          
          <p className="text-sm text-gray-600 italic">
            Este programa está cofinanciado por el Fondo Social Europeo y la Iniciativa de Empleo Juvenil
            dentro del Programa Operativo de Empleo Juvenil.
          </p>
        </div>
      </Section>
    </>
  );
};

export default FondosEuropeos;