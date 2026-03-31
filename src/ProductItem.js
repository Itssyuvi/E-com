function ProductItem({ pdata }) {
  return (
    <div className="product-card">
      <img src={pdata.thumbnail} alt={pdata.title} />
      <h4>{pdata.title}</h4>
      <p>${pdata.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductItem;