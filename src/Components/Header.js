import React from "react";

export default function Header() {
  return (
    <>
      <img
        src="https://media.istockphoto.com/photos/minimal-work-space-creative-flat-lay-photo-of-workspace-desk-top-view-picture-id1220573371?b=1&k=20&m=1220573371&s=170667a&w=0&h=dyT6F0wNP1NdDdvvTd95RVrR8qHwbEU8bqLxpDpSejw="
        alt=""
        className="w-full h-3/5"
      />
      <div className="h-80 flex">
        <div className="h-4/5 m-auto w-60 rounded bg-sky-800">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
            alt=""
            className="scale-50 -my-6"
          />
          <p className="text-center text-xl text-white font-bold -my-12">
            Instagram
          </p>
        </div>
        <div className="h-4/5 m-auto w-60 rounded bg-sky-800">
          <img
            src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png"
            alt=""
            className="scale-50 -my-6"
          />
          <p className="text-center text-xl text-white font-bold -my-12">
            Twitter
          </p>
        </div>
        <div className="h-4/5 m-auto w-60 rounded bg-sky-800">
          <img
            src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png"
            alt=""
            className="scale-50 -my-6"
          />
          <p className="text-center text-xl text-white font-bold -my-12">
            Facebook
          </p>
        </div>
        <div className="h-4/5 m-auto w-60 rounded bg-sky-800">
          <img
            src="https://1.bp.blogspot.com/-W3R9CzV2AWk/YCo9Ev2CcVI/AAAAAAAAD88/qymHYkY-wUwHrClgIXxaZVL_echTZbD0ACLcBGAsYHQ/s1600/Logo%2BYoutube.png"
            alt=""
            className="scale-75 -my-1"
          />
          <p className="text-center text-xl text-white font-bold">Youtube</p>
        </div>
      </div>
    </>
  );
}
