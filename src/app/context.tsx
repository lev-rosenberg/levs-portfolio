"use client";

import React, { createContext, useReducer, type Dispatch } from "react";

type InitialStateProps = {
  fontSize: number;
};
const initialState = { fontSize: 16 };

const reducer = (state: InitialStateProps, action: any) => {
  switch (action.type) {
    case "SET_FONT_SIZE":
      console.log("New font size:", action.payload);
      return { ...state, fontSize: action.payload };
    default:
      return state;
  }
};

export const Context = createContext({
  state: initialState,
  dispatch: (() => undefined) as Dispatch<any>,
});

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
