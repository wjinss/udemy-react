import { useState } from "react";

import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import Product from "./components/Product.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import { CartContext } from "./store/shopping-cart-context.jsx";

function App() {
  const [shoppingCart, setShoppingCart] = useState({
    items: [], // 값을 배열로 설정할 수 있지만 지금처럼 명시된 값으로 사용하는 것이 더 동적으로 사용할 수 있다
  });

  function handleAddItemToCart(id) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    });
  }

  const ctxValue = {
    items: shoppingCart.items,
    addItemToCart: handleAddItemToCart,
    updateCartItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    // .Provider를 붙이는건 리액트 18까지만이고 19부턴 생략해도 된다
    <CartContext.Provider value={ctxValue}>
      {/* Context.Provider에는 value를 꼭 명시해야된다!! */}
      {/* Context를 사용할 때는 일반적으로 Provider가 제공하는 값을 쓰지만, 어떤 컴포넌트가 Context값을 요청했을 땐 
      해당 컴포넌트에 유효한 Provider가 없으면 그 컴포넌트는 Context를 처음 만들 때 지정했던 기본값을 사용한다. */}
      {/* Provider에 값만 전달하면 업데이트가 되지 않기에 상태, 전달하려는 함수를 객체로 만들어 전달하면 업데이트가 된다 */}
      {/* "Context Provider에 상태를 담은 객체를 value로 전달하면, 상태가 변경될 때마다 새로운 객체 참조가 생성되므로, 이를 통해 하위 컴포넌트들이 변경된 값을 전달받아 업데이트됩니다." */}
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContext.Provider>
  );
}

export default App;
