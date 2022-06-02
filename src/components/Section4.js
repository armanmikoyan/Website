import "./Section4.css";
import img4 from "./img/4.png";

const Section4 = () => {
  return (
    <div class="section4">
      <div class="paragraf">
        <h1>Наши проекты</h1>
        <p>
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и
          вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
          латинице с начала XVI века.
        </p>
        <div class="cards4">
          <div class="card4">
            <img src={img4} alt="" />
          </div>
          <div class="card4">
            <img src={img4} alt="" />
          </div>
          <div class="card4">
            <img src={img4} alt="" />
          </div>
          <div class="card4">
            <img src={img4} alt="" />
          </div>
        </div>
        <button>Все проекты</button>
      </div>
    </div>
  );
};

export default Section4;
