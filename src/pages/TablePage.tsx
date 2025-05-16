import { TableForm } from "../layouts/table-form";

export default function TablePage() {
  return (
    <div className="relative min-h-screen w-full ">
      <div className="elative z-10 flex items-center justify-center w-screen h-screen bg-gray-300">
        <div className="w-full h-full bg-muted p-8 shadow-lg">
          <TableForm />
        </div>
      </div>
    </div>
  );
}
