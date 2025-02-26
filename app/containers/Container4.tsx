import Image from "next/image";

interface Property {
  id: number;
  image: string;
  location: string;
  description: string;
  price: string;
}

const properties: Property[] = [
  {
    id: 1,
    image: "/property1.jpeg",
    location: "Jade Way, CRAWLEY, West Sussex",
    description: "3 Bed Semi-detached house For Sale",
    price: "£450,000",
  },
  {
    id: 2,
    image: "/property2.jpeg",
    location: "Goudhurst Road, BROMLEY, Kent",
    description: "2 Bed Property For Sale",
    price: "Guide Price £375,000",
  },
  {
    id: 3,
    image: "/property3.jpeg",
    location: "Netherne Drive, COULSDON, Surrey",
    description: "5 Bed Detached house For Sale",
    price: "£1,200,000",
  },
  {
    id: 4,
    image: "/property4.jpeg",
    location: "Milborne Road, Maidenbower, CRAWLEY",
    description: "3 Bed Semi-detached house For Sale",
    price: "Offers in excess of £465,000",
  },
];

export default function PropertyList() {
  return (
    <div className="p-6 bg-white">
        <p className="text-gray-600">What We Can Do For You</p>
      <h2 className="text-5xl font-semibold text-black">Find your next<br /> property</h2>
      <div className="flex gap-4 mt-4">
        <span className="text-red-500 font-semibold border-b-2 border-red-500">Properties for sale</span>
        <span className="text-gray-600">Properties for rent</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {properties.map((property) => (
          <div key={property.id} className="shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src={property.image}
                alt={property.location}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <span className="absolute bottom-2 left-2  text-white text-2xl font-bold px-2 py-1 rounded pr-64 mt-5 ">
                For Sale
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-black">{property.location}</h3>
              <p className="text-gray-600 text-sm">{property.description}</p>
              <p className="text-red-500 font-bold mt-2">{property.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
        View more
      </button>
    </div>
  );
}
