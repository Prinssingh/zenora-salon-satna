import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { defaultComments } from "@/lib/data";
type Comment = {
  id: string;
  author: string;
  date: string;
  content: string;
  avatarSrc: string | StaticImageData ;
};

interface CommentsListProps {
  comments?: Comment[];
  className?: string;
}

// Use centralized data from data.ts

export function CommentsList({
  comments = defaultComments,
  className,
}: CommentsListProps) {
  return (
    <section className={cn(" pt-6 md:pt-8  ", className)}>
      <h3 className="text-lg md:text-xl font-semibold mb-6 lg:px-0 px-4">
        05 Comments
      </h3>

      <ul className="space-y-8 lg:px-0 px-4">
        {comments.map((c) => (
          <li
            key={c.id}
            className="flex flex-col lg:flex-row items-start gap-4 md:gap-6 "
          >
            <Image
              src={c.avatarSrc}
              height={50}
              width={50}
              alt={`${c.author} avatar`}
              className="h-14 w-14 md:h-16 md:w-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <p className="text-muted-foreground leading-relaxed">
                {c.content}
              </p>

              <div className="mt-3 flex items-center gap-4">
                <span className="font-semibold">{c.author}</span>
                <span className="text-muted-foreground">{c.date}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
