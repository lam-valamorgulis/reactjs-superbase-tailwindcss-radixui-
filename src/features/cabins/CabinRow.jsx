import { formatCurrency } from "../../helper/utils";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useDeleteCabin } from "./useDeleteCabin";

export default function CabinRow({ cabin }) {
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    img,
    description,
  } = cabin;
  console.log(cabin);
  const { isDeleting, deleteCabin } = useDeleteCabin();

  return (
    <tr className="border-b-[0.5px] text-2xl font-sono">
      <td className="text-center">
        <img
          src={img}
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
          {/* <button disabled={isCreating} onClick={handleDuplicate}>
            <HiSquare2Stack />
          </button>
          <button onClick={() => setShowForm((show) => !show)}>
            <HiPencil />
          </button> */}
          <button onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>
            <HiTrash />
          </button>
        </div>
      </td>
    </tr>
  );
}
