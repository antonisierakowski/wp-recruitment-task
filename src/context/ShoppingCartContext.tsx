import React, { useReducer } from 'react';

export const defaultContext: ShoppingCartContext = {
  shoppingCart: {},
  addItem: () => undefined,
  totalNumberOfItems: 0,
};

export const ShoppingCartContext = React.createContext<ShoppingCartContext>(
  defaultContext,
);

type ShoppingCartState = Record<string, number>;

type ShoppingCartContext = {
  shoppingCart: ShoppingCartState;
  addItem: (productId: string, quantity: number) => void;
  totalNumberOfItems: number;
};

export const ShoppingCartProvider: React.FC = (
  props: React.PropsWithChildren<{}>,
): React.ReactElement => {
  const [shoppingCart, dispatch] = useReducer(shoppingCartReducer, {});

  const addItem = (productId: string, quantity: number): void =>
    dispatch({
      type: ADD_PRODUCT,
      payload: { productId, quantity },
    });

  const totalNumberOfItems = Object.values(shoppingCart).reduce(
    (accumulator, current) => {
      return accumulator + current;
    },
    0,
  );

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        addItem,
        totalNumberOfItems,
      }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
};

const ADD_PRODUCT = 'ADD_PRODUCT';

interface Action {
  type: string;
}

interface AddProductAction extends Action {
  payload: {
    productId: string;
    quantity: number;
  };
}

// extend this union type once more actions are added
type ShoppingCartAction = AddProductAction;

export const shoppingCartReducer = (
  state: ShoppingCartState,
  action: ShoppingCartAction,
): ShoppingCartState => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const { productId, quantity } = action.payload;
      return {
        ...state,
        [productId]: state[productId] ? state[productId] + quantity : quantity,
      };
    }
    default: {
      return state;
    }
  }
};
