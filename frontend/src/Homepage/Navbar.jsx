import React from 'react'


export default function Navbar() {

  const PhoneNavbarIteams=(<>
  <li>
          <a>Our Services</a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Your Team</a></li>
        <li><a>Help&Support</a></li>
  </>)

  return (
    <div>
      <div className="md:px-10 px-4">
      <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {PhoneNavbarIteams}
      </ul>
    </div>
    <a class="text-2x1 font-bold cursor-pointer ">QuestionFinder</a>
  </div>
  <div class="navbar-center hidden lg:flex space-x-4">
    <ul class="menu menu-horizontal px-1">
      <li>
        <details>
          <summary>Our Services</summary>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
    </div>
    <div class="navbar-center hidden lg:flex ">
    <ul class="menu menu-horizontal px-4 custom-menu">
        <li>
            <details>
                <summary>Your Team</summary>
                <ul>
                    <li><a>See Group Member</a></li>
                    <li><a>Add New Member</a></li>
                </ul>
            </details>
        </li>
        <li><a>Help&Support</a></li>
    </ul>
  </div>

  <div class="navbar-end ">
    <ul class="menu menu-horizontal px-1 space-x-3 ">
    <li><a class="bg-black rounded-md text-white cursor-pointer ">Login</a></li>
      <li>
        <a>Your Profile</a>
      </li>
    </ul>
  </div>
</div>
      </div>
    </div>
  )
}
