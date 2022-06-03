import "./Header.css";


const Header = () => {
  return (
    <header className="header">
      <ul className="list">
        <li>Главная </li>
        <li>Наши проекты</li>
        <li>Услуги</li>
        <li>Новости</li>
        <li>Контакты</li>
      </ul>
      <div className="offer">
        <h5>Передовая IT студия</h5>
        <h1>Мы создаем легкие решения сложных задач и проблем </h1>
        <button>Наши проекты</button>
      </div>
    </header>
  );
};

export default Header;
