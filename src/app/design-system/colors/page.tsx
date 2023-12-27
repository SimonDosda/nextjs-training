import { COLORS } from '@/src/design-system/colors';

export default function Page() {
  const shades = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  return (
    <div>
      <h2>Colors</h2>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <div className="w-32">shade</div>
          {shades.map((shade) => (
            <div key={shade} className="w-16">
              {shade}
            </div>
          ))}
        </div>
        {COLORS.map((color) => (
          <div key={color} className="flex gap-2">
            <div className="w-32">{color}</div>
            {shades.map((shade) => (
              <div
                key={shade}
                className={`h-8 w-16 bg-${color}-${shade}`}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
