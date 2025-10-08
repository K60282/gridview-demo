import { useContext } from "react";
import { ButtonContext } from "./buttonContext";

export const useButtonContext = () => {
  const ctxValue = useContext(ButtonContext);

  if (!ctxValue) {
    throw new Error(
      "useButtonContext must be used within a ButtonContextProvider"
    );
  }

  return ctxValue;
};
