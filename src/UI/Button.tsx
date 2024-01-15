export default function Button({ children, handleClick, type }) {
  let className = `border rounded-lg py-5 px-8`;
  if (type == "primary") {
    className = className + " text-slate-100 bg-blue-500 hover:bg-blue-700";
  } else if (type == "secondary") {
    className = className + " text-gray-600 bg-gray-0 hover:bg-gray-100";
  }
  return (
    <>
      <button className={className} onClick={handleClick}>
        {children}
      </button>
    </>
  );
}
