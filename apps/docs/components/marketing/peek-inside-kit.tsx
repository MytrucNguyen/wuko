import { ArrowRight, Mail, Search, Trash2, Zap } from "lucide-react";
import Link from "next/link";

import { Alert } from "@/registry/default/ui/alert";
import { Avatar } from "@/registry/default/ui/avatar";
import { Badge } from "@/registry/default/ui/badge";
import { Button } from "@/registry/default/ui/button";
import { Card } from "@/registry/default/ui/card";
import { Input } from "@/registry/default/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs";

const PANEL_CLASSES =
  "flex min-h-[260px] flex-wrap items-center justify-center gap-3 rounded-lg border border-wuko-border bg-wuko-card/40 p-6 sm:p-10";

export function PeekInsideKit() {
  return (
    <section className="mx-auto max-w-6xl px-8 pb-24">
      <div className="mb-5 flex items-end justify-between">
        <div>
          <div className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-wuko-accent">
            Components
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-wuko-heading lg:text-3xl">
            A peek inside the kit.
          </h2>
        </div>
        <Link
          href="/docs/components"
          className="wk-ring hidden items-center gap-1.5 rounded text-sm font-medium text-wuko-accent transition-colors hover:underline underline-offset-4 sm:inline-flex"
        >
          Browse all
          <ArrowRight size={14} aria-hidden />
        </Link>
      </div>

      <Tabs defaultValue="button">
        <TabsList>
          <TabsTrigger value="button">Button</TabsTrigger>
          <TabsTrigger value="input">Input</TabsTrigger>
          <TabsTrigger value="alert">Alert</TabsTrigger>
          <TabsTrigger value="card">Card</TabsTrigger>
        </TabsList>

        <TabsContent value="button">
          <div className={PANEL_CLASSES}>
            <Button variant="primary">
              <Zap className="size-4" />
              Deploy
            </Button>
            <Button variant="secondary">Cancel</Button>
            <Button variant="outline">Preview</Button>
            <Button variant="ghost">Skip</Button>
            <Button variant="danger">
              <Trash2 className="size-4" />
              Delete
            </Button>
            <Button variant="primary" loading>
              Saving
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="input">
          <div className={PANEL_CLASSES}>
            <div className="w-full max-w-sm space-y-4">
              <Input
                label="Email"
                placeholder="you@vexkit.dev"
                leftIcon={<Mail className="size-4" />}
              />
              <Input
                label="Search"
                placeholder="Quick find..."
                leftIcon={<Search className="size-4" />}
                hint="Press ⌘K to focus."
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="alert">
          <div className={PANEL_CLASSES}>
            <div className="w-full max-w-md space-y-3">
              <Alert variant="success" title="Deployment ready">
                Your build finished in 23s.
              </Alert>
              <Alert variant="warning" title="Approaching quota">
                8.2k of 10k tokens used.
              </Alert>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="card">
          <div className={PANEL_CLASSES}>
            <Card className="w-full max-w-sm">
              <div className="mb-3 flex items-center gap-3">
                <Avatar fallback="V" size="md" status="online" />
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold text-wuko-heading">
                    Vex Kitsune
                  </div>
                  <div className="text-[12px] text-wuko-text-muted">
                    Component librarian · 9 tails
                  </div>
                </div>
                <Badge variant="teal">Pro</Badge>
              </div>
              <p className="text-[13px] leading-relaxed text-wuko-text-muted">
                Curates a library of small, sharp tools so your team can ship
                interfaces with intention.
              </p>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
