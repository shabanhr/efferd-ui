import { CreateWorkspaceForm } from "./create-workspace-form";

export default function Page() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center p-4">
      {/* Subtle dotted grid */}
      <div
        aria-hidden="true"
        className="-z-1 pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.1) 0.8px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />
      <CreateWorkspaceForm />
    </div>
  );
}
