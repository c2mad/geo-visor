import { GDowloand } from "components/ui/GDowloand";
import { GSpinner } from "components/ui/GSpinner";
import { GSwitch } from "components/ui/GSwitch";

export const ChoseLayerItem = ({
  title,
  enabled,
  setEnabled,
  isLoading,
  to,
}) => {
  return (
    <li className="rounded-lg bg-gray-50  px-3 py-2 shadow-sm transition-all hover:bg-gray-100 hover:shadow-md">
      <div className="flex items-center justify-between space-x-2">
        <div className="flex-1">
          <p className="font-normal text-slate-500">{title}</p>
        </div>
        <div className="flex h-6 w-10 items-center justify-center text-rose-500">
          {isLoading ? (
            <GSpinner />
          ) : (
            <div className="inline-flex items-center space-x-2">
              {" "}
              {/* Add space-x-2 class for margin */}
              <GSwitch enabled={enabled} setEnabled={setEnabled} />
              <GDowloand to={to}></GDowloand>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};
