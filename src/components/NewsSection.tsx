import ArticleCard from "./ArticleCard";

interface NewsSectionProps {
  title: string;
  articles: Array<{
    title: string;
    summary: string;
    author: string;
    publishTime: string;
    imageUrl?: string;
    category?: string;
  }>;
}

const NewsSection = ({ title, articles }: NewsSectionProps) => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="border-b border-light pb-4 mb-8">
        <h2 className="font-headline text-2xl font-semibold text-headline">
          {title}
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            {...article}
          />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;