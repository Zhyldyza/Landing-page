import { PROJECTS_ITEM } from "./const";
import { Button } from "@/components/ui/button";
import img2 from "@/assets/project-bg2.png";
import btn from "@/assets/play-button.png";
import { Separator } from "@radix-ui/react-separator";
import { Input } from "@/components/ui/input";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="bg-[#f6f6f6]">
        <div className="grid place-items-center gap-10 pt-[99px]">
          <h1 className="text-4xl font-bold">Наши проекты</h1>
          <p className="max-w-2xl text-center font-thin text-[#999999]">
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века.{" "}
          </p>
          <div className="w-3/5 mx-auto">
          <div className="flex justify-between pt-[38px]">
            {PROJECTS_ITEM.map((item) => (
              <img src={item.img} alt="project icon" />
            ))}
          </div>
          </div>
          <Button className="mb-[135px] bg-[#4985FF] rounded-full text-md font-thin text-white px-[55px]">
            Все проекты
          </Button>
        </div>
        <div className="relative bg-[url('/src/assets/bg-project.png')] bg-cover bg-center min-h-[570px]">
          <h1 className="font-bold text-4xl text-white text-center pt-[70px]">
            Видео о нашей работе
          </h1>
          <span className="block text-lg font-thin text-white text-center pt-[30px]">
            Просто посмотрите, как мы работаем
          </span>
          <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
            <img className="max-h-[450px] max-w-[980px]" src={img2} />
            <div className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-3/4">
              <Button
                variant="outline"
                className="bg-inherit rounded-full text-white py-[50px] px-[50px]"
              >
                <div className="pr-[21px] font-thin">
                  <img className="" src={btn} />
                </div>
                Смотреть Видео
              </Button>
            </div>
            <div className="pt-24 w-full">
              <Separator className="bg-[#E0E0E0] py-[0.5px]"/>
            </div>
          </div>
        </div>
      </div>
        <div className="grid place-items-center pt-[250px]">
          <h2 className="text-lg font-semibold pb-2">Подпишитесь на нашу рассылку</h2>
          <p className="text-[#999999] text-md font-thin pb-[25px]">Полезные статьи, акции, новости - получите все это сейчас!</p>
          <div className="flex justify-center w-[33%]">
            <Input className="rounded-l-3xl w-3/6 border border-gray-300 shadow-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2" type="email" placeholder="Ваш Email"/>
            <Button className="bg-blue-500 rounded-r-3xl w-2/6">Подписаться</Button>
          </div>
          <p className="text-[#999999] text-[14px] font-thin pt-[35px] pb-[85px]">Мы не шлем спам, и передаем никому ваши данные.</p>
        </div>
    </div>
  );
};

export default Projects;
