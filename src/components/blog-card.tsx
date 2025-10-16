
"use client";

import Link from "next/link";
import Image from "next/image";
import { type BlogPost } from "@/lib/blog-data";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="group overflow-hidden rounded-lg shadow-none hover:shadow-lg transition-shadow duration-300 border bg-card">
        <Link href={`/blog/${post.slug}`}>
            <CardContent className="p-0">
                <div className="relative aspect-video">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint="blog post illustration"
                />
                </div>
                <div className="p-6">
                <p className="text-sm text-muted-foreground">{post.date}</p>
                <h3 className="font-bold text-xl leading-tight mt-2 truncate group-hover:text-primary">
                    {post.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm">{post.excerpt}</p>
                <div className="flex items-center text-primary font-semibold mt-4">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
                </div>
            </CardContent>
        </Link>
    </Card>
  );
}

    