import CabinTable from "../features/cabins/CabinTable";
import Button from "../UI/Button";
import { useState } from "react";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  return (
    <div className="flex flex-col gap-15">
      <div className="flex flex-row justify-between">
        <h1 className="text-5xl font-semibold	">All cabins</h1>
        <p>Filter / Sort</p>
      </div>
      <div className="flex flex-col gap-20">
        <CabinTable />
        <Button handleClick={handleClick} type="primary">
          Add Cabin
        </Button>
      </div>
      {showForm && <CreateCabinForm />}
    </div>
  );
}

export default Cabins;
