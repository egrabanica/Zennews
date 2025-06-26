// /*
//  *   Copyright (c) 2025 
//  *   All rights reserved.
//  */
// import { notFound } from 'next/navigation';
// import Image from 'next/image';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { Card } from '@/components/ui/card';
// import { Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
// import { BannerAd } from '@/components/ads/banner-ad';

// // This would typically come from your CMS or API
// const articles = {
//   'sample-1': {
//     title: 'Breakthrough in Renewable Energy Storage Technology',
//     content: `
//       Scientists have announced a major advancement in battery technology that could revolutionize renewable energy storage. The new technology, developed by a team of international researchers, promises to make renewable energy more reliable and cost-effective than ever before.

//       The breakthrough involves a novel approach to energy storage that uses abundant, environmentally friendly materials. This development could help solve one of the biggest challenges in renewable energy: storing power for use when the sun isn't shining or the wind isn't blowing.

//       Key advantages of the new technology include:
//       - Longer battery life
//       - Lower production costs
//       - Improved energy density
//       - Reduced environmental impact

//       Industry experts believe this innovation could accelerate the global transition to renewable energy sources.
//     `,
//     author: 'John Doe',
//     date: '2024-03-21',
//     category: 'Technology',
//     imageUrl: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80',
//     readTime: '5 min read',
//   },
//   'sample-2': {
//     title: 'Global Economic Forum Addresses AI Impact',
//     content: `
//       World leaders and economic experts gathered this week to discuss the far-reaching implications of artificial intelligence on the global economy. The forum, which brought together policymakers, tech industry leaders, and academics, focused on both the opportunities and challenges presented by AI technology.

//       The discussions centered around several key themes:
//       - Job market transformation
//       - Economic inequality
//       - Regulatory frameworks
//       - Ethical considerations

//       Participants emphasized the need for international cooperation in managing AI's impact while ensuring its benefits are distributed equitably across society.
//     `,
//     author: 'Jane Smith',
//     date: '2024-03-20',
//     category: 'Business',
//     imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80',
//     readTime: '4 min read',
//   },
// };

// export function generateStaticParams() {
//   return Object.keys(articles).map((slug) => ({
//     slug,
//   }));
// }

// export default function ArticlePage({ params }: { params: { slug: string } }) {
//   const article = articles[params.slug as keyof typeof articles];

//   if (!article) {
//     notFound();
//   }

//   const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

//   return (
//     <article className="container mx-auto px-4 py-8">
//       <div className="max-w-4xl mx-auto space-y-8">
//         <div className="space-y-4">
//           <Badge>{article.category}</Badge>
//           <h1 className="text-4xl font-bold leading-tight">{article.title}</h1>
          
//           <div className="flex items-center gap-4 text-sm text-muted-foreground">
//             <span>{article.author}</span>
//             <time dateTime={article.date}>
//               {new Date(article.date).toLocaleDateString()}
//             </time>
//             <span>{article.readTime}</span>
//           </div>
//         </div>

//         <div className="relative aspect-video overflow-hidden rounded-lg">
//           <Image
//             src={article.imageUrl}
//             alt={article.title}
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>

//         <BannerAd />

//         <div className="prose prose-lg dark:prose-invert max-w-none">
//           {article.content.split('\n').map((paragraph, index) => (
//             <p key={index}>{paragraph.trim()}</p>
//           ))}
//         </div>

//         <Card className="p-4">
//           <div className="space-y-4">
//             <h3 className="font-semibold">Share this article</h3>
//             <div className="flex gap-2">
//               <Button
//                 variant="outline"
//                 size="icon"
//                 asChild
//               >
//                 <a
//                   href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Share on Facebook"
//                 >
//                   <Facebook className="h-4 w-4" />
//                 </a>
//               </Button>
//               <Button
//                 variant="outline"
//                 size="icon"
//                 asChild
//               >
//                 <a
//                   href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(article.title)}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Share on Twitter"
//                 >
//                   <Twitter className="h-4 w-4" />
//                 </a>
//               </Button>
//               <Button
//                 variant="outline"
//                 size="icon"
//                 asChild
//               >
//                 <a
//                   href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Share on LinkedIn"
//                 >
//                   <Linkedin className="h-4 w-4" />
//                 </a>
//               </Button>
//               <Button
//                 variant="outline"
//                 size="icon"
//                 onClick={() => {
//                   navigator.clipboard.writeText(shareUrl);
//                 }}
//                 aria-label="Copy link"
//               >
//                 <LinkIcon className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>
//         </Card>
//       </div>
//     </article>
//   );
// }

import { notFound } from 'next/navigation';
import { categories } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { BannerAd } from '@/components/ads/banner-ad';
import Image from 'next/image';

export async function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({
    slug,
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const category = categories[slug as keyof typeof categories];

  if (!category) {
    notFound();
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <Badge variant="secondary" className="text-lg">
            {slug}
          </Badge>
          <h1 className="text-4xl font-bold leading-tight">{category.title}</h1>
          <p className="text-muted-foreground text-sm">{category.description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {category.articles.map((article) => (
            <div key={article.slug} className="border rounded-lg overflow-hidden">
              <Image
                src={article.imageUrl}
                alt={article.title}
                width={800}
                height={400}
                className="object-cover w-full h-48"
              />
              <div className="p-4 space-y-2">
                <h2 className="text-xl font-semibold">{article.title}</h2>
                <p className="text-muted-foreground text-sm">
                  {article.date} • {article.readTime}
                </p>
              </div>
            </div>
          ))}
        </div>

        <BannerAd />
      </div>
    </section>
  );
}
