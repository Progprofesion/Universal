import Header from "../header/Header";
import Interesting from "../interesting/Interesting";
import Interesting2 from "../interesting/Interesting2";
import BigBloom from "../bigBloom/BigBloom";
import "./app.scss";

const app = () => {
  return (
    <main className="app">
      <div className="app__bg"></div>
      <Header />
      <Interesting />
      <Interesting2 />
      <BigBloom />
    </main>
  );
};

export default app;
