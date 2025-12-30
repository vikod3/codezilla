import { LucideIcon } from "lucide-react";

interface SectionBadgeProps {
  icon: LucideIcon;
  label: string;
}

const SectionBadge = ({ icon: Icon, label }: SectionBadgeProps) => {
  return (
    <div className="inline-flex items-center gap-3 px-4 py-2 bg-black/10 rounded-2xl border border-white/10 backdrop-blur-sm">
      <Icon className="w-5 h-5 text-muted-foreground" />
      <span className="text-muted-foreground text-sm font-normal leading-6">
        {label}
      </span>
    </div>
  );
};

export { SectionBadge };
