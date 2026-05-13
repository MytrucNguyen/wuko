"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Input } from "@/registry/default/ui/input";

export function PasswordExample() {
  const [show, setShow] = useState(false);
  return (
    <Input
      label="Password"
      type={show ? "text" : "password"}
      defaultValue="kitsune-9-tails"
      rightIcon={
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="hover:text-wuko-heading"
          aria-label={show ? "Hide password" : "Show password"}
        >
          {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </button>
      }
    />
  );
}
