import cx from "clsx";
import { useId } from "@reach/auto-id";
import { useState } from "react";

export function Input({
  id,
  icon,
  label,
  placeholder,
  hideLabel = false,
  name,
  onFocus = () => null,
  onChange = () => null,
  ...props
}) {
  const inputId = useId(id);
  const [value, setValue] = useState(props.value);

  function handleFocus(event) {
    onFocus(event);
  }

  function handleChange(event) {
    setValue(event.target.value);
    onChange(event);
  }

  return (
    <div className="flex flex-col items-stretch justify-start text-center space-y-2 w-full">
      {label && !hideLabel ? (
        <label
          className="text-neutral-800 font-medium text-sm leading-relaxed"
          htmlFor={inputId}
        >
          {label}
        </label>
      ) : null}

      <div
        className={cx([
          "flex flex-no-wrap flex-row items-center justify-start space-x-2",
          "border border-white hover:border-neutral-600 focus-within:border-neutral-300",
          "rounded-full bg-white w-full py-0 px-2",
        ])}
      >
        {icon ? (
          <label htmlFor={inputId} className="text-neutral-600 text-center">
            {icon}
          </label>
        ) : null}
        <input
          {...props}
          id={inputId}
          type="text"
          className="text-sm text-neutral-700 placeholder-neutral-400 px-0 py-1 leading-relaxed focus:outline-none w-full"
          aria-label={label}
          placeholder={placeholder}
          value={value}
          name={name}
          onFocus={handleFocus}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
