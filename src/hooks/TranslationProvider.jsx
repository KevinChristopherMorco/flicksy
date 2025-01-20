import React, { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const TranslateContext = createContext();

const TranslationProvider = ({ children }) => {
  const { t, i18n } = useTranslation();
  const [languageChoice, setLanguageChoice] = useState(
    localStorage.getItem("languageChoice") || "en",
  );

  useEffect(() => {
    i18n.changeLanguage(languageChoice);
    localStorage.setItem("languageChoice", languageChoice);
  }, [languageChoice]);

  return (
    <TranslateContext.Provider value={{ t, languageChoice, setLanguageChoice }}>
      {children}
    </TranslateContext.Provider>
  );
};

export const useTranslateContext = () => useContext(TranslateContext);

export default TranslationProvider;
