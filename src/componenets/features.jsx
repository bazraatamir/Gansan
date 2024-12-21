import React from "react";
import productIMG from "../assets/image/ddc0b88e-321b-4eb7-a542-d0e2e07b0f0d.png";

const Features = () => {
  return (
    <section className='bg-[#E1BE4A] py-16 px-6'>
      <div className='max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10'>
        {/* Text Section */}
        <div className='lg:w-1/2 text-center lg:text-left'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-6'>
            Бидний онцлог
          </h2>
          <p className='text-base sm:text-lg text-gray-600 mb-8'>
            Энэхүү иж бүрдэл нь таныг эхлүүлэхэд тань туслах урьдчилан бэлтгэсэн
            гурван хуудастай илүү хурдан. Та текст болон зургийг өөрчлөх
            боломжтой бөгөөд та явахад бэлэн байна.
          </p>
          <ul className='space-y-4'>
            <li className='flex items-center'>
              <span className='text-green-500 text-2xl sm:text-3xl mr-4'>
                ⚙️
              </span>
              <span className='text-gray-700 text-base sm:text-lg font-medium'>
                Чанартай Бүтээгдэхүүн
              </span>
            </li>
            <li className='flex items-center'>
              <span className='text-blue-500 text-2xl sm:text-3xl mr-4'>
                🌐
              </span>
              <span className='text-gray-700 text-base sm:text-lg font-medium'>
                Олон жилийн туршилга
              </span>
            </li>
            <li className='flex items-center'>
              <span className='text-yellow-500 text-2xl sm:text-3xl mr-4'>
                😊
              </span>
              <span className='text-gray-700 text-base sm:text-lg font-medium'>
                Найрсан үйлчилгээ
              </span>
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className='lg:w-1/2 relative'>
          <div className='relative z-10'>
            <img
              src={productIMG}
              alt='Dashboard Example'
              className='w-full max-w-md sm:max-w-lg lg:max-w-full rounded-xl shadow-lg'
            />
          </div>
          <div className='absolute inset-0 z-0 -translate-x-4 translate-y-4 lg:-translate-x-6 lg:translate-y-6 transform bg-gradient-to-br from-blue-300 to-purple-400 rounded-lg opacity-30'></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
