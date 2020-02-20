import React, { useContext, useEffect } from "react";
import useWindowDimensions from "../../utils/dimensions";
import { World } from "../world/world.jsx";
import FormikOptions from "../../components/options/options.jsx";
import initWorld from "../world/init.js";
import { store } from "../../utils/store.js";
import "./app.css";

function App() {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  useEffect(() => {
    console.log("initializing the world...");
    let newWorld = initWorld();

    dispatch({ type: "INIT_WORLD", world: newWorld });
    console.log(globalState);
  }, []);

  const { height, width } = useWindowDimensions();

  return (
    <div className="app">
      <World height={height} width={width} />
      <FormikOptions />
    </div>
  );
}

export default App;
