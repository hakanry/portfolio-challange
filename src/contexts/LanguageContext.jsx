import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocalStorage } from "../hooks/useLocalStorage";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage("language", "en");
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const loadLanguage = async () => {
      try {
        const response = await axios.get(`/locales/${language}.json`);
        setTranslations(response.data);
      } catch (error) {
        console.error("Çeviri dosyası yüklenemedi:", error);
      }
    };

    loadLanguage();
  }, [language]);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "tr" : "en";
    setLanguage(newLang);
  };

  const t = (key) => translations[key] || key;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
