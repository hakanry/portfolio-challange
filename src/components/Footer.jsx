import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
function Footer() {
  const { t } = useLanguage();
  return (
    <div className="flex gap-22 flex-col p-12 ">
      <h1 className="text-[42px] font-semibold max-w-md text-gray-800 dark:text-slate-300">
        {t("lets_work")}
      </h1>
      <nav className="flex justify-around max-sm:flex-col max-sm: gap-4">
        <a
          className="grow-30 text-rose-800 underline font-bold dark:text-violet-300"
          href={
            "https://mail.google.com/mail/?view=cm&to=`${hakanryalcin@gmail.com}`"
          }
        >
          👉 hakanryalcin@gmail.com
        </a>
        <a
          className="grow-1 text-gray-950 dark:text-violet-100"
          href="https://portfolio-challange-ten.vercel.app/"
        >
          {t("blog")}
        </a>
        <a
          className="grow-1 text-emerald-500"
          href="https://github.com/hakanry"
        >
          Github
        </a>
        <a
          className="grow-1 text-sky-600"
          href="https://www.linkedin.com/in/hakan-re%C5%9Fit-yal%C3%A7%C4%B1n-5207b4243/"
        >
          LinkedIn
        </a>
      </nav>
    </div>
  );
}

export default Footer;
