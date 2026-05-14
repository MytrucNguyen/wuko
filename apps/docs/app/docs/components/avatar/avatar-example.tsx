import { Avatar } from "@/registry/default/ui/avatar";

export function AvatarSizesExample() {
  return (
    <div className="flex items-center gap-4">
      <Avatar fallback="VK" size="sm" />
      <Avatar fallback="VK" size="md" />
      <Avatar
        src="/brand/wuko.png"
        alt="Vex, the Wuko mascot"
        fallback="VK"
        size="lg"
      />
    </div>
  );
}

export function AvatarStatusExample() {
  return (
    <div className="flex items-center gap-4">
      <Avatar fallback="V" status="online" />
      <Avatar fallback="A" status="away" />
      <Avatar fallback="O" status="offline" />
    </div>
  );
}
