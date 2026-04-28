import { OnThisPage } from "@/components/shell/on-this-page";
import { Sidebar } from "@/components/shell/sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="min-w-0 flex-1">
        <div className="mx-auto flex max-w-6xl gap-12 px-6 py-10 lg:px-12">
          <article className="min-w-0 max-w-3xl flex-1">{children}</article>
          <aside className="hidden w-52 shrink-0 xl:block">
            <div className="sticky top-20">
              <OnThisPage />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
