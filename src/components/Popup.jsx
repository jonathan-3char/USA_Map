function Popup({ handlePopup }) {
  return (
    <div className="popupBackground" onClick={() => handlePopup(false)}>
      <div className="popupContent" onClick={(e) => e.stopPropagation()}>
        <h1>Instructions:</h1>
        <p>
          There will be two states listed at the top, your goal is to connect
          them by choosing states to create a path. You will be told if you are
          on the right track based of the color of your guess.
        </p>
        <ul className="helpList">
          <li>
            <div className="circle goodChoice alignLeft"></div>Green: This state
            is a part of the optimal path!
          </li>
          <li>
            <div className="circle okChoice alignLeft"></div>
            Orange: This state is close to the optimal path but not apart of it.
          </li>
          <li>
            <div className="circle badChoice alignLeft"></div>
            Red: This state is far from the optimal path.
          </li>
        </ul>
        <button
          onClick={() => handlePopup(false)}
          className="popupExitButton"
        ></button>
      </div>
    </div>
  );
}

export default Popup;
