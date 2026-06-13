import { cn } from "@/lib/utils";

import Image from "next/image";
import {  RecentPostsProps } from "@/lib/types";
import { defaultRecentPosts } from "@/lib/data";

// Use centralized data from data.ts
const DEFAULT_ITEMS = defaultRecentPosts;

export function RecentPosts({
  items = DEFAULT_ITEMS,
  className,
}: RecentPostsProps) {
  return (
    <aside
      className={cn(
        "bg-muted rounded-md p-6 md:p-8  h-max ",
        "text-foreground",
        className
      )}
      aria-label="Recent posts"
    >
      <h3 className="text-xl font-semibold">Recent Post</h3>
      <div className="mt-3 h-px w-full bg-border" />
      <ul className="mt-6 space-y-6">
        {items.map((item) => (
          <li key={item.id} className="flex items-start gap-4">
            <Image
              src={item.thumbnailSrc}
              alt={item.title}
              width={64}
              height={64}
              className="size-16 rounded object-cover"
            />
            <div className="min-w-0">
              <p className="font-semibold leading-snug truncate">
                {item.title}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{item.meta}</p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
