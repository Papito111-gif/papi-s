import Image from "next/image";

const services = [
  { title: "Rent Calculator", imgSrc: "/rent-calculator.jpeg" },
  { title: "Online Valuation", imgSrc: "/online-valuation.jpeg" },
  { title: "Sell with No Commission", imgSrc: "/sell-no-commission.jpeg" },
  { title: "Careers", imgSrc: "/career.jpg" },
  { title: "News", imgSrc: "/news.jpeg" },
  { title: "Contact", imgSrc: "/contact.jpeg" }
];

const Services = () => {
  return (
    <section className="px-6 py-12 bg-white">
      <div className="text-center mb-12">
        <h4 className="text-sm font-semibold text-gray-500 uppercase">What can we do for you</h4>
        <h2 className="text-4xl text-gray-900 mt-2">Services we offer</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          At Choices, we offer a comprehensive range of services to meet all your property needs,
          from property search and investment opportunities to instant and rent valuations.
        </p>
      </div>
      
      <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="relative w-full h-[250px] overflow-hidden rounded-lg shadow-lg">
            <Image src={service.imgSrc} alt={service.title} layout="fill" objectFit="cover" className="transition-transform duration-300 hover:scale-110" />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-lg font-bold">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
