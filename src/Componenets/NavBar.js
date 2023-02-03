import React from "react";

function NavBar() {
  return (
    <div className="flex fixed flex-col w-screen v-screen mt-5 items-center">
      <div className="navbar rounded-2xl content-center  items-center w-11/12 h-full flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <a className="btn btn-ghost font-bold normal-case text-xl text-white">
          To Do List
        </a>
      </div>
    </div>
  );
}

export default NavBar;