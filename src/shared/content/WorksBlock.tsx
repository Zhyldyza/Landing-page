import { Button } from "@/components/ui/button";
import React from "react";
import { WORK_ITEM } from "./const";
import { Separator } from "@/components/ui/separator";

const WorksBlock = () => {
  return (
    <div className="bg-gradient-to-b from-[#5F12D0] to-white">
      <div className="">
        <div className="flex justify-center gap-[370px] py-[100px]">
          <h2 className="text-white text-3xl font-semibold max-w-sm">
            Наши работы, на которых мы специализируемся
          </h2>
          <Button className="bg-[#4985FF] rounded-full text-sx text-white font-thin p-6">
            Все услуги
          </Button>
        </div>
        <div className="flex justify-center gap-[30px] pb-10">
        {WORK_ITEM.map((item) => (
          <div className="">
            <img
              className="max-w-[300px] min-h-[300px] rounded-xl object-cover"
              src={item.img}
              alt="work pix"
            />
            <div className="flex gap-1 py-8">
              <span className="text-[#504DC2]">{item.num}</span>
              <h3>{item.title}</h3>
            </div>
            <p className="max-w-sm text-[#999999] font-thin pb-8">{item.desc}</p>
            <a className="text-[#4985FF] font-thin underline pb-8">{item.link}</a>
          </div>
        ))}
      </div>
      <div className="flex justify-center pb-[100px]">
      <Separator className='bg-[#E0E0E0] py-[1px] w-5/6'/>
      </div>
      </div>
    </div>
  );
};

export default WorksBlock;
