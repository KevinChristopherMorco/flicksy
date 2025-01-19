import { useEffect, useState } from "react";

const useScreenResponsiveness = () => {
  const [screenSize, setScreenSize] = useState({
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false,
  });

  const { sm, md, lg, xl, xxl } = screenSize;

  const handleScreenSize = () => {
    if (window.innerWidth >= 1536) {
      setScreenSize((prev) => ({
        ...prev,
        xxl: true,
        xl: false,
        lg: false,
        md: false,
        sm: false,
      }));
      return;
    }
    if (window.innerWidth >= 1280) {
      setScreenSize((prev) => ({
        ...prev,
        xl: true,
        lg: false,
        md: false,
        sm: false,
        xxl: false,
      }));
      return;
    }
    if (window.innerWidth >= 1024) {
      setScreenSize((prev) => ({
        ...prev,
        lg: true,
        md: false,
        sm: false,
        xxl: false,
        xl: false,
      }));
      return;
    }
    if (window.innerWidth >= 768) {
      setScreenSize((prev) => ({
        ...prev,
        md: true,
        sm: false,
        xxl: false,
        xl: false,
        lg: false,
      }));
      return;
    }
    if (window.innerWidth <= 640) {
      setScreenSize((prev) => ({
        ...prev,
        sm: true,
        xxl: false,
        xl: false,
        lg: false,
        md: false,
      }));
      return;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreenSize);

    handleScreenSize();

    return () => window.removeEventListener("resize", handleScreenSize);
  }, []);

  return {
    screenSize,
    isLargeScreen: lg || xl || xxl,
    isSmallScreen: sm || md,
    sm,
    md,
  };
};

export default useScreenResponsiveness;
