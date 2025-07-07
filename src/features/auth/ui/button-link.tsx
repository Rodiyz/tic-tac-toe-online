import React from "react";
import Link from "next/link";

export function ButtonLink({ text, linkText, url}: {
  text: string,
  linkText: string,
  url: string,
}) {
  return (
    <div className="text-sm text-center text-muted-foreground">
      {text}{" "}
      <Link href={url} className="font-medium text-primary hover:underline">
        {linkText}
      </Link>
    </div>
  );
}


