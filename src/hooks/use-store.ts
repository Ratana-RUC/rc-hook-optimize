import React from "react";
import storesContext from "../contexts/store.context";

const useStores = () => React.useContext(storesContext);

export default useStores;
