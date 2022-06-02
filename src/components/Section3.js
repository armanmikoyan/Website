import "./Section3.css";
import img3 from "./img/3.png";

const Section3 = () => {
  return (
    <div class="section3">
      <div class="content">
        <h1>Наши работы, на которых мы специализируемся</h1>
        <button>Все услуги</button>
      </div>
      <div class="cards3">
        <div class="card3">
          <img src={img3} alt="" />
          <h1>
            <p>01.</p> Исследование и упаковка
          </h1>
          <span>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века
          </span>
          <a href="#">Подробнее</a>
        </div>
        <div class="card3">
          <img src={img3} alt="" />
          <h1>
            <p>01.</p> Исследование и упаковка
          </h1>
          <span>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века
          </span>
          <a href="#">Подробнее</a>
        </div>
        <div class="card3">
          <img src={img3} alt="" />
          <h1>
            <p>01.</p> Исследование и упаковка
          </h1>
          <span>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века
          </span>
          <a href="#">Подробнее</a>
        </div>
      </div>
    </div>
  );
};

export default Section3;
