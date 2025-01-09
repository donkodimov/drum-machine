interface SliderProps {
  value: number;
  onValueChange: (value: number[]) => void;
  disabled?: boolean;
}

export function Slider({ value, onValueChange, disabled = false }: SliderProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange([parseInt(e.target.value)]);
  };

  return (
    <div className="relative w-full">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        disabled={disabled}
        className={`
          w-full h-2 rounded-lg appearance-none cursor-pointer
          bg-gray-700
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:w-4
          [&::-webkit-slider-thumb]:h-4
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-blue-600
          [&::-webkit-slider-thumb]:cursor-pointer
          [&::-moz-range-thumb]:w-4
          [&::-moz-range-thumb]:h-4
          [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:bg-blue-600
          [&::-moz-range-thumb]:border-0
          [&::-moz-range-thumb]:cursor-pointer
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      />
    </div>
  );
} 