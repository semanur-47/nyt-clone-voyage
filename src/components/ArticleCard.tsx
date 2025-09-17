import { Clock } from "lucide-react";

interface ArticleCardProps {
  title: string;
  summary: string;
  author: string;
  publishTime: string;
  imageUrl?: string;
  category?: string;
  isLarge?: boolean;
  isHorizontal?: boolean;
}

const ArticleCard = ({ 
  title, 
  summary, 
  author, 
  publishTime, 
  imageUrl, 
  category,
  isLarge = false,
  isHorizontal = false 
}: ArticleCardProps) => {
  return (
    <article className={`article-hover cursor-pointer p-4 rounded-sm ${
      isHorizontal ? 'flex gap-4' : 'space-y-3'
    }`}>
      {/* Category */}
      {category && (
        <div className="text-xs font-semibold text-nyt-red uppercase tracking-wide">
          {category}
        </div>
      )}

      {/* Image */}
      {imageUrl && (
        <div className={`${
          isHorizontal ? 'w-32 flex-shrink-0' : 'w-full'
        } ${isLarge ? 'h-64' : 'h-40'} bg-muted rounded overflow-hidden`}>
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className={isHorizontal ? 'flex-1' : ''}>
        {/* Title */}
        <h3 className={`font-headline font-semibold text-headline leading-tight mb-2 ${
          isLarge ? 'text-2xl' : 'text-lg'
        }`}>
          {title}
        </h3>

        {/* Summary */}
        <p className={`text-body-text leading-relaxed mb-3 ${
          isLarge ? 'text-base' : 'text-sm'
        }`}>
          {summary}
        </p>

        {/* Meta info */}
        <div className="flex items-center gap-3 text-xs text-byline">
          <span className="font-medium">By {author}</span>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{publishTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;