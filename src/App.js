import { useState } from "react";
import Card from "./card.js";
function App() {
  let products = [
    {
      id: 1,
      image: "https://via.placeholder.com/700x400",
      name: "Item One",
      price: 24.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      rating: 5,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/700x400",
      name: "Item Two",
      price: 32.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.",
      rating: 3,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/700x400",
      name: "Item Three",
      price: 14.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      rating: 2,
    },
    {
      id: 4,
      image: "https://via.placeholder.com/700x400",
      name: "Item Four",
      price: 54.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.",
      rating: 4,
    },
    {
      id: 5,
      image: "https://via.placeholder.com/700x400",
      name: "Item Five",
      price: 28.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      rating: 3,
    },
    {
      id: 6,
      image: "https://via.placeholder.com/700x400",
      name: "Item Six",
      price: 41.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      rating: 4,
    },
  ];

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [btnstatus, setbtnstatus] = useState([]);

  let addToCart = (item) => {
    setCart([...cart, item]);
    setTotal(total + item.price);
    setbtnstatus([...btnstatus, item.id]);
  };

  let removeCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
    setTotal(total - product.price);
    setbtnstatus(btnstatus.filter((item) => item !== product.id));
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="my-4">Shop Name</h1>
            <div className="list-group">
              {cart.map((item) => {
                return (
                  <a className="list-group-item" href="#!">
                    {item.name} - ${item.price}
                    <span>
                      {" "}
                      <button
                        style={{marginLeft:'2rem'}}
                        className="btn btn-danger btn-sm"
                        onClick={() => removeCart(item)}
                      >
                        X
                      </button>
                    </span>
                  </a>
                );
              })}
              <h5 className="list-group-item">
                Total - ${Math.round(total * 100) / 100}
              </h5>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              {products.map((obj) => (
                <Card
                  productData={obj}
                  handleClick={addToCart}
                  btnst={btnstatus}
                ></Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
