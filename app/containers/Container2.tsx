import Image from "next/image";

const Container2 = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-white">
     
      <div className="relative overflow-hidden rounded-lg shadow-lg w-full md:w-1/2">
        <Image
          src="/image3.jpg"
          alt="Landlords ARO"
          width={500}
          height={300}
          className="transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
      </div>

    
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-sm font-semibold text-gray-500 uppercase">What We Do</h3>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">Landlords</h2>
        <p className="text-gray-700 mt-4">
          Letts Letmore – Superpower is The Advanced Rent Option (ARO)
        </p>
        <p className="text-gray-600 mt-2">
          With the ARO Landlords who use our Property Management service get
          their rent paid a year in advance at no extra cost.
        </p>
        
       
        <button className="mt-6 bg-red-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-red-700 transition">
          Online valuation
        </button>
      </div>
    </section>
  );
};

export default Container2;
