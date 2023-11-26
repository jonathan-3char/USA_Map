function ResultGrid({ resultList, optimalPath, subOptimalPath }) {
  function howOptimal(result) {
    if (optimalPath.indexOf(result) !== -1) {
      return "goodChoice";
    } else if (subOptimalPath.has(result)) {
      return "okChoice";
    } else {
      return "badChoice";
    }
  }

  const resultDisplay = resultList?.map((result) => (
    <div className="grid" key={result}>
      {result}
      <div
        className={howOptimal(result) + " circle " + " positionMiddleRight"}
      ></div>
    </div>
  ));

  return <div className="resultGrid">{resultDisplay}</div>;
}

export default ResultGrid;
