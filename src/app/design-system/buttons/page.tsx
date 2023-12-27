import { Button } from '@/src/design-system/buttons';
import { COLORS } from '@/src/design-system/colors';

export default function Page() {
  return (
    <div>
      <h2>Buttons</h2>
      <div className="flex w-32 flex-col  gap-4">
        {COLORS.map((color) => (
          <Button key={color} color={color}>
            {color}
          </Button>
        ))}
      </div>
    </div>
  );
}
