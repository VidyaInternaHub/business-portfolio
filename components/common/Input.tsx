import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  validate?: (value: string) => boolean | string;
  errors: FieldErrors;
  pattern?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function Input({
  id,
  label,
  type = "text",
  placeholder = "",
  disabled,
  required,
  register,
  validate,
  errors,
  pattern,
  onKeyDown,
  className,
}: Props) {
  return (
    <div className="mb-6">
      <label className="block font-medium text-gray-900">{label}</label>
      <div className="mt-2">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          {...register(id, { required, validate })}
          pattern={pattern}
          onKeyDown={onKeyDown}
          className={`block w-full rounded-xl border-0 py-3 pl-2 text-gray-900 bg-background shadow-sm ring-1 ring-inset ring-gray-400 outline-none placeholder:text-gray-400 focus:ring-inset disabled:opacity-70 disabled:cursor-not-allowed ${
            errors[id] ? "focus:ring-rose-600" : "focus:ring-indigo-600"
          } ${className}`}
        />
        {errors[id] && (
          <p className="mt-1 text-sm text-rose-600">
            {errors[id]?.message as string}
          </p>
        )}
      </div>
    </div>
  );
}
