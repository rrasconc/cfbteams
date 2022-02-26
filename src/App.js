import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "./config/api";
import { useConferences } from "./components/Hooks";
import { Navbar } from "./components/Navbar";
import { Loader } from "./components/Loader";
import { Switcher } from "./components/Switcher";
import { TeamItem } from "./components/TeamItem";

const App = () => {
  const conferences = useConferences();
  const [teams, setTeams] = useState([]);
  const [currentConfe, setCurrentConfe] = useState("ACC");
  const [initialTeams, setInitialTeams] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    filterTeams();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    filterTeams();
  };

  const filterTeams = () => {
    if (searchValue) {
      let filteredTeams = teams.filter((team) => {
        let teamStrings = team.school + team.mascot + team.abbreviation;
        return teamStrings.toUpperCase().includes(searchValue.toUpperCase());
      });
      setTeams(filteredTeams);
    } else {
      setTeams(initialTeams);
    }
  };

  const fetchTeams = (conf) => {
    setIsLoading(true);
    axios.get(baseURL + "teams/" + conf).then((res) => {
      let teams = res.data;
      setTeams(teams);
      setInitialTeams(teams);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchTeams(currentConfe);
  }, []);

  return (
    <>
      <main className="text-gray-800 text-sm h-full min-h-screen">
        <Navbar
          searchValue={searchValue}
          onChange={handleSearchChange}
          onSubmit={handleSubmit}
        />
        <section className="p-2 md:p-10 h-full">
          <Switcher
            conferences={conferences}
            handleSwitch={(position) => {
              let current = conferences[position].abbreviation;
              setCurrentConfe(current);
              fetchTeams(current);
            }}
          />
          {isLoading ? (
            <Loader className="mt-32" />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {teams.map((item) => (
                <TeamItem
                  teamDetails={item}
                  conference={currentConfe}
                  key={item.id}
                />
              ))}
            </div>
          )}
        </section>
      </main>
      <footer className="bg-blue-50 w-full h-20 flex items-center justify-center bottom-0 relative space-x-10">
        <a
          href="https://www.github.com/rigobertorascon"
          className="hover:scale-110"
        >
          About
        </a>
        <a
          href="https://www.github.com/rigobertorascon"
          className="hover:scale-110"
        >
          Github
        </a>
        <a
          href="https://www.instagram.com/rigobertorascon/"
          className="hover:scale-110"
        >
          Instagram
        </a>
      </footer>
    </>
  );
};

export default App;
