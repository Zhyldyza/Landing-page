import { Button } from "@/components/ui/button";
import { WORK_ITEM } from "./const";
import { Separator } from "@/components/ui/separator";

const WorksBlock = () => {
  return (
    <div className="relative w-full">
     <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#5F12D0]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
      <div className="w-2/3 mx-auto">
        <div className="flex justify-between py-[100px] items-center">
          <h2 className="text-white text-3xl font-bold max-w-sm">
          Наши работы, на которых мы специализируемся
          </h2>
          <Button className="bg-[#4985FF] rounded-full text-sx text-white font-thin p-6">
          Все услуги
          </Button>
        </div>
      <div className="grid grid-cols-3 gap-7 pb-10">
        {WORK_ITEM.map((item) => (
          <div className="flex flex-col items-start">
            <img
              className="h-[300px] rounded-sm object-cover"
              src={item.img}
              alt="work pix"
            />
            <div className="flex gap-1 py-8 items-center">
              <span className="text-[#504DC2]">{item.num}</span>
              <h3>{item.title}</h3>
            </div>
            <p className="max-w-sm text-[#999999] font-thin pb-8">{item.desc}</p>
            <a className="text-[#4985FF] font-thin border-b border-[#4985FF]">{item.link}</a>
          </div>
        ))}
      </div>
      <div className="w-full pt-[85px] pb-[85px]">
      <Separator className="bg-[#E0E0E0] border-e-0"/>
      </div>
      </div>
    </div>
  </div>
  );
};

export default WorksBlock;
