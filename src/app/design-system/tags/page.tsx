import { Button } from '@/src/design-system/buttons';
import { COLORS } from '@/src/design-system/colors';
import { Tag } from '@/src/design-system/tags';

export default function Page() {
  return (
    <div>
      <h2>Tags</h2>
      <div className="flex w-32 flex-col gap-4">
        {COLORS.map((color) => (
          <Tag key={color} color={color} text={`Tag ${color}`} />
        ))}
      </div>
    </div>
  );
}
