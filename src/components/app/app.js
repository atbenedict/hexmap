import React, { useContext, useEffect } from "react";
import useWindowDimensions from "../../utils/dimensions";
import { World } from "../world/world.jsx";
import Options from "../../components/options/options.jsx";
import worldinit from "../world/init.js";
import { store } from "../../utils/store.js";
import "./app.css";

function App() {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  useEffect(() => {
    console.log("initializing the world...");
    for (let rowNum = 0; rowNum < worldinit.length; rowNum++) {
      for (let colNum = 0; colNum < worldinit[rowNum].length; colNum++) {
        let location = worldinit[rowNum][colNum];
        location = { ...location, x: colNum, y: rowNum };
        initLocation(location);
      }
    }
    // dispatch({ type: "INIT_WORLD_START" });
    // dispatch({ type: "INIT_WORLD_END" });
  }, []);

  const initLocation = location => {
    dispatch({ type: "INIT_LOCATION", location });
  };

  const { height, width } = useWindowDimensions();

  return (
    <div className="app">
      {/* width: {width} ~ height: {height} */}
      <World height={height} width={width} />
      <Options />
    </div>
  );
}

export default App;
