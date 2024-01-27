import { useCart } from "../../Context/CartContext";
import { courseImgUrl } from "../../Utils/constants";
import Button from "react-bootstrap/Button";
import "./cart.css";
const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  console.log(cartItems, "cartItems");
  return (
    <div>
      {cartItems.length === 0 ? (
        <>
          <h2>No Data Found</h2>
        </>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cardDiv">
              <div>
                <img src={`${courseImgUrl}/${item.img}`} alt={`${item.img}`} />
              </div>

              <div>
                <h4>{item.title}</h4>
                <p>by {item.instructor} </p>
                <p>
                  <span className="title">Description</span>:{item.description}
                </p>
                <p>
                  <span className="title">Price</span>: {`₹${item.pricing}`}
                </p>
              </div>
              <div>
                <Button
                  variant="danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </>
      )}

      {/* <button onClick={() => addToCart({ id: 1, name: 'Product 1' })}>Add to Cart</button> */}
    </div>
  );
};
export default Cart;
