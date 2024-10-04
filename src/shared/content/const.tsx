import { ProjectsItem, StandartItem, WorkItem } from "./type";
import imgStandart from "@/assets/standart.svg";
import imgWork from "@/assets/header-bg.png";
import imgProjects from "@/assets/project-pix.png"

export const STANDART_ITEM: StandartItem[] = [
  {
    title: "Our projects",
    num: 125,
    img: imgStandart,
  },
  {
    title: "Our projects",
    num: 125,
    img: imgStandart,
  },
  {
    title: "Our projects",
    num: 125,
    img: imgStandart,
  },
  {
    title: "Our projects",
    num: 125,
    img: imgStandart,
  },
  {
    title: "Our projects",
    num: 125,
    img: imgStandart,
  },
];

export const WORK_ITEM: WorkItem[] = [
  {
    img: imgWork,
    num: "01",
    title: "Исследование и упаковка",
    desc: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
    link: "Подробнее",
  },
  {
    img: imgWork,
    num: "01",
    title: "Исследование и упаковка",
    desc: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
    link: "Подробнее",
  },
  {
    img: imgWork,
    num: "01",
    title: "Исследование и упаковка",
    desc: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
    link: "Подробнее",
  },
];

export const PROJECTS_ITEM: ProjectsItem[] =[
    {img: imgProjects, },
    {img: imgProjects, },
    {img: imgProjects, },
    {img: imgProjects, },
]
