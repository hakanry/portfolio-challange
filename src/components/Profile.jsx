import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

function Profile() {
  const { t } = useLanguage();
  return (
    <article className="py-8" id="profile">
      <hr className="text-violet-300" />
      <h1 className="font-sans font-bold text-5xl text-gray-800 py-4 dark:text-slate-300">
        {t("profile")}
      </h1>
      <section className="flex justify-between p-4 max-sm:flex-col sm:gap-20">
        <div className="py-2">
          <h2 className="text-indigo-700 text-3xl dark:text-indigo-400">
            {t("profile")}
          </h2>
          <div className="flex gap-12 ">
            <ul className="py-4 leading-8 dark:text-white">
              <li className="font-bold">{t("birth_date")}</li>

              <li className="font-bold">{t("city")}</li>

              <li className="font-bold">{t("education")}</li>

              <li className="font-bold">{t("role")}</li>
            </ul>
            <ul className="py-4 leading-8 dark:text-white">
              <li>18.08.1998</li>

              <li>Konya</li>

              <li>{t("education_value")}</li>

              <li>FullStack</li>
            </ul>
          </div>
        </div>
        <div className="max-w-2xl">
          <h2 className="text-indigo-700 text-3xl dark:text-indigo-400">
            {t("about_me_title")}
          </h2>
          <blockquote className="py-2 text-gray-500 max-w-[75%] max-sm:max-w-full dark:text-white">
            {t("about_me_1")}
          </blockquote>

          <blockquote className="py-2 text-gray-500 max-w-[75%] max-sm:max-w-full dark:text-white">
            {t("about_me_2")}
          </blockquote>
        </div>
      </section>
      <hr className=" text-violet-300" />
    </article>
  );
}

export default Profile;
