import React from "react";

function Profile() {
  return (
    <article className="py-8" id="profile">
      <hr className="text-violet-300" />
      <h1 className="font-sans font-bold text-5xl text-gray-800 py-4">
        Profile
      </h1>
      <section className="flex justify-between p-4 max-sm:flex-col sm:gap-20">
        <div className="py-2">
          <h2 className="text-indigo-700 text-3xl">Profile</h2>
          <div className="flex gap-12 ">
            <ul className="py-4 leading-8">
              <li className="font-bold">Birth Date</li>

              <li className="font-bold">City of Residence</li>

              <li className="font-bold">Educational Status</li>

              <li className="font-bold">Preferred Role</li>
            </ul>
            <ul className="py-4 leading-8 ">
              <li>18.08.1998</li>

              <li>Konya</li>

              <li>Canakkale OnSekiz Mart University</li>

              <li>FullStack</li>
            </ul>
          </div>
        </div>
        <div className="max-w-2xl">
          <h2 className="text-indigo-700 text-3xl ">About Me</h2>
          <blockquote className="py-2 text-gray-500 max-w-[75%] max-sm:max-w-full">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia.
          </blockquote>

          <blockquote className="py-2 text-gray-500 max-w-[75%] max-sm:max-w-full">
            Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
            deserunt quam temporibus cumque magnam!{" "}
          </blockquote>
        </div>
      </section>
      <hr className=" text-violet-300" />
    </article>
  );
}

export default Profile;
