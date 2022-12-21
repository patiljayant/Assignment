import React from 'react'

const Navbar = () => {
  return (
    <nav
    className="relative w-full flex flex-wrap items-center justify-between py-3 bg-[#fbfaff] text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light font-[Montserrat]"
  >
    <div className="container-fluid w-full flex flex-wrap items-center justify-between px-[7rem]">
      <button
        className="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent1"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bars"
          className="w-6"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
      </button>
      <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent1">
        <a className="text-3xl text-[#3b355a] pr-[7.5rem] font-logo flex" href="#">
            <svg className="h-[30px] w-[30px] mr-2" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 176.000000 190.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,190.000000) scale(0.100000,-0.100000)"
                fill="#3b355a" stroke="none">
                    <path d="M1489 1767 c-9 -7 -36 -44 -61 -82 -249 -388 -643 -623 -1118 -665
                    -148 -13 -170 -24 -170 -80 0 -50 39 -70 135 -70 227 0 518 -97 744 -248 123
                    -82 301 -262 388 -392 79 -120 105 -137 151 -103 15 11 28 30 30 43 2 12 -19
                    67 -46 124 -59 120 -93 215 -124 351 -19 86 -22 128 -22 300 0 172 3 214 22
                    300 31 136 65 231 123 350 27 55 49 110 49 122 0 24 -43 63 -69 63 -9 0 -23
                    -6 -32 -13z m-199 -474 c0 -5 -7 -46 -16 -93 -9 -53 -15 -145 -15 -245 0 -144
                    5 -208 27 -328 4 -20 3 -37 -1 -37 -3 0 -39 26 -78 59 -132 107 -315 214 -442
                    257 -111 37 -111 31 6 78 176 71 351 175 454 269 49 45 65 55 65 40z"/>
                </g>
            </svg> reunion
        </a>

        <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
        <li className="nav-item p-2">
            <a
              className="nav-link text-black rounded-md hover:bg-[#e9e6f7] hover:text-[#8479e0] focus:bg-[#e9e6f7] focus:text-[#8479e0] px-7 py-2"
              href="#"
              >Rent</a>
          </li>
          <li className="nav-item p-2">
            <a
              className="nav-link text-black rounded-md hover:bg-[#e9e6f7] hover:text-[#8479e0] focus:bg-[#e9e6f7] focus:text-[#8479e0] px-7 py-2"
              href="#"
              >Buy</a>
          </li>
          <li className="nav-item p-2">
            <a
              className="nav-link text-black rounded-md hover:bg-[#e9e6f7] hover:text-[#8479e0] focus:bg-[#e9e6f7] focus:text-[#8479e0] px-7 py-2"
              href="#"
              >Sell</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center relative">
        <a className="mr-4" href="#">
            <button type="button" className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-lg hover:bg-[#e7e7f3] hover:bg-opacity-100 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                Login
            </button>
        </a>
        <a className="mr-4" href="#">
            <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Sign up
            </button>
        </a>
      </div>
    </div>
  </nav>
  )
}

export default Navbar