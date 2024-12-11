import { useContext } from "react";
import { ItemContext } from "../Contexts/ItemContextsProvider";

export const useItemContext = () => {
  const context = useContext(ItemContext);

  if (!context) {
    throw new Error("useItemsContext must be used within ItemsContextProvider");
  }

  return context;
};
