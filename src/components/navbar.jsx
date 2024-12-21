import Burger from "../assets/image/icons8-menu-150.svg";
import logo from "../assets/image/logo.png";
import {Link} from "react-router-dom";

export default function NavBar() {
  return (
    <div className=' border-2 flex justify-center navbar bg-base-100 h-[120px] md:px-[80px] py-[12px] sticky top-0 z-50'>
      <div className='flex-1 h-[100%]'>
        <a className=' text-xl relative flex justify-start  w-[30%] h-[80%] '>
          <img
            src={logo}
            alt='logo'
            className='w-[100%] h-[100%] object-contain'
          />
        </a>
      </div>

      <div className='flex-none '>
        <div className='drawer drawer-end md:hidden '>
          <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
          <div className='drawer-content '>
            {/* Page content here */}
            <label
              htmlFor='my-drawer-4'
              className='drawer-button btn bg-[#fff] shadow-none border-none  relative'>
              <img
                src={Burger}
                alt='logo'
                className='w-[100%] h-[100%]  object-contain'
              />
            </label>
          </div>
          <div className='drawer-side'>
            <label
              htmlFor='my-drawer-4'
              aria-label='close sidebar'
              className='drawer-overlay'></label>
            <ul className='menu bg-base-200 text-base-content min-h-full w-80 p-4'>
              <li className=' rounded-lg hover:bg-[#E1BE4A] '>
                <Link to='/'>Нүүр</Link>
              </li>
              <li className=' rounded-lg hover:bg-[#E1BE4A] '>
                <Link to='/about'>Бидний тухай</Link>
              </li>
              <li className=' rounded-lg hover:bg-[#E1BE4A] '>
                <Link to='/products'>Бүтээгдэхүүн</Link>
              </li>
              <li>
                <button className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  hover:bg-[#E1BE4A]'>
                  <a className='font-normal'>холбоо барих</a>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <ul className=' hidden menu menu-horizontal px-1 items-center md:flex text-[#000] '>
          <li className=' rounded-lg hover:bg-[#E1BE4A] '>
            <Link to='/'>Нүүр</Link>
          </li>
          <li className=' rounded-lg hover:bg-[#E1BE4A] '>
            <Link to='/about'>Бидний тухай</Link>
          </li>
          <li className=' rounded-lg hover:bg-[#E1BE4A] '>
            <Link to='/products'>Бүтээгдэхүүн</Link>
          </li>
          <li>
            <button className=' flex items-center btn-xs sm:btn-sm md:btn-md hover:bg-[#E1BE4A] '>
              <a className='font-normal'>Холбоо Барих</a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
