import "./Section2.css";

import img from "./img/2img.png";
import img2 from "./img/web-programming.png";

const Section2 = () => {
  return (
    <section className="section2">
      <div className="about">
        <div className="text">
          <h1>Высокие стандарты разработки</h1>
          <h5>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века. стандартной "рыбой" для текстов на
            латинице с начала XVI века.
          </h5>

          <a href="#">Подробнее о компании</a>
        </div>
        <img src={img} alt="" />
      </div>
      <div class="cards">
        <div class="card2">
          <div class="a">
            <img src={img2} alt="" />
            <span>125</span>
          </div>
          <h5>Our Projects</h5>
        </div>
        <div class="card2">
          <div class="a">
            <img src={img2} alt="" />
            <span>125</span>
          </div>
          <h5>Our Projects</h5>
        </div>

        <div class="card2">
          <div class="a">
            <img src={img2} alt="" />
            <span>125</span>
          </div>
          <h5>Our Projects</h5>
        </div>
        <div class="card2">
          <div class="a">
            <img src={img2} alt="" />
            <span>125</span>
          </div>
          <h5>Our Projects</h5>
        </div>
        <div class="card2">
          <div class="a">
            <img src={img2} alt="" />
            <span>125</span>
          </div>
          <h5>Our Projects</h5>
        </div>
      </div>
    </section>
  );
};

export default Section2;
