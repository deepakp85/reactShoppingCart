export default function Card(props) {
  return (
    <>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <a href="#!">
            <img
              className="card-img-top"
              src={props.productData.image}
              alt="..."
            />
          </a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#!">{props.productData.name}</a>
            </h4>
            <h5>${props.productData.price}</h5>
            <p className="card-text">
              {props.productData.description}
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">★ ★ ★ ★ ☆</small>
            <span>{" "}<button className="btn btn-primary btn-sm" onClick={() => props.handleClick(props.productData)}>Add to Cart</button></span>
          </div>
        </div>
      </div>
    </>
  );
}
