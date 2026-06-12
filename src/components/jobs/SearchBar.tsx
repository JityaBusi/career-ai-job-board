type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <input
      className="w-full border rounded-lg p-3"
      placeholder="Search jobs, companies, skills..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}