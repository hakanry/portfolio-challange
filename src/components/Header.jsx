export default function Header() {
  return (
    <>
      <div className="flex justify-between py-4">
        <div>
          <p className="text-2xl text-indigo-800">H</p>
        </div>
        <div>
          <nav className="flex gap-3 text-md text-gray-500 font-sans">
            <a className="content-center" href="#">
              Skills
            </a>
            <a className="content-center" href="#">
              Projects
            </a>
            <a
              href="#"
              className="border rounded-md border-indigo-800 px-8 py-3"
            >
              Hire me
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
