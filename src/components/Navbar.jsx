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
              className="outline-none w-60 mx-5"
              type="text"
              placeholder="Search..."
            />
          </form>
        </Container>
        <a href="https://github.com/RigobertoRascon/CFBAPI">
          <Container>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1.25 17c0 .69-.559 1.25-1.25 1.25-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25zm1.393-9.998c-.608-.616-1.515-.955-2.551-.955-2.18 0-3.59 1.55-3.59 3.95h2.011c0-1.486.829-2.013 1.538-2.013.634 0 1.307.421 1.364 1.226.062.847-.39 1.277-.962 1.821-1.412 1.343-1.438 1.993-1.432 3.468h2.005c-.013-.664.03-1.203.935-2.178.677-.73 1.519-1.638 1.536-3.022.011-.924-.284-1.719-.854-2.297z" />
            </svg>
          </Container>
        </a>
      </div>
    </header>
  );
};
