const Footer = () => {
  const sections = {
    "NEWS": ["Home Page", "World", "Coronavirus", "U.S.", "Politics", "New York", "Business", "Tech", "Science"],
    "OPINION": ["Today's Opinion", "Op-Ed Columnists", "Editorials", "Op-Ed Contributors", "Letters", "Sunday Review"],
    "ARTS": ["Today's Arts", "Art & Design", "Books", "Dance", "Movies", "Music", "Pop Culture", "Television"],
    "LIVING": ["At Home", "Automobiles", "Games", "Education", "Food", "Health", "Jobs", "Love", "Magazine"]
  };

  return (
    <footer className="border-t border-light bg-background mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Main Logo */}
        <div className="text-center mb-8 pb-8 border-b border-light">
          <h2 className="font-headline text-2xl font-bold text-headline">
            The New York Times
          </h2>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {Object.entries(sections).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-headline text-sm mb-4 uppercase tracking-wide">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm text-body-text hover:text-nyt-red transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-light">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-caption">
              <a href="#" className="hover:text-nyt-red transition-colors">© 2025 The New York Times Company</a>
              <a href="#" className="hover:text-nyt-red transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-nyt-red transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-nyt-red transition-colors">Contact Us</a>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="text-sm text-caption hover:text-nyt-red transition-colors">
                Accessibility
              </button>
              <button className="text-sm text-caption hover:text-nyt-red transition-colors">
                Work with us
              </button>
              <button className="text-sm text-caption hover:text-nyt-red transition-colors">
                Advertise
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;