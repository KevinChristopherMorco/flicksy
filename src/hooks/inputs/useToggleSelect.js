import React, { useState } from "react";

const useToggleSelect = () => {
  const [selectState, setSelectState] = useState({ selectIndex: null });
  return { selectState, setSelectState };
};

export default useToggleSelect;
