import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';

const latestArticles = [
  {
    id: 1,
    title: 'Breakthrough in Renewable Energy Storage Technology',
    excerpt: 'Scientists announce a major advancement in battery technology that could revolutionize renewable energy storage...',
    category: 'Technology',
    author: 'Sarah Johnson',
    date: '2024-03-20',
    imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80',
    href: '/article/sample-1/',
  },
  {
    id: 2,
    title: 'Global Economic Forum Addresses AI Impact',
    excerpt: 'World leaders gather to discuss the implications of artificial intelligence on the global economy...',
    category: 'Business',
    author: 'Michael Chen',
    date: '2024-03-19',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80',
    href: '/article/sample-2/',
  },
];

export function LatestNews() {
  return (
    <section aria-labelledby="latest-heading">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Latest News
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {latestArticles.map((article) => (
              <article key={article.id} className="group">
                <Link href={article.href}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src={article.imageUrl}
                        alt=""
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-3">
                      <Badge>{article.category}</Badge>
                      <h3 className="text-xl font-semibold leading-tight group-hover:text-primary">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{article.author}</span>
                        <time dateTime={article.date}>
                          {new Date(article.date).toLocaleDateString()}
                        </time>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}