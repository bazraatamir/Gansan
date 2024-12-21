import React from "react";
import productImage from "../assets/image/altan mori1.png";
import productImage1 from "../assets/image/altan ayga4.png";
import productImage2 from "../assets/image/altan ayga3.png";
import productImage3 from "../assets/image/dombo1.png";
const Hero = () => {
  return (
    <section className=' py-16 px-[80px] '>
      <div className='max-w-full lg:max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between lg:items-center gap-10'>
        {/* Left Text Section */}
        <div className='lg:w-1/2 text-center lg:text-left'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold  mb-6'>
            Ган Сан ХХК Алт Мөнгөн хийц
          </h1>
          <p className='text-sm sm:text-base lg:text-lg  mb-6'>
            Гайхалтай Бүтээгдэхүүнүүд
          </p>
          <p className='text-sm sm:text-base lg:text-lg  mb-8'>
            Аргон нь дахин ашиглах боломжтой HTML болон модульчлагдсан CSS-ийг
            орчин үеийнхтэй төгс хослуулсан доторх HTML загвар бүрийг
            загварчлах, сайхан тэмдэглэгээ боох.
          </p>
        </div>

        {/* Right Cards Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  gap-6'>
          {/* Card 1 */}
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img
              src={productImage}
              alt='Components'
              className='w-full h-32 sm:h-40 object-cover'
            />
            <div className='p-6'>
              <h3 className='text-lg font-semibold text-gray-800'>
                Алтан Морь
              </h3>
            </div>
          </div>
          {/* Card 2 */}
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img
              src={productImage1}
              alt='Pages'
              className='w-full h-32 sm:h-40 object-cover'
            />
            <div className='p-6'>
              <h3 className='text-lg font-semibold text-gray-800'>
                Алтан Аяга
              </h3>
            </div>
          </div>
          {/* Card 3 */}
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img
              src={productImage2}
              alt='Plugins'
              className='w-full h-32 sm:h-40 object-cover'
            />
            <div className='p-6'>
              <h3 className='text-lg font-semibold text-gray-800'>
                Алтан Аяга
              </h3>
            </div>
          </div>
          {/* Card 4 */}
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img
              src={productImage3}
              alt='Documentation'
              className='w-full h-32 sm:h-40 object-cover'
            />
            <div className='p-6'>
              <h3 className='text-lg font-semibold text-gray-800'>
                Алтан Домбо
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
