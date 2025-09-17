import heroImage from "@/assets/hero-news-image.jpg";
import ArticleCard from "./ArticleCard";

const HeroSection = () => {
  const sideArticles = [
    {
      title: "Global Markets React to New Economic Policies",
      summary: "Stock exchanges worldwide show mixed responses as governments implement sweeping economic reforms.",
      author: "Sarah Chen",
      publishTime: "2 hours ago",
      category: "BUSINESS"
    },
    {
      title: "Climate Summit Delivers Unprecedented Agreement",
      summary: "World leaders commit to ambitious carbon reduction targets in landmark environmental accord.",
      author: "Michael Rodriguez",
      publishTime: "4 hours ago",
      category: "ENVIRONMENT"
    },
    {
      title: "Tech Giants Face New Regulatory Challenges",
      summary: "Proposed legislation could reshape the digital landscape and corporate accountability.",
      author: "Emily Watson",
      publishTime: "6 hours ago",
      category: "TECHNOLOGY"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Story */}
        <div className="lg:col-span-2">
          <article className="space-y-4">
            <div className="text-sm font-semibold text-nyt-red uppercase tracking-wide">
              INTERNATIONAL
            </div>
            
            <h1 className="font-headline text-4xl lg:text-5xl font-bold text-headline leading-tight">
              Historic International Summit Reaches Breakthrough Agreement on Global Cooperation
            </h1>
            
            <p className="text-xl text-subheadline leading-relaxed">
              World leaders from 50 nations conclude three-day summit with unprecedented accords on climate action, economic cooperation, and diplomatic relations, marking a new era in international politics.
            </p>
            
            <div className="aspect-video w-full bg-muted rounded overflow-hidden">
              <img 
                src={heroImage} 
                alt="International summit meeting"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex items-center gap-4 text-sm text-byline pt-2">
              <span className="font-medium">By David Thompson and Maria Gonzalez</span>
              <span>•</span>
              <span>Published 1 hour ago</span>
            </div>
            
            <div className="prose prose-lg max-w-none text-body-text">
              <p>
                In a remarkable display of international unity, representatives from 50 nations have successfully concluded 
                what many are calling the most significant diplomatic gathering of the decade. The three-day summit, held 
                in Geneva, produced a comprehensive framework for addressing global challenges ranging from climate change 
                to economic inequality.
              </p>
              
              <p>
                The agreement, dubbed the "Geneva Accord," establishes binding commitments for carbon neutrality by 2040, 
                creates new mechanisms for international trade cooperation, and introduces innovative approaches to conflict 
                resolution. Secretary-General Elena Virtanen hailed the achievement as "a testament to what humanity can 
                accomplish when we work together toward common goals."
              </p>
            </div>
          </article>
        </div>

        {/* Sidebar Articles */}
        <aside className="space-y-6">
          <div className="border-b border-light pb-4 mb-6">
            <h2 className="font-headline text-xl font-semibold text-headline mb-4">
              More International News
            </h2>
          </div>
          
          <div className="space-y-6">
            {sideArticles.map((article, index) => (
              <ArticleCard
                key={index}
                {...article}
                isHorizontal={false}
              />
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default HeroSection;