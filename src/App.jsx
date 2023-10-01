import { useState } from "react";
import "boxicons";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div
        className="h-screen v-screen flex items-center justify-center px-8 
                 bg-slate-100 dark:bg-zinc-900 dark:text-white transition-colors"
      >
        <div className="max-w-[600px] shadow-md p-6 rounded-md bg-white dark:bg-zinc-800">
          <div className="flex items-start sm:items-center mb-4">
            <h1 className="text-4xl flex-1 mr-4">Tailwind Dark/Light Mode</h1>
            <button className="cursor-pointer" onClick={toggleDarkMode}>
              <box-icon
                name={`${darkMode ? "moon" : "sun"}`}
                type="solid"
                color={`${darkMode ? "white" : "black"}`}
              ></box-icon>
            </button>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            fugiat voluptate? Tempora doloribus ex optio quisquam perspiciatis
            inventore nesciunt numquam reiciendis officia, culpa nihil quos.
            Libero alias aut iusto adipisci!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
