import * as React from "react";

import { cn } from "@/lib/utils";

function DataTable({
  className,
  ...props
}: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="data-table-scroll"
      className="border-border bg-card/30 w-full overflow-x-auto rounded-xl border shadow-sm"
    >
      <table
        data-slot="data-table"
        className={cn(
          "w-full min-w-[36rem] border-collapse text-sm",
          "[&_tbody_tr]:border-border [&_tbody_tr]:border-b [&_tbody_tr:last-child]:border-b-0",
          "[&_thead_th]:text-muted-foreground [&_thead_th]:border-border [&_thead_th]:border-b [&_thead_th]:bg-muted/30 [&_thead_th]:px-3 [&_thead_th]:py-2.5 [&_thead_th]:text-left [&_thead_th]:font-mono [&_thead_th]:text-[10px] [&_thead_th]:tracking-widest [&_thead_th]:uppercase",
          "[&_tbody_td]:px-3 [&_tbody_td]:py-2.5",
          "[&_.num]:text-right [&_.num]:font-mono [&_.num]:tabular-nums",
          className
        )}
        {...props}
      />
    </div>
  );
}

export { DataTable };
