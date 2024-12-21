import React, {useState} from "react";
import product1 from "../assets/image/1b846b80-0e90-4975-af78-3561146a9474.jpg";
import product2 from "../assets/image/3a97f663-6ef6-4aeb-9e92-a8f296dfbced.png";
import product3 from "../assets/image/e028d1af-cb18-499d-bbab-159fb75e4fb3.png";
import product4 from "../assets/image/ddc0b88e-321b-4eb7-a542-d0e2e07b0f0d.png";
import product5 from "../assets/image/c556bd6e-9b5a-4992-bd36-bd59d26250dd.jpg";
import product6 from "../assets/image/d47c456f-4a19-4a8a-bf2b-b9e07a98d380.png";

const Products = () => {
  const [activeTab, setActiveTab] = useState("all");

  const products = [
    {
      id: 1,
      type: "gold",
      name: "Алтан Эдлэл",
      image: product1,
    },
    {
      id: 2,
      type: "silver",
      name: "Мөнгөн Аяга",
      image: product2,
    },
    {
      id: 3,
      type: "gold",
      name: "Алтан Эдлэл",
      image: product3,
    },
    {
      id: 4,
      type: "handmade",
      name: "Эсгий Шатар",
      image: product4,
    },
    {
      id: 5,
      type: "gold",
      name: "Алтан Эдлэл",
      image: product5,
    },
    {
      id: 6,
      type: "gold",
      name: "Алтан Эдлэл",
      image: product6,
    },
  ];

  const tabs = [
    {type: "all", label: "Бүгд"},
    {type: "gold", label: "Алтан Эдлэл"},
    {type: "silver", label: "Мөнгөн Эдлэл"},
    {type: "handmade", label: "Гар Урлал"},
  ];

  return (
    <div className=' flex flex-col items-start p-[80px]'>
      {/* Tabs */}
      <div className='flex gap-4 my-4'>
        {tabs.map((tab) => (
          <button
            key={tab.type}
            className={`px-4 py-2 border rounded-lg transition-colors ${
              activeTab === tab.type
                ? "bg-[#E1BE4A] text-white border-[#E1BE4A]"
                : "border-2 border-[#E1BE4A] text-gray-800 hover:bg-[#E1BE4A] hover:text-white"
            }`}
            onClick={() => setActiveTab(tab.type)}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full '>
        {products
          .filter(
            (product) => activeTab === "all" || product.type === activeTab
          )
          .map((product) => (
            <div
              key={product.id}
              className='border rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow border-[#E1BE4A] border-2 shadow-xl'>
              <img
                src={product.image}
                alt={product.name}
                className='w-full h-40 object-cover rounded-md mb-4'
              />
              <h3 className='text-lg font-semibold'>{product.name}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
