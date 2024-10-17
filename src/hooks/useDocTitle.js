import { useEffect } from "react";

const useDocTitle = (title) => {
  useEffect(() => {
    if (title) {
      document.title = `${title} - WINX`;
    } else {
      document.title = "WINX | The Perfect Audio Store";
    }
  }, [title]);

  return null;
};

export default useDocTitle;
