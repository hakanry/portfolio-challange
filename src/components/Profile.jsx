import React from "react";

function Profile() {
  return (
    <article className="py-8" id="profile">
      <hr className="text-violet-300" />
      <h1 className="font-sans font-bold text-5xl text-gray-800 py-4">
        Profile
      </h1>
      <section className="flex justify-between p-4">
        <div className="py-2">
          <h2 className="text-indigo-700 text-3xl">Profile</h2>
          <div className="flex gap-12 ">
            <ul className="py-4 leading-8">
              <li className="font-bold">Doğum tarihi</li>

              <li className="font-bold">İkamet Şehri</li>

              <li className="font-bold">Eğitim Durumu</li>

              <li className="font-bold">Tercih Ettiği Rol</li>
            </ul>
            <ul className="py-4 leading-8">
              <li>18.08.1998</li>

              <li>Konya</li>

              <li>Çanakkale OnSekiz Mart Üniversitesi</li>

              <li>FullStack</li>
            </ul>
          </div>
        </div>
        <div className="max-w-2xl">
          <h2 className="text-indigo-700 text-3xl ">About Me</h2>
          <blockquote className="py-2 text-gray-500 max-w-[75%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia.
          </blockquote>

          <blockquote className="py-2 text-gray-500 max-w-[75%]">
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
