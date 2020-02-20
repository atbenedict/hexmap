import React, { createContext, useReducer } from "react";

const initialState = {
  window_dimensions: { width: 100, height: 100 },
  initializing: true,
  placing_initial: "false",
  atb: true,
  world: []
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    let newState = {};
    switch (action.type) {
      case "TOGGLE_PLACING_INITIAL":
        console.log("action.type: ", action.type);
        console.log("placing_initial value: ", state.placing_initial);
        let newValue = "";
        state.placing_initial === "true"
          ? (newValue = "false")
          : (newValue = "true");
        newState = {
          ...state,
          placing_initial: newValue
        };
        return newState;

      case "INIT_WORLD":
        newState = {
          ...state,
          world: action.world
        };
        console.log(newState);
        return newState;

      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
