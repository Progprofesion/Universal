import ButtonReadMore from "../buttons/ButtonReadMore";
import "./bigBloom.scss";
const BigBloom = () => {
  return (
    <section className="bigBloom">
      <h3 className="bigBloom__title fs-40whiteCenter">
        The Big Bloom or «How Flowering <br /> Plants Changed the World»
      </h3>
      <ButtonReadMore style={{ margin: "25px auto" }} />
    </section>
  );
};

export default BigBloom;
