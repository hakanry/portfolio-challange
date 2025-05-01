export default function TopComp() {
  const toggleMode = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="font-sans flex justify-end py-4">
        <div className="navbar px-4">
          <div className="dark-mode__toggle ">
            <div onClick={toggleMode} className="toggle" />
          </div>
        </div>
        <div className="text-neutral-500 font-bold flex">
          DARK MODE <p className="px-4"> | </p>
          <span className="text-indigo-700 ">TÜRKÇE</span>'YE GEÇ
        </div>
      </div>
    </>
  );
}
