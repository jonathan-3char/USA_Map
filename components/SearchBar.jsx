"use client"
import { useState } from "react";
import { states } from "@/utils/states";

const SearchBar = ({ onAddState }) => {
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(true);

  const filteredSearch = [...states].filter(state => {
    return state.name.toLowerCase().startsWith(value.toLowerCase());
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
          if (!onAddState(value)) {
            setValid(false);
            setTimeout(() => {
              setValid(true);
            }, 2000);
          }

          setValue('');
      }
      }
    }
  }

  const onSearch = () => {
    
    return filteredSearch.map(state => {
      return <div className="px-3 hover:bg-sky-700" 
                key={state.abbreviation}
                onClick={() => setValue(state.name)}>
                {state.name} 
            </div>
    })
  }

  
  return (
    
    <div className="w-60 w-max-60 mx-auto">
      <div className="relative">
      {!valid && <div className="w-full font-bold rounded-md px-2 py-2 text-orange-100
        text-center mx-auto absolute bottom-9 bg-red-500">ALREADY ADDED</div>}
      </div>
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
