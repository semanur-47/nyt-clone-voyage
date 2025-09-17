import { Search, Menu, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationSections = {
    "World": {
      categories: ["Africa", "Americas", "Asia", "Australia", "Canada", "Europe", "Middle East"],
      features: ["Top Stories", "Middle East Crisis", "Russia-Ukraine War", "China", "International Relations", "The Global Profile"],
      newsletters: ["Morning Briefing: Europe", "The Interpreter", "Your Places: Global Update", "Canada Letter"]
    },
    "U.S.": {
      categories: ["Politics", "New York", "California", "Education", "Mental Health", "Obituaries"],
      features: ["Election 2024", "Congress", "Supreme Court", "Climate", "Immigration"],
      newsletters: ["Morning Briefing", "On Politics", "California Today"]
    },
    "Politics": {
      categories: ["Election 2024", "White House", "Congress", "Supreme Court", "State Politics"],
      features: ["Campaign Finance", "Polling", "Political Analysis", "Fact Check"],
      newsletters: ["On Politics", "First Draft", "The Run-Up"]
    },
    "Business": {
      categories: ["Economy", "Markets", "Technology", "Media", "Personal Finance", "Your Money"],
      features: ["DealBook", "Energy & Environment", "Small Business", "Workplace"],
      newsletters: ["DealBook", "On Tech", "Your Money"]
    },
    "Opinion": {
      categories: ["Today's Opinion", "Op-Ed Columnists", "Editorials", "Op-Ed Contributors", "Letters", "Sunday Review"],
      features: ["Guest Essays", "Opinion Video", "Debate"],
      newsletters: ["Opinion Today", "Jamelle Bouie", "Ezra Klein"]
    },
    "Tech": {
      categories: ["Artificial Intelligence", "Social Media", "Cybersecurity", "Start-ups", "Gadgets"],
      features: ["Tech Fix", "Privacy Project", "On Tech"],
      newsletters: ["On Tech", "Privacy Project"]
    },
    "Science": {
      categories: ["Space & Cosmos", "Climate", "Environment", "Health", "Medicine", "Psychology"],
      features: ["Trilobites", "ScienceTimes", "Climate Forward"],
      newsletters: ["Science Times", "Climate Forward"]
    },
    "Health": {
      categories: ["Mental Health", "Nutrition", "Fitness", "Medicine", "Public Health", "Well"],
      features: ["Personal Health", "The New Old Age", "Well"],
      newsletters: ["Well", "The New Old Age"]
    },
    "Sports": {
      categories: ["Baseball", "Basketball", "Football", "Soccer", "Tennis", "Olympics"],
      features: ["Sports of The Times", "On Baseball", "The Athletic"],
      newsletters: ["Sports Newsletter", "The Athletic"]
    },
    "Arts": {
      categories: ["Art & Design", "Books", "Dance", "Movies", "Music", "Pop Culture", "Television", "Theater"],
      features: ["Critics' Picks", "Art Review", "Book Review"],
      newsletters: ["Art & Design", "Book Review"]
    }
  };

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
        <nav className="py-3 relative">
          <div className="flex items-center justify-center gap-8 overflow-x-auto">
            {Object.entries(navigationSections).map(([section, content]) => (
              <div
                key={section}
                className="relative"
                onMouseEnter={() => setActiveDropdown(section)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href="#"
                  className="text-sm font-medium text-headline hover:text-nyt-red whitespace-nowrap transition-colors flex items-center gap-1"
                >
                  {section}
                  <ChevronDown className="h-3 w-3" />
                </a>

                {/* Dropdown Menu */}
                {activeDropdown === section && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-light shadow-lg rounded-sm z-50">
                    <div className="p-6">
                      {/* Categories */}
                      <div className="mb-6">
                        <h3 className="text-xs font-semibold text-nyt-red uppercase tracking-wide mb-3">
                          Categories
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {content.categories.map((category) => (
                            <a
                              key={category}
                              href="#"
                              className="text-sm text-body-text hover:text-nyt-red transition-colors py-1"
                            >
                              {category}
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h3 className="text-xs font-semibold text-nyt-red uppercase tracking-wide mb-3">
                          Features
                        </h3>
                        <div className="space-y-1">
                          {content.features.map((feature) => (
                            <a
                              key={feature}
                              href="#"
                              className="text-sm text-body-text hover:text-nyt-red transition-colors block py-1"
                            >
                              {feature}
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Newsletters */}
                      <div>
                        <h3 className="text-xs font-semibold text-nyt-red uppercase tracking-wide mb-3">
                          Newsletters
                        </h3>
                        <div className="space-y-2">
                          {content.newsletters.map((newsletter) => (
                            <div key={newsletter} className="flex items-start gap-2">
                              <div className="w-1 h-1 bg-nyt-red rounded-full mt-2 flex-shrink-0"></div>
                              <a
                                href="#"
                                className="text-sm text-body-text hover:text-nyt-red transition-colors"
                              >
                                {newsletter}
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Additional sections without dropdowns */}
            <a href="#" className="text-sm font-medium text-headline hover:text-nyt-red whitespace-nowrap transition-colors">
              Books
            </a>
            <a href="#" className="text-sm font-medium text-headline hover:text-nyt-red whitespace-nowrap transition-colors">
              Style
            </a>
            <a href="#" className="text-sm font-medium text-headline hover:text-nyt-red whitespace-nowrap transition-colors">
              Food
            </a>
            <a href="#" className="text-sm font-medium text-headline hover:text-nyt-red whitespace-nowrap transition-colors">
              Travel
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;