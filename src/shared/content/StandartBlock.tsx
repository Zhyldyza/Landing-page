import standartPix from '@/assets/standart-block.jpeg'
import { Separator } from '@radix-ui/react-separator'
import { STANDART_ITEM } from './const'

const StandartBlock = () => {
  return (
    <div className='pt-[201px] bg-[#f6f6f8] w-full'>
    <div className='w-3/5 mx-auto'>
    <div className="flex justify-between pb-[115px]">
        <div>
            <h1 className='text-4xl max-w-sm pb-9 font-bold'>Высокие стандарты разработки</h1>
            <p className='text-[#999999] font-thin max-w-md pb-10'>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.  стандартной "рыбой" для текстов на латинице с начала XVI&nbsp;века. </p>
            <a className='text-[#4985FF] font border-b border-[#4985FF]' href="#">Подробнее o компании</a>
        </div>
        <img className='max-w-[500px] rounded-xl' src={standartPix} alt="standart block pix" />
    </div>
    <Separator className="bg-[#E0E0E0] pt-[1px]"/>
    <div  className='grid grid-cols-5 place-items-center pt-20 pb-[70px]'>
        {STANDART_ITEM.map((item)=>(
            <div className='flex align-top items-start justify-center gap-4'>
                <img src={item.img} alt="project icon" className='mb-2'/>
                <div className='flex flex-col max-w-xs'>
                    <span className='text-3xl'>{item.num}</span>
                    <span className='text-[#999999] text-xs font-thin'>{item.title}</span>
                </div>
            </div>
        ))}
    </div>
    </div>
    </div>
  )
}

export default StandartBlock