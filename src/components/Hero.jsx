import img_1 from "../assets/img_1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useLanguage } from "../contexts/LanguageContext";
export default function Hero() {
  const { t } = useLanguage();
  return (
    <>
      <div className="flex justify-between py-8 flex-col  xl:flex-row">
        <div className="content-center  flex flex-col gap-8 max-w-full">
          <div className="flex gap-2.5 text-indigo-700 dark:text-violet-300">
            <div className="grow-1 content-center">
              <hr />
            </div>
            <p className="grow-12 dark:violet-300">Hakan Reşit YALÇIN</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-sans font-bold text-7xl text-gray-800 max-sm:text-4xl dark:text-slate-300 ">
              {t("tagline")}
            </p>
            <h1 className="font-sans font-normal text-lg text-gray-500  max-sm:max-w-[100%] dark:text-white">
              {t("intro")}
            </h1>
          </div>
          <div className="flex gap-3 max-sm:flex-col ">
            <a href="#">
              {" "}
              <button className="cursor-pointer border rounded-md border-indigo-800 px-8 py-3 text-white bg-indigo-800 max-sm:w-full dark:bg-violet-100 dark:text-black dark:border-violet-100">
                {t("hire_me")}
              </button>
            </a>
            <a href="https://github.com/hakanry">
              <button className="cursor-pointer border rounded-md border-indigo-800 px-8 py-3 text-indigo-800 max-sm:w-full dark:border-violet-100 dark:text-violet-100">
                <FontAwesomeIcon icon={faGithub} className="pr-1" />
                Github
              </button>
            </a>
            <a href="https://www.linkedin.com/in/hakan-re%C5%9Fit-yal%C3%A7%C4%B1n-5207b4243/">
              <button className="cursor-pointer border rounded-md border-indigo-800 px-8 py-3 text-indigo-800 max-sm:w-full dark:border-violet-100 dark:text-violet-100">
                <FontAwesomeIcon icon={faLinkedinIn} className="pr-1" />
                LinkedIn
              </button>
            </a>
          </div>
        </div>
        <img
          className="w-[30%] aspect-2/1.5 rounded-full md:max-w-full md:p-12 sm:max-w-full sm:p-12 max-sm:max-w-full max-sm:py-6"
          src={img_1}
        />
      </div>
    </>
  );
}
