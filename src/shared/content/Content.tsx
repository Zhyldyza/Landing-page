import project from "@/assets/project.svg";
import { Button } from "@/components/ui/button";

const Content = () => {
  return (
    <div className="bg-white w-full mx-auto">
      <div className="pt-[110px] grid place-items-center gap-10">
        <h2 className="text-4xl max-w-2xl font-bold text-center">
          Мы создаем мобильные приложения для крупных корпораций
        </h2>
        <p className="text-[#999999] font-thin max-w-2xl text-center">
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и
          вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
          латинице с начала XVI века.{" "}
        </p>
      </div>

      <div className="grid grid-cols-3 place-items-center justify-center pt-[99px] w-3/5 mx-auto">
        <div className="flex">
          <div className="relative flex items-center justify-center">
            <svg
              width="110"
              height="110"
              viewBox="0 0 110 110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute"
            >
              <circle cx="55" cy="55" r="54.5" stroke="#E0E0E0" />
            </svg>
            <svg
              width="90"
              height="90"
              viewBox="0 0 90 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute"
            >
              <circle cx="45" cy="45" r="44.5" stroke="#4985FF" />
            </svg>
            <img
              src={project}
              alt="project"
              className="max-w-[70px] max-h-[70px]"
            />
          </div>
          <div className="relative pl-10">
            <h3 className="font-semibold">Создание сайтов</h3>
            <p className="text-[#999999] font-thin max-w-40">
              Lorem Ipsum - это текст- "рыба", часто используе в печати и
              вэб-дизайне.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="relative flex items-center justify-center">
            <svg
              width="110"
              height="110"
              viewBox="0 0 110 110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute"
            >
              <circle cx="55" cy="55" r="54.5" stroke="#E0E0E0" />
            </svg>
            <svg
              width="90"
              height="90"
              viewBox="0 0 90 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute"
            >
              <circle cx="45" cy="45" r="44.5" stroke="#4985FF" />
            </svg>
            <img
              src={project}
              alt="project"
              className="max-w-[70px] max-h-[70px]"
            />
          </div>
          <div className="relative pl-10">
            <h3 className="font-semibold">Создание сайтов</h3>
            <p className="text-[#999999] font-thin max-w-40">
              Lorem Ipsum - это текст- "рыба", часто используе в печати и
              вэб-дизайне.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="relative flex items-center justify-center">
            <svg
              width="110"
              height="110"
              viewBox="0 0 110 110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute"
            >
              <circle cx="55" cy="55" r="54.5" stroke="#E0E0E0" />
            </svg>
            <svg
              width="90"
              height="90"
              viewBox="0 0 90 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute"
            >
              <circle cx="45" cy="45" r="44.5" stroke="#4985FF" />
            </svg>
            <img
              src={project}
              alt="project"
              className="max-w-[70px] max-h-[70px]"
            />
          </div>
          <div className="relative pl-10">
            <h3 className="font-semibold">Создание сайтов</h3>
            <p className="text-[#999999] font-thin max-w-40">
              Lorem Ipsum - это текст- "рыба", часто используе в печати и
              вэб-дизайне.
            </p>
          </div>
        </div>
      </div>

      <div className="p-14 flex justify-center">
        <Button className="bg-[#4985FF] rounded-full text-md font-thin text-white px-[60px]">
          Все услуги
        </Button>
      </div>
    </div>
  );
};
export default Content;
