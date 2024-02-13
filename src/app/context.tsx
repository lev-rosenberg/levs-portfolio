"use client";

import React, { createContext, useReducer, type Dispatch } from "react";

type InitialStateProps = {
  fontSize: number;
  project: {
    projectUrl: string;
    projectTitle: string;
  };
};
const initialState = {
  fontSize: 16,
  project: { projectUrl: "", projectTitle: "" },
};

const reducer = (state: InitialStateProps, action: any) => {
  switch (action.type) {
    case "SET_FONT_SIZE":
      return { ...state, fontSize: action.payload };
    case "SET_PROJECT":
      return { ...state, project: action.payload };
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
