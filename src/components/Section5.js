import "./Section5.css";
import img10 from "./img/10.png";
import btn from "./img/play-button.png";

const Section5 = () => {
  return (
    <div class="section5">
      <img class="img" src={img10} alt="" />
      <div class="btn">
        <img src={btn} alt="" />
        <h1>Смотреть видео</h1>
      </div>
      <div class="subscribe">
        <h1>Подпишитесь на нашу рассылку</h1>
        <p>Полезные статьи, акции, новости - получите все это сейчас! </p>
        <div class="sub">
          <p>Ваш e-mail</p>
          <p class="p">Подписаться</p>
        </div>
        <p>Мы не шлем спам, и передаем никому ваши данные.</p>
      </div>
    </div>
  );
};

export default Section5;
