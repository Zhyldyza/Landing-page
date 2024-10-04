import React from "react";
import { PROJECTS_ITEM } from "./const";
import { Button } from "@/components/ui/button";
import img2 from "@/assets/project-bg2.png";
import btn from "@/assets/play-button.png";
import { Separator } from "@radix-ui/react-separator";
import { Input } from "@/components/ui/input";

const Projects = () => {
  return (
    <div className="">
    <div className="bg-[#f6f6f6]">
      <div className="grid place-items-center gap-10 pt-[100px]">
        <h2 className="text-3xl">Наши проекты</h2>
        <p className="max-w-2xl text-center font-thin text-[#999999]">
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и
          вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
          латинице с начала XVI века.{" "}
        </p>
        <div className="flex gap-8 pt-[70px]">
          {PROJECTS_ITEM.map((item) => (
            <img src={item.img} alt="project icon" />
          ))}
        </div>
        <Button className="mb-[130px] py-4 px-9 bg-[#4985FF] rounded-full text-sx font-thin text-white">
          Все проекты
        </Button>
      </div>
      <div className="relative bg-[url('/src/assets/bg-project.png')] bg-cover bg-center min-h-[570px]">
        <h2 className="font-semibold text-3xl text-white text-center pt-[70px]">
          Видео о нашей работе
        </h2>
        <span className="block text-xs font-thin text-white text-center pt-[30px]">
          Просто посмотрите, как мы работаем
        </span>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2">
          <img className="max-h-[430px] max-w-[970px]" src={img2} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Button
              variant="outline"
              className="bg-inherit  rounded-full text-white py-[50px] px-[50px]"
            >
              <div className="pr-[21px] font-thin">
                <img className="" src={btn} />
              </div>
              Смотреть Видео
            </Button>
          </div>
          <div className="flex justify-center pt-10">
            <Separator className="bg-[#E0E0E0] py-[1px] w-full" />
          </div>
        </div>
      </div>
    </div>
        <div className="grid place-items-center pt-[300px]">
        <h3 className="text-base font-semibold pb-5">Подпишитесь на нашу рассылку</h3>
        <p className="text-[#999999] text-s font-thin pb-[30px]">Полезные статьи, акции, новости - получите все это сейчас!</p>
        <Input className="rounded-full w-2/6 border border-gray-300 shadow-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2" type="email" placeholder="Ваш Email"/>
        <p className="text-[#999999] text-s font-thin pt-[30px] pb-[85px]">Мы не шлем спам, и передаем никому ваши данные.</p>
    </div>
    </div>
  );
};

export default Projects;
