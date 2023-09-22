import Header from "../header/Header";
import Interesting from "../interesting/Interesting";
import "./app.scss";

const app = () => {
  return (
    <main className="app">
      <div className="app__bg"></div>
      <Header />
      <Interesting />
    </main>
  );
};

export default app;
