"use client";
import { useState } from "react";
import { graph } from "@/utils/states";

const SearchBar = ({ onAddState, winner }) => {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(true);

  const filteredSearch = [...graph].filter((state) => {
    return state.name.toLowerCase().startsWith(value.toLowerCase());
  });

  const isTyping = value !== "";
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (filteredSearch.length) {
        if (filteredSearch[0].name !== value) {
          setValue(filteredSearch[0].name);
        } else {
          if (!onAddState(filteredSearch[0])) {
            setValid(false);
            setTimeout(() => {
              setValid(true);
            }, 2000);
          }

          setValue("");
        }
      }
    }
  };

  const onSearch = () => {
    return filteredSearch.map(state => {
      return (
        <li
          className="px-3 hover:bg-sky-700"
          key={state.id}
          onClick={() => setValue(state.name)}
        >
          {state.name}
        </li>
      );
    });
  };

  return (
    <div className="w-60 w-max-60 mx-auto">
      <div className="relative">
        {!valid && (
          <div
            className="w-full font-bold rounded-md px-2 py-2 text-orange-100
        text-center mx-auto absolute bottom-9 bg-red-500"
          >
            ALREADY ADDED
          </div>
        )}
        {
          winner && 
            <div
              className="w-full font-bold rounded-md px-6 py-6 text-stone-100
          text-center mx-auto absolute bottom-9 bg-emerald-300"
            >
             YOU WON 
            </div>
        }
      </div>

      <input
        disabled={winner}
        className="px-3 w-full border-2 rounded spellcheck"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter state"
        onKeyDown={handleKeyDown}
      />
      {isTyping && (
        <div className="max-h-28 overflow-auto">
          <ul className="relative h-auto border-2 w-auto rounded">
            {onSearch()}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
