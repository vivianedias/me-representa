import { useEffect } from "react";
import { v4 as uuid } from "uuid";

const useHeadingFocus = () => {
  const HEADING_ID = uuid();

  const focusHeading = () => {
    const tituloPauta = document.getElementById(HEADING_ID);
    if (tituloPauta) {
      tituloPauta.focus();
    }
  };

  useEffect(focusHeading);

  return {
    tabIndex: "-1",
    id: HEADING_ID,
  };
};

export default useHeadingFocus;
