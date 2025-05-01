import { toast, ToastContainer } from "react-toastify";

export default function Header() {
  return (
    <>
      <div className="flex justify-between py-4 max-w-full max-sm:flex-col max-sm:text-center">
        <div className="relative w-15 h-15 bg-violet-100 rounded-full flex justify-center items-center text-center max-sm:self-center">
          <span className="absolute text-md left-5.5 top-4 text-indigo-800 rotate-30 font-bold text-xl">
            H
          </span>
        </div>
        <div>
          <nav className="flex gap-3 text-md text-gray-500 font-sans max-sm:flex-col">
            <a
              className="content-center px-8 py-3"
              href="#skills"
              onClick={() => toast.success("Going to Skills")}
            >
              Skills
            </a>
            <a
              className="content-center px-8 py-3"
              href="#projects"
              onClick={() => toast.success("Going to Projects")}
            >
              Projects
            </a>
            <a
              href="#"
              className="border rounded-md border-indigo-800 px-8 py-3"
            >
              Hire me
            </a>
          </nav>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}
