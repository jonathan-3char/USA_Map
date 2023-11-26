import { stateNames } from "@/utils/allStates";
import { useState } from "react";

function InputBar({ onEnter, resultList, stateTo, stateFrom, isWinner }) {
  const [text, setText] = useState("");
  const states = stateNames.map((state) => (
    <option value={state} key={state}></option>
  ));
  const [hidden, setHidden] = useState(false);

  function isValidState(state) {
    const stateIndex = stateNames.indexOf(state);

    // validate: input is a state name
    if (stateIndex !== -1) {
      // validate: input is not a repeated state name or either randomly selected state
      return (
        resultList.indexOf(state) === -1 &&
        state !== stateTo &&
        state !== stateFrom
      );
    }

    return false;
  }

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleSubmission(e) {
    if (e.key === "Enter") {
      if (e.target.value.length === 0) {
        return;
      }

      const input = e.target.value
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.substr(1).toLowerCase())
        .join(" ");

      setText("");

      if (isValidState(input)) {
        onEnter(input);
      } else {
        console.log(`Invalid input ${input}`);
        setHidden(!hidden);
        const isHidden = document.querySelector(".errorMessage");
        isHidden.style.display = "block";
        setTimeout(() => (isHidden.style.display = "none"), 500);
      }
    }
  }

  return (
    <div className="inputContainer">
      <input
        list="stateSearch"
        type="text"
        placeholder="Insert state..."
        value={text}
        onChange={handleTextChange}
        onKeyDown={handleSubmission}
        disabled={isWinner}
      />
      <div className="errorMessage">Invalid Input</div>
      <datalist id="stateSearch">{states}</datalist>
    </div>
  );
}

export default InputBar;
