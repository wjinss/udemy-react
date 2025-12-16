import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";
import { use } from "react";

export default function Cart({ onUpdateItemQuantity }) {
  // const cartCtx = useContext(CartContext); //useContext를 사용하려면 불러온 콘텍스트 객체를 인수로 전달한다
  const { items } = useContext(CartContext);
  // if (true) {
  //   const cartCtx = use(CartContext); // use함수도 useContext와 동일하게 사용할 수 있다. 차이점은 use는 함수 블록 내부에서도 사용 가능
  // }
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul id="cart-items">
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => onUpdateItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
