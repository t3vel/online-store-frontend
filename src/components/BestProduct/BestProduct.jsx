import "./BestProduct.css";
import picture from "./img/picture1.png";

export default function BestProducts() {
  return (
    <div className="block">
      <Nav />
      <Main />
    </div>
  );
}

function Nav() {
  return (
    <div className="nav">
      <h2 className="head-title">Our Best Selling Products</h2>
      <button className="btn--show">Show more</button>
    </div>
  );
}

function Main() {
  return (
    <div className="container">
      <MainItem
        title={"Tomato / 110 calories"}
        content={"Ecologically clean, grown on our farm with love"}
      />
      <MainItem
        title={"Tomato / 110 calories"}
        content={"Ecologically clean, grown on our farm with love"}
      />
      <MainItem
        title={"Tomato / 110 calories"}
        content={"Ecologically clean, grown on our farm with love"}
      />
    </div>
  );
}

function MainItem({ title, content }) {
  return (
    <div>
      <img src={picture} />
      <div className="text">
        <p className="title">{title}</p>
        <p className="content">{content}</p>
      </div>
      <button className="btn--order">Order now &#8594;</button>
    </div>
  );
}
