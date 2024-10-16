import Header from "./shared/header/Header";
import Content from "./shared/content/Content";
import StandartBlock from "./shared/content/StandartBlock";
import WorksBlock from "./shared/content/WorksBlock";
import Projects from "./shared/content/Projects";
import Footer from "./shared/footer/Footer";
import "./index.css";

const App = () => {
  return (
    <div className="grid items-center">
      <Header />
      <Content />
      <StandartBlock />
      <WorksBlock />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
