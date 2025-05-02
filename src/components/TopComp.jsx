import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "../contexts/LanguageContext";
export default function TopComp() {
  const { t, toggleLanguage } = useLanguage();
  return (
    <>
      <div className="font-sans flex justify-end py-4 max-sm:text-xs ">
        <div>
          <ThemeToggle />
        </div>
        <div className="text-neutral-500 font-bold flex">
          <p className="px-4"> | </p>
          <button
            onClick={toggleLanguage}
            className="text-indigo-700 dark:text-violet-300"
          >
            {t("switch_to_turkish")}
          </button>
        </div>
      </div>
    </>
  );
}
