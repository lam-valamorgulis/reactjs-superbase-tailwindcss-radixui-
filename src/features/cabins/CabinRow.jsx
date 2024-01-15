import { formatCurrency } from "../../helper/utils";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useDeleteCabin } from "./useDeleteCabin";
import { useCreateCabin } from "./useCreateCabin";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";

export default function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false);
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isLoading, createCabin } = useCreateCabin();

  function handleDuplicate() {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (
    <>
      <tr className="border-b-[0.5px] text-2xl font-sono">
        <td className="text-center">
          <img
            src={image}
            className="w-28 block object-cover aspect-[3/2] object-center	"
          />
        </td>
        <td className="font-bold">001</td>
        <td>Fits up to {maxCapacity} guests</td>
        <td className="font-bold tracking-widest">
          {formatCurrency(regularPrice)}
        </td>
        <td className="font-bold tracking-widest">
          {discount ? formatCurrency(discount) : <span>&mdash;</span>}
        </td>
        <td>
          <div>
            <button onClick={handleDuplicate}>
              <HiSquare2Stack />
            </button>
            <button onClick={() => setShowForm((show) => !show)}>
              <HiPencil />
            </button>
            <button onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>
              <HiTrash />
            </button>
          </div>
        </td>
      </tr>
      <div className="w-screen bg-white">
        {showForm && <CreateCabinForm cabinToEdit={cabin} />}
      </div>
    </>
  );
}
