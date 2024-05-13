import { Button } from "@nextui-org/react";
import { useState, FunctionComponent } from "react";
import { DatePicker } from "@nextui-org/react";
import { parseDate, getLocalTimeZone } from "@internationalized/date";

const DueDateButton: FunctionComponent = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [isOpen, SetOpen] = useState(false);

  return (
    <div>
      {!date ? (
        <Button
          aria-labelledby="closeLabel"
          className="w-2 h-12 text-white"
          color="primary"
          onClick={() => SetOpen(true)}
        >
          Due Date
        </Button>
      ) : (
        <div className="flex items-center px-4 py-2 border rounded shadow-sm bg-blue bg-opacity-10 text-blue">
          <span>{date.toLocaleDateString()}</span>
          <button
            aria-labelledby="closeLabel"
            className="ml-2 text-blue"
            onClick={() => setDate(null)}
          >
            ×
          </button>
        </div>
      )}
      <DatePicker
        color="primary"
        onChange={(d) => {
          setDate(d.toDate(getLocalTimeZone()));
          SetOpen(false);
        }}
        isOpen={isOpen}
        className="opacity-0 w-0 h-0"
      />
    </div>
  );
};

export default DueDateButton;
