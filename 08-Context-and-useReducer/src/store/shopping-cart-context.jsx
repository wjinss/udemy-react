import { createContext } from "react";

export const CartContext = createContext({
  items: [],
}); // 초기값을 지정하면 컨텍스트로 래핑될 모든 컴포넌트에 적용

// Context를 사용할 때는 일반적으로 Provider가 제공하는 값을 쓰지만, 어떤 컴포넌트가 Context값을 요청했을 땐
// 해당 컴포넌트에 유효한 Provider가 없으면 그 컴포넌트는 Context를 처음 만들 때 지정했던 기본값을 사용한다.
// 또한 기본값을 설정하면 자동완성이 되기에 DX가 더 좋다
