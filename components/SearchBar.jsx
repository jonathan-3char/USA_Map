"use client"
import { useState } from "react";
import { states } from "@/utils/states";

const SearchBar = ({ onAddState }) => {
  const [value, setValue] = useState('');
  
  const filteredSearch = states.filter(state => {
    return state.name.toLowerCase().includes(value.toLowerCase());
  });

  const isTyping = value !== '';
  const onChange = (e) => {
    setValue(e.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (filteredSearch.length) {
        if (filteredSearch[0].name !== value) {
          setValue(filteredSearch[0].name);
        } else {
          console.log(`the state ${value} has been submitted`);
          onAddState(value)
          setValue('');
      }
      }
    }
  }

  const onSearch = () => {
    
    return filteredSearch.map(state => {
      return <div className="px-3 hover:bg-sky-700" key={state.abbreviation}>{state.name}</div>
    })
  }

  return (
    <div className="w-1/4 w-max-1/4 mx-auto">
      <input 
        className="px-3 w-full border-2 rounded spellcheck" 
        type="text" 
        value={value} 
        onChange={onChange} 
        placeholder="Enter state"
        onKeyDown={handleKeyDown}
      />
      { isTyping && 
        <div className="max-h-28 overflow-auto">
          <div className="relative h-auto border-2 w-auto rounded">
           {onSearch()}
          </div>
        </div>
      }
    </div>
  );
}

export default SearchBar;
