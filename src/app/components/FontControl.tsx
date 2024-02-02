"use client";
import { Context } from "../context";
import React, { useContext, useState } from "react";

export default function FontControl() {
  const { state, dispatch } = useContext(Context);
  const [fontSize, setFontSize] = useState(state.fontSize);

  function handleFontSizeChange(largerOrSmaller: string) {
    setFontSize((prevFontSize) => {
      const newFontSize =
        largerOrSmaller === "-" ? prevFontSize - 2 : prevFontSize + 2;
      dispatch({ type: "SET_FONT_SIZE", payload: newFontSize });
      return newFontSize;
    });
  }

  return (
    <div className="flex font-control">
      <button onClick={() => handleFontSizeChange("-")}>-</button>
      <button onClick={() => handleFontSizeChange("+")}>+</button>
      <p className="ml-3">Font Size: {fontSize}</p>
    </div>
  );
}
