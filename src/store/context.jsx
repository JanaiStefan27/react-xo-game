import React from "react";

const StoreContext = React.createContext(null);

const StoreReducer = (data, action) => {
  switch (action.type) {
    case `create`: {
      data.session = action.payload;
      return data;
    }
  }
};

const StoreProvider = (props) => {
  const [state, dispatch] = React.useReducer(StoreReducer, {});
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  return React.useContext(StoreContext);
};

export default StoreProvider;
