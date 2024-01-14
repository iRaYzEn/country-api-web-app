import { createContext, useState } from "react";

// data
import Data from "./data.json";

// components
import Header from "./components/Header";
import Filter from "./components/Filter";
import ShowCountries from "./components/ShowCountries";

// css
import "./App.css";

export const Context = createContext();

function App() {
  // showing the data and changing it based on the query from the form
  // or based of the selection
  const [data, setData] = useState(Data);
  const [sortBy, setSortedBy] = useState("");
  const [query, setQuery] = useState("");

  let sortedItems;
  if (query !== "") {
    sortedItems = data.filter((el) =>
      el.name.toLowerCase().includes(query.toLowerCase().trim()),
    );
  } else if (sortBy !== "") {
    sortedItems = data.filter((el) => el.region.toLowerCase() === sortBy);
  } else {
    sortedItems = data;
  }

  // colorScheme change
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  if (theme === "dark") {
    document.body.style.backgroundColor = "hsl(207, 26%, 17%)";
  } else {
    document.body.style.backgroundColor = "white";
  }

  const [isClicked, setIsClicked] = useState(false);

  return (
    <Context.Provider value={[data, setData]}>
      <div className="app" id={theme}>
        <Header onClick={toggleTheme} />
        <main className="main">
          <Filter
            isClicked={isClicked}
            query={query}
            setQuery={setQuery}
            setSortedBy={setSortedBy}
            sortBy={sortBy}
            setIsClicked={setIsClicked}
            setData={setData}
            data={Data}
          />
          <ShowCountries
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            data={sortedItems}
          />
        </main>
      </div>
    </Context.Provider>
  );
}

export default App;
