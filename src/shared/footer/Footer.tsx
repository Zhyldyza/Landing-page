import { FOOTER_ITEMS } from "./const";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <div className="bg-[#f6f6f8] pt-[70px] w-full">
      <div className="w-3/5 mx-auto">
        <div className="grid grid-cols-4 items-start pb-[104px]">
          {FOOTER_ITEMS.map((item) => (
            <div className="">
              <h2 className="text-xl font-normal ">{item.title}</h2>
              <ul className="text-[#999999] text-s font-thin">
                <li className="pb-5 pt-5">
                  <p>{item.value1}</p>
                </li>
                <li className="pb-5">
                  <p>{item.value2}</p>
                </li>
                <li>
                  <p>{item.value3}</p>
                </li>
              </ul>
            </div>
          ))}
        </div>
        <Separator className="bg-[#E0E0E0] py-[0.5px]"/>
      </div>
      <p className="text-center text-[#999999] text-[13px] font-thin py-[30px]">(с) 2019. Все права защищены.</p>
    </div>
  );
};

export default Footer;
