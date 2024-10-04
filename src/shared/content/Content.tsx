import React from 'react'
import project from "@/assets/project.svg"
import { Button } from '@/components/ui/button';

const Content = () => {
  return (
    <div className='bg-white'>
      <div className='pt-[110px] grid place-items-center gap-10'>
        <h2 className='text-4xl max-w-2xl text-center'>Мы создаем мобильные приложения для крупных корпораций</h2>
        <p className='text-[#999999] font-thin max-w-2xl text-center'>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. </p>
      </div>
      <div className='flex justify-center gap-[50px] pt-[70px]'>
       <div className="relative flex items-center justify-center">
        <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
        <circle cx="55" cy="55" r="54.5" stroke="#E0E0E0" />
        </svg>

        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
        <circle cx="45" cy="45" r="44.5" stroke="#4985FF" />
        </svg>

        <img src={project} alt="project" className="max-w-[70px] max-h-[70px]" />
      </div>
         <div className='flex-col pt-[36px]'>
         <h3 className='font-semibold'>Создание сайтов</h3>
         <p className='text-[#999999] font-thin  max-w-xs'>Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.</p>
         </div>
         <div className="relative flex items-center justify-center">
        <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
        <circle cx="55" cy="55" r="54.5" stroke="#E0E0E0" />
        </svg>

        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
        <circle cx="45" cy="45" r="44.5" stroke="#4985FF" />
        </svg>

        <img src={project} alt="project" className="max-w-[70px] max-h-[70px]" />
      </div>
         <div className='flex-col pt-[36px]'>
         <h3 className='font-semibold'>Создание сайтов</h3>
         <p className='text-[#999999] font-thin max-w-xs'>Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.</p>
         </div>
         <div className="relative flex items-center justify-center">
        <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
        <circle cx="55" cy="55" r="54.5" stroke="#E0E0E0" />
        </svg>

        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
        <circle cx="45" cy="45" r="44.5" stroke="#4985FF" />
        </svg>

        <img src={project} alt="project svg" className="max-w-[70px] max-h-[70px]" />
      </div>
         <div className='flex-col pt-[36px]'>
         <h3 className='font-bold'>Создание сайтов</h3>
         <p className='text-[#999999] font-thin max-w-xs'>Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.</p>
         </div>
      </div>
      <div className='p-14 flex justify-center '>
        <Button className="bg-[#4985FF] rounded-full text-sx font-thin text-white p-6">Все услуги</Button>
      </div>
    </div>
  )
}
export default Content;