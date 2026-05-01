import { Avatar } from "@/registry/default/ui/vex-avatar";

export function AvatarSizesExample() {
  return (
    <div className="flex items-center gap-4">
      <Avatar fallback="VK" size="sm" />
      <Avatar fallback="VK" size="md" />
      <Avatar
        src="/vex.png"
        alt="Vex, the VexKit mascot"
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
