import ThemeToggle from "./ThemeToggle";

export default function TopComp() {
  return (
    <>
      <div className="font-sans flex justify-end py-4 max-sm:text-xs ">
        <div>
          <ThemeToggle />
        </div>
        <div className="text-neutral-500 font-bold flex">
          <p className="px-4"> | </p>
          <span className="text-indigo-700 dark:text-violet-300">TÜRKÇE</span>
          'YE GEÇ
        </div>
      </div>
    </>
  );
}
