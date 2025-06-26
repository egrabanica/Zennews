import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp } from 'lucide-react';

const trendingArticles = [
  {
    id: 1,
    title: 'Major Climate Agreement Reached at Global Summit',
    category: 'Politics',
    views: '125K',
    href: '/article/sample-1/',
  },
  {
    id: 2,
    title: 'Tech Giant Unveils Revolutionary AI Platform',
    category: 'Technology',
    views: '98K',
    href: '/article/sample-2/',
  },
  {
    id: 3,
    title: 'Global Markets React to Economic Policy Shift',
    category: 'Business',
    views: '82K',
    href: '/article/sample-1/',
  },
];

export function TrendingNews() {
  return (
    <section aria-labelledby="trending-heading">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Trending Now
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trendingArticles.map((article) => (
              <Link key={article.id} href={article.href}>
                <div className="group relative rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                  <Badge variant="secondary" className="absolute right-2 top-2">
                    {article.views} views
                  </Badge>
                  <div className="space-y-2">
                    <Badge>{article.category}</Badge>
                    <h3 className="font-semibold leading-tight group-hover:text-primary">
                      {article.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}