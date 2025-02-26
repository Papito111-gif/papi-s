import Image from "next/image";

const services = [
  {
    title: "Rent Calculator",
    imgSrc: "/rent-calculator.jpeg", 
  },
  {
    title: "Online Valuation",
    imgSrc: "/online-valuation.jpeg", 
  },
  {
    title: "Sell with No Commission",
    imgSrc: "/sell-no-commission.jpeg",
  },
];

const Services = () => {
  return (
    <section className="px-8 py-12 bg-white">
      <div className="text-center mb-8">
        <div className="py-12 px-6 lg:px-20 flex flex-col lg:flex-row items-start gap-8">
        <div className="lg:w-1/3">
            <h4 className="text-sm font-semibold text-gray-500 uppercase">What can we do for you</h4>
        <h2 className="text-4xl  text-gray-900 mt-2">Services we offer</h2>
        </div>
        <div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto px-7 py-7">
          At Choices, we offer a comprehensive range of services
          <br />  to meet all your property needs,
          from property search and investment opportunities
          <br /> to instant and rent valuations.
        </p>
        </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <div key={index} className="relative w-[320px] h-[250px] overflow-hidden rounded-lg shadow-lg">
            <Image src={service.imgSrc} alt={service.title} layout="fill" objectFit="cover" />
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


// import Image from "next/image";
// import { motion } from "framer-motion";


// const services = [
//   { title: "Rent Calculator", src: "/rent-calculator.jpeg" },
//   { title: "Online Valuation", src: "/online-valuation.jpeg" },
//   { title: "Sell With No Commission", src: "/sell-no-commission.jpeg" },
//   { title: "Careers", src: "/career.jpg" },
//   { title: "News", src: "/news.jpeg" },
//   { title: "Contact", src: "/contact.jpeg" }
// ];

// export default function Services() {
//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h2 className="text-3xl font-bold mb-4">Services We Offer</h2>
//       <p className="mb-8 text-gray-600">
//         We offer a comprehensive range of services to meet all your property needs.
//       </p>
//       <div className="grid grid-cols-2 gap-6">
//         {services.map((service, index) => (
//           <motion.div
//             key={index}
//             className="relative overflow-hidden rounded-lg cursor-pointer"
//             whileTap={{ scale: 1.1 }}
//           >
//             <Image
//               src={service.src}
//               alt={service.title}
//               width={500}
//               height={300}
//               className="rounded-lg transition-transform duration-300 hover:scale-110"
//             />
//             <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white font-bold">
//               {service.title}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }
