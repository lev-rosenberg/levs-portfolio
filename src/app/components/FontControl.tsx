"use client";
import { Context } from "../context";
import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
export default function FontControl() {
  const { state, dispatch } = useContext(Context);
  const [fontSize, setFontSize] = useState(state.fontSize);

  function handleFontSizeChange(largerOrSmaller: string) {
    setFontSize((prevFontSize) => {
      const newFontSize =
        largerOrSmaller === "-" ? prevFontSize - 2 : prevFontSize + 2;
      if (newFontSize > 12 && newFontSize < 24) {
        dispatch({ type: "SET_FONT_SIZE", payload: newFontSize });
        return newFontSize;
      }
      return prevFontSize;
    });
  }

  return (
    <div className="flex font-control">
      <p className="mr-2 text-2xl">Aa</p>
      <button
        className="rounded-full text-base"
        onClick={() => handleFontSizeChange("-")}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <button
        className="rounded-full text-base"
        onClick={() => handleFontSizeChange("+")}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}
