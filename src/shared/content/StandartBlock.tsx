import React from 'react'
import standartPix from '@/assets/standartBlock.jpeg'
import { Separator } from '@radix-ui/react-separator'
import { STANDART_ITEM } from './const'

const StandartBlock = () => {
  return (
    <div className='pt-[105px] bg-[#f6f6f8]'>
    <div className="flex justify-center gap-[121px] pb-[143px]">
        <div>
            <h2 className='text-3xl max-w-sm pb-9 leading-10'>Высокие стандарты разработки</h2>
            <p className='text-[#999999] font-thin max-w-md pb-10'>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.  стандартной "рыбой" для текстов на латинице с начала XVI века. </p>
            <a className='text-[#4985FF] font-thin underline' href="#">Подробнее о компании</a>
        </div>
        <img className='max-h-[500px] max-w-[400px] rounded-lg' src={standartPix} alt="standart block pix" />
    </div>
    <div className='flex justify-center'>
    <Separator className='bg-[#E0E0E0] py-[1px] w-2/3' />
    </div>
    <div  className='flex items-start justify-center gap-20 pt-20 pb-[70px]'>
        {STANDART_ITEM.map((item)=>(
            <div className='flex align-top items-start justify-center gap-5'>
                <img src={item.img} alt="project icon" className='mb-2'/>
                <div className='flex flex-col max-w-xs'>
                    <span className='text-3xl'>{item.num}</span>
                    <span className='text-[#999999] text-xs font-thin'>{item.title}</span>
                </div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default StandartBlock