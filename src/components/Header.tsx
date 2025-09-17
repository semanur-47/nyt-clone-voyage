import { Search, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const sections = [
    "World", "U.S.", "Politics", "N.Y.", "Business", "Opinion", "Tech", "Science", "Health", "Sports", "Arts", "Books", "Style", "Food", "Travel"
  ];

  return (
    <header className="border-b border-light">
      {/* Breaking News Ticker */}
      <div className="breaking-news-ticker text-white px-4 py-1">
        <div className="flex items-center gap-4">
          <span className="font-semibold text-sm">BREAKING</span>
          <span className="text-sm">International Summit Reaches Historic Climate Agreement</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2 border-b border-light">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-sm">
              <Menu className="h-4 w-4 mr-2" />
              SECTIONS
            </Button>
            <Button variant="ghost" size="sm" className="text-sm">
              <Search className="h-4 w-4 mr-2" />
              SEARCH
            </Button>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-sm">
              SUBSCRIBE
            </Button>
            <Button variant="ghost" size="sm" className="text-sm">
              LOG IN
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Logo and Date */}
        <div className="py-4 text-center border-b border-light">
          <div className="flex items-center justify-between">
            <div className="text-sm text-caption">
              Tuesday, September 17, 2025
            </div>
            <h1 className="font-headline text-4xl font-bold text-headline">
              The New York Times
            </h1>
            <div className="text-sm text-caption">
              Today's Paper
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="py-3">
          <div className="flex items-center justify-center gap-8 overflow-x-auto">
            {sections.map((section) => (
              <a
                key={section}
                href="#"
                className="text-sm font-medium text-headline hover:text-nyt-red whitespace-nowrap transition-colors"
              >
                {section}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;