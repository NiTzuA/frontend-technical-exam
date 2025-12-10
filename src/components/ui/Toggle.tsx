interface ToggleProps {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Toggle({ checked, onChange }: ToggleProps) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only peer"
      />

      <div className="w-11 h-6 bg-accent rounded-full transition-colors duration-300 peer-checked:bg-primary"></div>
      
      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
    </label>
  );
}
