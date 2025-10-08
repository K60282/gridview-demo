import clsx from "clsx";
import React from "react";

interface Props {
  id: string;
  label: string;
  isButtonActive: boolean;
  color: string;
  onToggle: (id: string) => void;
}

const ButtonComponent: React.FC<Props> = ({
  id,
  label,
  isButtonActive,
  color,
  onToggle,
}) => (
  <button
    id={id}
    type="button"
    className={clsx(
      "w-full h-full rounded border border-gray-300 cursor-pointer",
      isButtonActive ? color : "bg-white"
    )}
    onClick={() => onToggle(id)}
    disabled={isButtonActive}
  >
    {label}
  </button>
);

export const Button = React.memo(ButtonComponent);
