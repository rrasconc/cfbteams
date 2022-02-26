import React from "react";
import { Container } from "./Container";

export const Navbar = (props) => {
  return (
    <header className="bg-blue-50 items-center justify-evenly flex flex-col md:flex-row md:h-32">
      <a href="#" className="w-screen md:w-fit">
        <Container>
          <span className="font-bold text-xl text-blue-800">CFBAPI</span>
          <span className="px-2 text-xs">
            Powered by collegefootballdata.com
          </span>
        </Container>
      </a>
      <div className="w-screen md:w-fit md:flex">
        <Container>
          <form className="flex items-center" onSubmit={props.onSubmit}>
            <svg
              className="fill-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
            >
              <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
            </svg>
            <input
              value={props.searchValue}
              onChange={props.onChange}
              className="outline-none w-24 md:w-72 mx-5"
              type="text"
              placeholder="Search..."
            />
          </form>
        </Container>
      </div>
    </header>
  );
};
