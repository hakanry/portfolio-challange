import React from "react";

function Profile() {
  return (
    <article className="py-4">
      <h1 className="font-sans font-bold text-5xl text-gray-800 py-4">
        Profile
      </h1>
      <section className="flex justify-between">
        <div className="py-2">
          <h2 className="text-indigo-700 text-3xl">Profile</h2>
          <div className="flex gap-5 ">
            <ul className="py-2">
              <li>Doğum tarihi</li>

              <li>İkamet Şehri</li>

              <li>Eğitim Durumu</li>

              <li>Tercih Ettiği Rol</li>
            </ul>
            <ul className="py-2">
              <li>18.08.1998</li>

              <li>Konya</li>

              <li>Çanakkale OnSekiz Mart Üniversitesi</li>

              <li>FullStack</li>
            </ul>
          </div>
        </div>
        <div className="max-w-md">
          <h2 className="text-indigo-700 text-3xl">About Me</h2>
          <blockquote className="py-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia.
          </blockquote>

          <blockquote>
            Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
            deserunt quam temporibus cumque magnam!{" "}
          </blockquote>
        </div>
      </section>
    </article>
  );
}

export default Profile;
