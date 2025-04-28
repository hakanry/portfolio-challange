export default function TopComp() {
  const toggleMode = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="font-sans flex justify-end">
        <div className="navbar">
          <div className="dark-mode__toggle">
            <div onClick={toggleMode} className="toggle" />
          </div>
        </div>
        <div className="text-neutral-500">
          DARK MODE | <span className="text-indigo-700">TÜRKÇE</span>'YE GEÇ
        </div>
      </div>
    </>
  );
}
