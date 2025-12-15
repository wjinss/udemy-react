import { createContext } from "react";

export const CartContext = createContext({
  items: [],
}); // 초기값을 지정하면 컨텍스트로 래핑될 모든 컴포넌트에 적용
