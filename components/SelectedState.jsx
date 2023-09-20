const SelectedState = (optimal) => {
  return (
    <div>
    {selStates.map((state, i) =><div className="flex align-middle outline rounded-lg mb-2"> 
      <div className="my-2 h-7 w-7 mr-4 bg-green-200 rounded outline"></div> 
      <p className="text-[#E4E4D0] font-bold" key={i}>{state}</p>
      </div>)}
    </div>
  )
}

export default SelectedState;
