import { GridView } from "./components";
import { ButtonContextProvider } from "./context";
import { mapItemsToGridCells } from "./helpers";

function App() {
  const columns = 3;
  const rows = 3;

  const gridViewItems = mapItemsToGridCells({ columns, rows, items });

  return (
    <ButtonContextProvider>
      <div className="mt-4 w-full max-w-4xl mx-auto">
        <GridView columns={columns} rows={rows} items={gridViewItems} />
      </div>
    </ButtonContextProvider>
  );
}

export default App;

const items = [
  { row: 1, col: 1, id: "1", label: "1" },
  { row: 1, col: 2, id: "2", label: "2" },
  { row: 1, col: 3, id: "3", label: "3" },
  { row: 2, col: 3, id: "4", label: "4" },
  { row: 3, col: 1, id: "5", label: "5" },
  { row: 3, col: 2, id: "6", label: "6" },
  { row: 3, col: 3, id: "7", label: "7" },
];
