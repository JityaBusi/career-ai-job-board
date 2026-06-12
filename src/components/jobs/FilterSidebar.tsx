type Props = {
  remoteOnly: boolean;
  setRemoteOnly: (value: boolean) => void;
};

export default function FilterSidebar({
  remoteOnly,
  setRemoteOnly,
}: Props) {
  return (
    <div className="border rounded-xl p-5">
      <h2 className="font-bold text-lg mb-4">
        Filters
      </h2>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={remoteOnly}
          onChange={(e) =>
            setRemoteOnly(e.target.checked)
          }
        />
        Remote Only
      </label>
    </div>
  );
}