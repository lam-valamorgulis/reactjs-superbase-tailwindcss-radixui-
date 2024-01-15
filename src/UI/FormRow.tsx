export default function FormRow({ label, error, children }) {
  return (
    <div className="p-6 gap-24 grid grid-cols-3 font-medium items-center border-b-[0.5px] border-gray-100">
      {label && (
        <label className="" htmlFor={children.props.id}>
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-red-400">{error}</span>}
    </div>
  );
}
