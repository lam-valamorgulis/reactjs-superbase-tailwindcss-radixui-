import CabinRow from "./CabinRow";
import useCabins from "./useCabins";
import Spinner from "../../UI/Spinner";

export default function CabinTable() {
  const { isLoading, cabins } = useCabins();
  if (isLoading) return <Spinner />;

  return (
    <div className="h-screen pt-10">
      <table className="table-fixed border-spacing-2 border border-slate-200 w-full text-left">
        <thead>
          <tr>
            <th></th>
            <th>
              <div className="py-10 tracking-widest uppercase text-xxl">
                Cabin
              </div>
            </th>
            <th>
              <div className="py-10 tracking-widest uppercase text-xxl">
                Capacity
              </div>
            </th>
            <th>
              <div className="py-10 tracking-widest uppercase text-xxl">
                price
              </div>
            </th>
            <th>
              <div className="py-10 tracking-widest uppercase text-xxl">
                discount
              </div>
            </th>
            <th></th>
          </tr>
        </thead>
        {/* get data from remote API */}
        {/* creat a */}
        <tbody className="bg-white">
          {cabins.map((cabin) => (
            <CabinRow key={cabin.id} cabin={cabin} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
