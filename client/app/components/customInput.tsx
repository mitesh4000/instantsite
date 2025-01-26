interface CustomInputProps {
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  className?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  id,
  name,
  type,
  value,
  onChange,
  label,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-xs font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};
export default CustomInput;
