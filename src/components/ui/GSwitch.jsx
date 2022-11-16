import { Switch } from "@headlessui/react";

export const GSwitch = ({ enabled, setEnabled }) => {
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-emerald-500" : "bg-gray-300"
      } relative inline-flex h-5 w-10 items-center rounded-full`}
    >
      {/* <span className="sr-only">Enable notifications</span> */}
      <span
        className={`${
          enabled ? "translate-x-5" : "translate-x-1"
        } inline-block h-3.5 w-3.5 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
};
