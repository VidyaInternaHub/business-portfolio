interface Props {
  label: string,
  type?: string;
  placeholder?: string;
  className?: string;
}

export default function Input({
  label,
  type = "text",
  placeholder = "",
  className,
}: Props) {
  return (
    <div className="mb-6">
      <label className="block font-medium text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          placeholder={placeholder}
          className={`block w-full rounded-md border-0 py-2 pl-2 text-gray-900 bg-background shadow-sm ring-1 ring-inset ring-gray-400 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 ${className}`}
        />
      </div>
    </div>
  );
}
