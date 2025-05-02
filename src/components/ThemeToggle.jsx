import { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useLanguage } from "../contexts/LanguageContext";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const { t } = useLanguage();
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <div className="relative w-9 h-5 bg-indigo-700     rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-yellow-300  after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-indigo-600 dark:peer-checked:bg-neutral-700"></div>
        <span className="ms-3  font-medium text-gray-900 dark:text-neutral-500">
          {darkMode === true ? t("light_mode") : t("dark_mode")}
        </span>
      </label>
    </button>
  );
}
