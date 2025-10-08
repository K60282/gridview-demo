import { BG_COLORS } from "./constants";

type CellItem = { row: number; col: number; id: string; label: string };

interface Params {
  rows: number;
  columns: number;
  items: CellItem[];
}

export const mapItemsToGridCells = ({
  rows,
  columns,
  items,
}: Params): (CellItem | null)[] => {
  const cells = Array<CellItem | null>(rows * columns).fill(null);

  for (const { row, col, ...rest } of items) {
    // NOTE: how finding an cell index works:
    // 1. convert (row, col) position into a single array by index: (row - 1) and (col-1)
    // 2. skip all full rows before this one: (row - 1) * columns
    // 3. move right within the current row: + (col - 1)
    const index = (row - 1) * columns + (col - 1);

    if (index >= 0 && index < cells.length) {
      cells[index] = { row, col, ...rest };
    }
  }

  return cells;
};

export const getRandomColor = (): string =>
  BG_COLORS[Math.floor(Math.random() * BG_COLORS.length)];
