import * as React from "react";
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Info,
  X,
  type LucideIcon,
} from "lucide-react";

function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

export type AlertVariant = "info" | "success" | "warning" | "danger";

interface VariantConfig {
  Icon: LucideIcon;
  color: string;
  tint: string;
  border: string;
  role: "alert" | "status";
}

// Role mapping: warning + danger use role="alert" (assertive — interrupts the
// screen reader). info + success use role="status" (polite — queued). This
// matches WAI-ARIA's intent where "alert" is reserved for time-sensitive,
// must-acknowledge messages.
const variantConfig: Record<AlertVariant, VariantConfig> = {
  info: {
    Icon: Info,
    color: "text-vex-accent",
    tint: "bg-vex-accent/10",
    border: "border-vex-accent/30",
    role: "status",
  },
  success: {
    Icon: CheckCircle2,
    color: "text-vex-success-fg",
    tint: "bg-vex-success-fg/10",
    border: "border-vex-success-fg/30",
    role: "status",
  },
  warning: {
    Icon: AlertTriangle,
    color: "text-vex-warning-fg",
    tint: "bg-vex-warning-fg/10",
    border: "border-vex-warning-fg/30",
    role: "alert",
  },
  danger: {
    Icon: AlertCircle,
    color: "text-vex-danger-fg",
    tint: "bg-vex-danger-fg/10",
    border: "border-vex-danger-fg/30",
    role: "alert",
  },
};

export interface AlertProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title" | "role"> {
  variant?: AlertVariant;
  title?: React.ReactNode;
  onClose?: () => void;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    { variant = "info", title, onClose, className, children, ...rest },
    ref
  ) => {
    const conf = variantConfig[variant];
    const Icon = conf.Icon;
    return (
      <div
        ref={ref}
        role={conf.role}
        className={cn(
          "flex w-full gap-3 rounded-lg border p-4",
          conf.border,
          conf.tint,
          className
        )}
        {...rest}
      >
        <Icon
          aria-hidden="true"
          className={cn("mt-0.5 size-4 shrink-0", conf.color)}
        />
        <div className="min-w-0 flex-1">
          {title && (
            <div className={cn("mb-0.5 text-sm font-semibold", conf.color)}>
              {title}
            </div>
          )}
          <div className="text-[13px] leading-relaxed text-vex-text">
            {children}
          </div>
        </div>
        {onClose && (
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className={cn(
              "shrink-0 self-start rounded opacity-60 transition-opacity hover:opacity-100",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vex-accent",
              conf.color
            )}
          >
            <X aria-hidden="true" className="size-3.5" />
          </button>
        )}
      </div>
    );
  }
);
Alert.displayName = "Alert";
