import { CodeBlock } from "@/components/docs/code-block";
import { getRegistryItemUrl } from "@/lib/registry/base-url";
import { getRegistrySource } from "@/lib/registry/build-item";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs";

export interface InstallationTabsProps {
  name: string;
}

export async function InstallationTabs({ name }: InstallationTabsProps) {
  const namespacedCommand = `npx shadcn@latest add @wuko/${name}`;
  const urlCommand = `npx shadcn@latest add ${getRegistryItemUrl(name)}`;
  const sourceContent = await getRegistrySource(name);

  return (
    <Tabs defaultValue="command" className="mb-3">
      <TabsList>
        <TabsTrigger value="command">Command</TabsTrigger>
        <TabsTrigger value="url">URL</TabsTrigger>
        <TabsTrigger value="manual">Manual</TabsTrigger>
      </TabsList>
      <TabsContent value="command">
        <CodeBlock filename="terminal" lang="bash" code={namespacedCommand} />
      </TabsContent>
      <TabsContent value="url">
        <CodeBlock filename="terminal" lang="bash" code={urlCommand} />
      </TabsContent>
      <TabsContent value="manual">
        <CodeBlock
          filename={`components/ui/${name}.tsx`}
          lang="tsx"
          code={sourceContent}
        />
      </TabsContent>
    </Tabs>
  );
}
