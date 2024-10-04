import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { HEADER_ITEMS } from './const';
import { useState } from 'react';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (id) => {
    setActiveIndex(id);
  }
    return (
        <header className="bg-[url('/src/assets/header-bg.png')] bg-cover bg-center min-h-[900px]">
          <div className="max-w-7xl mx-auto flex justify-end mx-40">
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 gap-10 text-center py-10 ">
              {HEADER_ITEMS.map((item, id) =>(
                  <li key={id} onClick={() => handleItemClick(id)} className={
                    `hover:text-white py-2 ${activeIndex === id ? 'border-b-2 border-white' : ''
                    }`}>
                  <a href="#" className='text-white'>
                  {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Separator className="my-2 bg-[#A1A1A1] z-0"/>
          <div className='grid place-items-center text-white pt-60'>
            <span className='text-sx font-thin'>Передовая IT студия</span>
            <h2 className='text-5xl font-semibold pt-5 pb-[50px] text-center'>Мы создаем легкие решения
            <br></br>  сложных задач и проблем</h2>
            <Button className="bg-[#4985FF] rounded-full text-sx font-thin py-[15px] px-[30px]">Наши проекты</Button>
          </div>
        </header>
    );
  };

export default Header;