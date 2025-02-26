import Image from "next/image";

const TestimonialCard = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#fdfaf6] rounded-lg shadow-md overflow-hidden p-6">
      <div className="flex-1 flex justify-center items-center p-4">
        <Image
          src="/testimony.png"
          alt="User giving review"
          width={700}
          height={500}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center p-6 text-2xl">
        <div className="flex space-x-1 text-red-500 text-xl mb-2">
          <span>★</span>
          <span>★</span>
          <span>★</span> 
          <span>★</span>
          <span>★</span>
        </div>
        <p className="text-gray-700 mb-4">
          Purchased a property through Choices, Croydon. Very pleased with the service - Nicola helped through the entire process with constant communication with the seller, their solicitor, and myself which was very helpful. Very friendly and professional. Highly recommended.
        </p>
        <p className="font-bold text-black">RA</p>
        <p className="text-black text-sm font-semibold mb-4">September 9, 2024</p>
        <button className="border border-black text-black px-6 py-3 rounded-md hover:bg-black hover:text-white transition text-lg font-medium shadow-md w-36">
          View more
        </button>
      </div>
    </div>
  );
};

export default TestimonialCard;
