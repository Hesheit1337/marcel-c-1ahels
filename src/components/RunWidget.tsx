import { useState } from "react";
import { Button } from "@/components/ui/button";

interface RunWidgetProps {
  code: string;
  language?: string;
}

export const RunWidget = ({ code, language = "c" }: RunWidgetProps) => {
  const [output, setOutput] = useState<string>("");
  const [running, setRunning] = useState(false);
  const [stdin, setStdin] = useState("");

  const runOnWandbox = async () => {
    setRunning(true);
    setOutput("");

    try {
      const payload = {
        code,
        // choose a C compiler; wandbox exposes several compilers, adjust if needed
        compiler: "gcc-head",
        options: "warning,gnu11",
        stdin,
      } as any;

      const res = await fetch("https://wandbox.org/api/compile.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        setOutput(`Fehler beim Erreichen der Compile-API: ${res.status} ${res.statusText}`);
        setRunning(false);
        return;
      }

      const data = await res.json();
      // wandbox returns program_output, compiler_message, status
      const parts: string[] = [];
      if (data.program_output) parts.push("--- Programm-Ausgabe ---\n" + data.program_output);
      if (data.compiler_message) parts.push("--- Compiler / Fehler ---\n" + data.compiler_message);
      if (data.status !== undefined) parts.push(`Exit-Status: ${data.status}`);

      setOutput(parts.join("\n\n"));
    } catch (err: any) {
      setOutput("Unerwarteter Fehler beim Ausführen: " + String(err));
    } finally {
      setRunning(false);
    }
  };

  return (
    <div className="mt-4">
      <div className="flex gap-2 items-start">
        <Button size="sm" variant="outline" onClick={runOnWandbox} disabled={running}>
          {running ? "Running..." : "Run"}
        </Button>
        <div className="flex-1">
          <textarea
            value={stdin}
            onChange={(e) => setStdin(e.target.value)}
            placeholder="Optional: input (stdin)"
            className="w-full p-2 rounded border bg-background text-foreground text-sm"
          />
        </div>
      </div>

      <div className="mt-3">
        <div className="text-sm text-muted-foreground mb-2">Hinweis: Ausführung erfolgt über Wandbox API (extern).</div>
        <pre className="whitespace-pre-wrap bg-code-bg p-3 rounded text-sm" aria-live="polite">
          {output || "(keine Ausgabe)"}
        </pre>
      </div>
    </div>
  );
};
