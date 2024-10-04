import React from "react";
import { FOOTER_ITEMS } from "./const";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <div className="bg-[#f6f6f8] pt-[70px]">
        <div className="flex justify-center gap-[43px]">
      {FOOTER_ITEMS.map((item) => (
          <div className="">
            <h3 className="text-lg font-semibold ">{item.title}</h3>
            <ul className="text-[#999999] text-xs font-thin">
              <li className="pb-5 pt-5">
                <p>{item.value1}</p>
              </li>
              <li className="pb-5">
                <p>{item.value2}</p>
              </li>
              <li className="pb-5">
                <p>{item.value3}</p>
              </li>
            </ul>
          </div>
      ))}
      </div>
      <div className="flex justify-center pt-[70px]">
            <Separator className="bg-[#E0E0E0] py-[1px] w-1/2" />
      </div>
        <p className="text-center text-[#999999] font-thin py-[30px]">(с) 2019. Все права защищены.</p>
    </div>
  );
};

export default Footer;
