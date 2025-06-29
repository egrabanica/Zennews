import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loading } from '@/components/ui/loading';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Zap, Clock, Star, Radio } from 'lucide-react';

// This would typically come from your CMS or API
const categories = {
  politics: {
    title: 'Politics',
    description: 'Latest political news and updates from around the world',
  },
  technology: {
    title: 'Technology',
    description: 'Breaking news from the world of technology and innovation',
  },
  business: {
    title: 'Business',
    description: 'Business news, market updates, and economic developments',
  },
  sports: {
    title: 'Sports',
    description: 'Sports coverage, results, and analysis',
  },
  entertainment: {
    title: 'Entertainment',
    description: 'Entertainment news, celebrity updates, and cultural trends',
  },
  science: {
    title: 'Science',
    description: 'Scientific discoveries, research, and breakthroughs',
  },
};

export function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({
    slug,
  }));
}

const articles = {
  mostRead: [
    {
      id: 1,
      title: 'Most Read Article 1',
      excerpt: 'This is a highly popular article that many readers are engaging with...',
      author: 'John Doe',
      date: '2024-03-21',
      imageUrl: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80',
      href: '/article/sample-1/',
      views: '125K',
    },
    {
      id: 2,
      title: 'Most Read Article 2',
      excerpt: 'Another widely read article showcasing important developments...',
      author: 'Jane Smith',
      date: '2024-03-20',
      imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80',
      href: '/article/sample-2/',
      views: '98K',
    },
  ],
  liveNews: [
    {
      id: 3,
      title: 'Breaking: Live Coverage of Major Event',
      excerpt: 'Live updates and real-time coverage of this developing story...',
      author: 'Sarah Johnson',
      date: '2024-03-21',
      imageUrl: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&q=80',
      href: '/article/sample-3/',
      lastUpdated: '2 minutes ago',
    },
  ],
  latest: [
    {
      id: 4,
      title: 'Latest Development in Ongoing Story',
      excerpt: 'The most recent updates and developments in this evolving situation...',
      author: 'Michael Chen',
      date: '2024-03-21',
      imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80',
      href: '/article/sample-4/',
      timeAgo: '5 minutes ago',
    },
  ],
  featured: [
    {
      id: 5,
      title: 'In-Depth Analysis of Current Trends',
      excerpt: 'A comprehensive look at the most significant developments...',
      author: 'Emily Wilson',
      date: '2024-03-21',
      imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80',
      href: '/article/sample-5/',
      featured: true,
    },
  ],
  trending: [
    {
      id: 6,
      title: 'Viral Story Capturing Public Attention',
      excerpt: 'This trending topic has captured widespread interest...',
      author: 'David Lee',
      date: '2024-03-21',
      imageUrl: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&q=80',
      href: '/article/sample-6/',
      trending: true,
    },
  ],
};

function ArticleCard({ article }: { article: any }) {
  return (
    <article className="group">
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
            <div className="flex items-center gap-2">
              {article.views && (
                <Badge variant="secondary">{article.views} views</Badge>
              )}
              {article.lastUpdated && (
                <Badge variant="destructive">Live</Badge>
              )}
              {article.trending && (
                <Badge variant="default">Trending</Badge>
              )}
              {article.featured && (
                <Badge variant="outline">Featured</Badge>
              )}
            </div>
            <h3 className="text-xl font-semibold leading-tight group-hover:text-primary">
              {article.title}
            </h3>
            <p className="text-muted-foreground line-clamp-3">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{article.author}</span>
              <time dateTime={article.date}>
                {article.lastUpdated || article.timeAgo || new Date(article.date).toLocaleDateString()}
              </time>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories[slug as keyof typeof categories];

  if (!category) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{category.title}</h1>
        <p className="text-lg text-muted-foreground">{category.description}</p>
      </div>

      <Suspense fallback={<Loading />}>
        <Tabs defaultValue="most-read" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-4">
            <TabsTrigger value="most-read" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Most Read
            </TabsTrigger>
            <TabsTrigger value="live" className="flex items-center gap-2">
              <Radio className="h-4 w-4" />
              Live News
            </TabsTrigger>
            <TabsTrigger value="latest" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Latest
            </TabsTrigger>
            <TabsTrigger value="featured" className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              Featured
            </TabsTrigger>
            <TabsTrigger value="trending" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Trending
            </TabsTrigger>
          </TabsList>

          <TabsContent value="most-read">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Most Read Articles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {articles.mostRead.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="live">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Radio className="h-5 w-5" />
                  Live Coverage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {articles.liveNews.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="latest">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Latest Updates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {articles.latest.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="featured">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Featured Stories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {articles.featured.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trending">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Trending Topics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {articles.trending.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Suspense>
    </div>
  );
}