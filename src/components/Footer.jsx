import React from "react";

function Footer() {
  return (
    <div className="flex gap-22 flex-col p-12">
      <h1 className="text-[42px] font-semibold max-w-md text-gray-800">
        Let’s work together on your next product.
      </h1>
      <nav className="flex justify-around">
        <a className="grow-30">hakanresityalcin@gmail.com</a>
        <a className="grow-1">Personal Blog</a>
        <a className="grow-1">Github</a>
        <a className="grow-1">LinkedIn</a>
      </nav>
    </div>
  );
}

export default Footer;
