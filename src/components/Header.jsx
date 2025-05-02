import { toast, ToastContainer } from "react-toastify";
import { useLanguage } from "../contexts/LanguageContext";
export default function Header() {
  const { t } = useLanguage();
  return (
    <>
      <div className="flex justify-between py-4 max-w-full max-sm:flex-col max-sm:text-center">
        <div className="relative w-15 h-15 bg-violet-100 rounded-full flex justify-center items-center text-center max-sm:self-center dark:bg-indigo-700">
          <span className="absolute text-md left-5.5 top-4 text-indigo-800 rotate-30 font-bold text-xl dark:text-indigo-400 ">
            H
          </span>
        </div>
        <div>
          <nav className="flex gap-3 text-md text-gray-500 font-sans max-sm:flex-col dark:text-gray-500">
            <a
              className="content-center px-8 py-3"
              href="#skills"
              onClick={() => toast.success(t("going_to_skills"))}
            >
              {t("skills")}
            </a>
            <a
              className="content-center px-8 py-3"
              href="#projects"
              onClick={() => toast.success(t("going_to_projects"))}
            >
              {t("projects")}
            </a>
            <a
              href="#"
              className="border rounded-md border-indigo-800 px-8 py-3 dark:bg-white dark:text-indigo-800 dark:border-indigo-800"
            >
              {t("hire_me")}
            </a>
          </nav>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}
