import "./Section1.css";

const Section1 = () => {
  return (
    <section className="section">
      <h1>Мы создаем мобильные приложения для крупных корпораций </h1>
      <div class="service">
        <div class="card">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAw5JREFUaEPtmI1tVDEQhCcVQAdABdABUAFQAVABUAFQAVAB0AFUAHRAB0AH0AH6JFtyfB7/Pb9LTrqVokS5Z3tnPbOz7y504nFx4vnrDOCqb3CvG7gp6YWkl5L+Snov6cMeYPcA8FTSG0m3s4R/S3ol6ctKICsBPJD0TtK9RoLfJb2VxO/NsQIACZM4AEbiUwDCzUzHFgBQ5LWkZ5XTqTTPQSsX0A19oJXhmAGQCpS/S/E56CBWFxBU/L55nuQjkCEQowCoJB3FJf4jdJ6fJgtoxvq75vNhofcC4OCPhc4S8/gTqNQrTGhHxW8ZIN1CbwEgcXjuBPovVBx6zAQg8IobZjEtl9Zrhe4AtARK4lCBnynxJQlDR4BgfC44h4ZwcFYJANcLXVzkAp2pfGkNRSPRRxWhP8n9owTgl+E6AgXcpr7dgRa6ciOljsXZd9I9SgB4qCQu/v98lYNWgNR0R7O4NKKUAOCsiKfWIRCWa5UdRS4+QmI4+mOzAbrjs0udzokYYdEdah1iySgQPIVOx1kucGpo1SXidBOAICw3CqSj8kw3iok7Y/wagA230bwS0AogtVGACtKhegIqQJd85I5raRhUvGmMLSPLk0FgUMfpA12gD3dwyxgRKYl3G2MNAFWnJ2MgedBOuRHnoACgY6XDXG1yjcZI8nmwjpst0qgG4FsYIVjIxjk9eoUe148KNH2zoyAPSxs4AFw1ANJwAxY8BmBt5i+d7QTqaAaAA2o6AHDZjbxuwGoJvSXQlg8g7IOhsuYDswMWHQZ95EJ3AoWKu/lAz4AVJ8WcJtEIo5eUJtej+UBtwCJxJ3QnXPfVS4tmB/uN+sDWN6lr4wOjb1ItgV6ZD/QInWufGdSO6gO1Nymng2vnAy2htwTaotnRfMAJ/eR8IAqdykMxN6ihj93fB1r0OPtAEMjS94Ham9UxfaD6hjfqxOlmvd+ozfpANfH44RYAcY/WwDfqA12JrwQQ92oJveUDQ4nvASDuOeoDU4nvCSDu3eMDm5Jn8QoNbE5iywZnAFuqt2Ltyd/Af2OX8zGHSbAGAAAAAElFTkSuQmCC" />
          <h3>Создание сайтов</h3>
          <span>
            Lorem Ipsum - это текст- "рыба", часто используе в печати и
            вэб-дизайне.
          </span>
        </div>
        <div class="card">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAw5JREFUaEPtmI1tVDEQhCcVQAdABdABUAFQAVABUAFQAVAB0AFUAHRAB0AH0AH6JFtyfB7/Pb9LTrqVokS5Z3tnPbOz7y504nFx4vnrDOCqb3CvG7gp6YWkl5L+Snov6cMeYPcA8FTSG0m3s4R/S3ol6ctKICsBPJD0TtK9RoLfJb2VxO/NsQIACZM4AEbiUwDCzUzHFgBQ5LWkZ5XTqTTPQSsX0A19oJXhmAGQCpS/S/E56CBWFxBU/L55nuQjkCEQowCoJB3FJf4jdJ6fJgtoxvq75vNhofcC4OCPhc4S8/gTqNQrTGhHxW8ZIN1CbwEgcXjuBPovVBx6zAQg8IobZjEtl9Zrhe4AtARK4lCBnynxJQlDR4BgfC44h4ZwcFYJANcLXVzkAp2pfGkNRSPRRxWhP8n9owTgl+E6AgXcpr7dgRa6ciOljsXZd9I9SgB4qCQu/v98lYNWgNR0R7O4NKKUAOCsiKfWIRCWa5UdRS4+QmI4+mOzAbrjs0udzokYYdEdah1iySgQPIVOx1kucGpo1SXidBOAICw3CqSj8kw3iok7Y/wagA230bwS0AogtVGACtKhegIqQJd85I5raRhUvGmMLSPLk0FgUMfpA12gD3dwyxgRKYl3G2MNAFWnJ2MgedBOuRHnoACgY6XDXG1yjcZI8nmwjpst0qgG4FsYIVjIxjk9eoUe148KNH2zoyAPSxs4AFw1ANJwAxY8BmBt5i+d7QTqaAaAA2o6AHDZjbxuwGoJvSXQlg8g7IOhsuYDswMWHQZ95EJ3AoWKu/lAz4AVJ8WcJtEIo5eUJtej+UBtwCJxJ3QnXPfVS4tmB/uN+sDWN6lr4wOjb1ItgV6ZD/QInWufGdSO6gO1Nymng2vnAy2htwTaotnRfMAJ/eR8IAqdykMxN6ihj93fB1r0OPtAEMjS94Ham9UxfaD6hjfqxOlmvd+ozfpANfH44RYAcY/WwDfqA12JrwQQ92oJveUDQ4nvASDuOeoDU4nvCSDu3eMDm5Jn8QoNbE5iywZnAFuqt2Ltyd/Af2OX8zGHSbAGAAAAAElFTkSuQmCC" />
          <h3>Создание сайтов</h3>
          <span>
            Lorem Ipsum - это текст- "рыба", часто используе в печати и
            вэб-дизайне.
          </span>
        </div>
        <div class="card">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAw5JREFUaEPtmI1tVDEQhCcVQAdABdABUAFQAVABUAFQAVAB0AFUAHRAB0AH0AH6JFtyfB7/Pb9LTrqVokS5Z3tnPbOz7y504nFx4vnrDOCqb3CvG7gp6YWkl5L+Snov6cMeYPcA8FTSG0m3s4R/S3ol6ctKICsBPJD0TtK9RoLfJb2VxO/NsQIACZM4AEbiUwDCzUzHFgBQ5LWkZ5XTqTTPQSsX0A19oJXhmAGQCpS/S/E56CBWFxBU/L55nuQjkCEQowCoJB3FJf4jdJ6fJgtoxvq75vNhofcC4OCPhc4S8/gTqNQrTGhHxW8ZIN1CbwEgcXjuBPovVBx6zAQg8IobZjEtl9Zrhe4AtARK4lCBnynxJQlDR4BgfC44h4ZwcFYJANcLXVzkAp2pfGkNRSPRRxWhP8n9owTgl+E6AgXcpr7dgRa6ciOljsXZd9I9SgB4qCQu/v98lYNWgNR0R7O4NKKUAOCsiKfWIRCWa5UdRS4+QmI4+mOzAbrjs0udzokYYdEdah1iySgQPIVOx1kucGpo1SXidBOAICw3CqSj8kw3iok7Y/wagA230bwS0AogtVGACtKhegIqQJd85I5raRhUvGmMLSPLk0FgUMfpA12gD3dwyxgRKYl3G2MNAFWnJ2MgedBOuRHnoACgY6XDXG1yjcZI8nmwjpst0qgG4FsYIVjIxjk9eoUe148KNH2zoyAPSxs4AFw1ANJwAxY8BmBt5i+d7QTqaAaAA2o6AHDZjbxuwGoJvSXQlg8g7IOhsuYDswMWHQZ95EJ3AoWKu/lAz4AVJ8WcJtEIo5eUJtej+UBtwCJxJ3QnXPfVS4tmB/uN+sDWN6lr4wOjb1ItgV6ZD/QInWufGdSO6gO1Nymng2vnAy2htwTaotnRfMAJ/eR8IAqdykMxN6ihj93fB1r0OPtAEMjS94Ham9UxfaD6hjfqxOlmvd+ozfpANfH44RYAcY/WwDfqA12JrwQQ92oJveUDQ4nvASDuOeoDU4nvCSDu3eMDm5Jn8QoNbE5iywZnAFuqt2Ltyd/Af2OX8zGHSbAGAAAAAElFTkSuQmCC" />
          <h3>Создание сайтов</h3>
          <span>
            Lorem Ipsum - это текст- "рыба", часто используе в печати и
            вэб-дизайне.
          </span>
        </div>
      </div>
      <button>Все услуги</button>
    </section>
  );
};
export default Section1;
