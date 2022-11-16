import { GSpinner } from "components/ui/GSpinner";
import { GSwitch } from "components/ui/GSwitch";

export const ChoseLayerItem = ({ title, enabled, setEnabled, isLoading }) => {
  return (
    <li className="rounded-lg bg-gray-50  px-3 py-2 shadow-sm transition-all hover:bg-gray-100 hover:shadow-md">
      <div className="flex items-center justify-between space-x-2">
        <div className="flex-1">
          <p className="font-medium text-slate-700">{title}</p>
        </div>
        <div className="flex h-6 w-10 items-center justify-center text-emerald-500">
          {isLoading ? (
            <GSpinner />
          ) : (
            <GSwitch enabled={enabled} setEnabled={setEnabled} />
          )}
        </div>
      </div>
    </li>
  );
};
