import Header from "../header/Header";
import Interesting from "../interesting/Interesting";
import Interesting2 from "../interesting/Interesting2";
import BigBloom from "../bigBloom/BigBloom";
import Interesting3 from "../interesting/Interesting3";
import "./app.scss";

const app = () => {
  return (
    <main className="app">
      <div className="app__bg"></div>
      <Header />
      <Interesting />
      <Interesting2 />
      <BigBloom />
      <Interesting3 />
    </main>
  );
};

export default app;
