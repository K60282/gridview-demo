import type { FC } from "react";
import { useButtonContext } from "../context";
import { Button } from "./Button";

type Item = { id: string; label: string } | null;

interface Props {
  items: Item[];
  columns: number;
  rows: number;
}

export const GridView: FC<Props> = ({ items, columns, rows }) => {
  const { isActive, getColor, toggle } = useButtonContext();

  return (
    <div
      className="grid gap-2"
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
      }}
    >
      {items.map((item, i) => (
        <div key={i} className="aspect-square">
          {item ? (
            <Button
              id={item.id}
              label={item.label}
              isButtonActive={isActive(item.id)}
              color={getColor(item.id)}
              onToggle={toggle}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
};
