import React, { createContext, useState, useEffect, useContext } from "react";

const LanguageContext = createContext();

const translations = ["en", "tr"];

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const stored = localStorage.getItem("language");
    if (stored && translations[stored]) setLanguage(stored);
  }, []);

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      localStorage.setItem("language", lang);
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        t: (key) => translations[language][key] || key,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
