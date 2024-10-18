import { Button } from "@/components/ui/button";
import { WORK_ITEM } from "./const";
import { Separator } from "@/components/ui/separator";

const WorksBlock = () => {
  return (
    <div className="relative w-full">
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#5F12D0]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="w-3/5 mx-auto">
          <div className="flex justify-between py-[98px] items-center">
            <h1 className="text-white text-4xl font-bold max-w-lg">
              Наши работы, на которых мы специализируемся
            </h1>
            <Button className="bg-[#4985FF] rounded-full text-md text-white font-thin px-[60px]">
              Все услуги
            </Button>
          </div>
        <div className="grid grid-cols-3 gap-5">
          {WORK_ITEM.map((item) => (
            <div className="flex flex-col place-items-start">
              <img
                className="h-[290px] rounded-lg object-cover"
              src={item.img}
              alt="work pix"
              />
              <div className="flex gap-1 py-4 items-center">
                <span className="text-[#504DC2]">{item.num}</span>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="max-w-3/4 text-[#999999] font-thin pb-14">{item.desc}</p>
              <a className="text-[#4985FF] font-medium text-md border-b border-[#4985FF]">{item.link}</a>
            </div>
          ))}
        </div>
        <div className="w-full pt-[85px] pb-[80px]">
        <Separator className="bg-[#E0E0E0] border-e-0"/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default WorksBlock;
