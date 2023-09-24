import { useState } from "react";
import Header from "../header/Header";
import Interesting from "../interesting/Interesting";
import Interesting2 from "../interesting/Interesting2";
import BigBloom from "../bigBloom/BigBloom";
import Interesting3 from "../interesting/Interesting3";
import Hot from "../hot/Hot";
import Footer from "../footer/Footer";
import Modal from "../modal/Modal";
import Form from "../form/Form";
import "./app.scss";

const App = () => {
  const [errorAuth, setErrorAuth] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [modalActive, setModalActive] = useState("");
  return (
    <main className="app">
      <div className="app__bg"></div>
      <Header />
      <Interesting />
      <Interesting2 />
      <BigBloom />
      <Interesting3 />
      <Hot />
      <Footer setModalActive={setModalActive} />
      <Modal modalActive={modalActive} setModalActive={setModalActive}>
        <Form setEmail={setEmail} setName={setName} />
      </Modal>
    </main>
  );
};

export default App;
