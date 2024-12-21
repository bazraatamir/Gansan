import React, {useState} from "react";

const Testimeniols = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      text: "Энэ үйлчилгээ нь миний бизнесийг үсрэнгүй сайжруулахад тусалсан. Би үүнийг маш их санал болгож байна!",
      name: "John Doe",
      title: "CEO, Company X",
      img: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      text: "Гайхалтай туршлага! Баг нь мэргэжлийн байсан бөгөөд үргэлж туслахад бэлэн байсан.",
      name: "Jane Smith",
      title: "Marketing Manager, Company Y",
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      text: "Маш сайн үйлчилгээ! Бүтээгдэхүүн нь хэрэглэгчдэд ээлтэй бөгөөд маш үр дүнтэй байдаг.",
      name: "Sam Wilson",
      title: "Product Manager, Company Z",
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className=' py-[80px] rounded-lg mx-[80px]'>
      <h2 className='text-3xl font-bold text-center  mb-6'>
        Харилцагчийн Сэтгэгдэл
      </h2>

      <div className='relative'>
        <div className='flex transition-transform duration-500 ease-in-out'>
          {
            <div className='p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto'>
              <p className='text-gray-600 text-lg mb-4'>
                {testimonials[currentIndex].text}
              </p>
              <div className='flex items-center justify-center space-x-4'>
                <img
                  src={testimonials[currentIndex].img}
                  alt={testimonials[currentIndex].name}
                  className='w-12 h-12 rounded-full object-cover'
                />
                <div>
                  <h3 className='font-semibold text-lg'>
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className='text-gray-500'>
                    {testimonials[currentIndex].title}
                  </p>
                </div>
              </div>
            </div>
          }
        </div>

        <button
          onClick={prevTestimonial}
          className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md'>
          &#60;
        </button>
        <button
          onClick={nextTestimonial}
          className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md'>
          &#62;
        </button>
      </div>
    </div>
  );
};

export default Testimeniols;
