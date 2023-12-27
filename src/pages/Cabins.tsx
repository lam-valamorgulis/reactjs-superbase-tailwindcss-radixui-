import CabinTable from "../features/cabins/CabinTable"

function Cabins() {
  return (
    <>
      <div className="flex flex-row justify-between">
        <h1 className="text-5xl font-semibold	">All cabins</h1>
        <p>Filter / Sort</p>
      </div>
      <div>
        <CabinTable/>
        <button> add</button>
      </div>
    </>
  );
}

export default Cabins;
