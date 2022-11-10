import "./CourseCard.css";
export default function CourseCard({
  id,
  image,
  name,
  desc,
  oldPrice,
  newPrice,
  emi,
}) {
  const handleAddToCart = (id) => {
    console.log(id);
  };

  return (
    <>
      <div className="c-card-container">
        <div className="c-card-wrapper">
          <div className="c-card-img-box">
            <img src={image} alt="" className="c-card-img" />
          </div>
          <div className="c-card-desc">
            <h2 className="caurse-name">{name}</h2>
            <p className="curse-desc">{desc}</p>
          </div>
        </div>
        <div className="c-card-price-wrapper">
          <div className="c-card-odlprice">
            <span className="c-oldprice">₹{oldPrice}</span>
            <p className="c-card-price">{newPrice}₹ </p>
          </div>
          <p className="c-card-emi">{emi} </p>
          <div className="c-card-btn">
            <button className="btn btn-light">KNOW MORE</button>
            <button onClick={() => handleAddToCart(id)} className="btn">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
