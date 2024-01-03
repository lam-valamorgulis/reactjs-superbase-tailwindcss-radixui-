import CabinTable from "../features/cabins/CabinTable";

function Cabins() {
  return (
    <div className="flex flex-col gap-15">
      <div className="flex flex-row justify-between">
        <h1 className="text-5xl font-semibold	">All cabins</h1>
        <p>Filter / Sort</p>
      </div>
      <div className="flex flex-col gap-20">
        <CabinTable />
        <button> add</button>
      </div>
    </div>
  );
}

export default Cabins;
