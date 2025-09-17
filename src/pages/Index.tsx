import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/NewsSection";
import businessImage from "@/assets/business-markets.jpg";
import environmentImage from "@/assets/environment-climate.jpg";
import technologyImage from "@/assets/technology-data.jpg";

const Index = () => {
  const worldNews = [
    {
      title: "European Union Announces New Trade Partnership Initiative",
      summary: "The comprehensive trade agreement aims to strengthen economic ties across member nations while promoting sustainable development practices.",
      author: "Anna Mueller",
      publishTime: "3 hours ago",
      imageUrl: businessImage,
      category: "EUROPE"
    },
    {
      title: "Breakthrough in Renewable Energy Storage Technology",
      summary: "Scientists develop revolutionary battery system that could store clean energy for months, addressing intermittency challenges.",
      author: "Dr. James Park",
      publishTime: "5 hours ago",
      imageUrl: environmentImage,
      category: "SCIENCE"
    },
    {
      title: "Global Tech Industry Faces New Privacy Regulations",
      summary: "International coalition of regulators introduces unified framework for data protection and digital rights across borders.",
      author: "Lisa Chen",
      publishTime: "7 hours ago",
      imageUrl: technologyImage,
      category: "TECHNOLOGY"
    },
    {
      title: "Historic Peace Talks Resume in Southeast Asia",
      summary: "Diplomatic efforts intensify as regional leaders work toward resolving decades-old territorial disputes through negotiation.",
      author: "Roberto Silva",
      publishTime: "9 hours ago",
      category: "ASIA"
    },
    {
      title: "Ocean Conservation Program Shows Promising Results",
      summary: "Marine protected areas demonstrate significant recovery in biodiversity, offering hope for ecosystem restoration worldwide.",
      author: "Marine Rodriguez",
      publishTime: "11 hours ago",
      category: "ENVIRONMENT"
    },
    {
      title: "International Space Station Prepares for Historic Mission",
      summary: "Multinational crew embarks on groundbreaking research expedition to study climate patterns from orbit.",
      author: "Commander Sarah Jones",
      publishTime: "13 hours ago",
      category: "SPACE"
    }
  ];

  const businessNews = [
    {
      title: "Global Markets Rally on Economic Recovery Signs",
      summary: "Stock exchanges worldwide post significant gains as investors respond positively to strong employment data and industrial growth.",
      author: "Michael Zhang",
      publishTime: "2 hours ago",
      imageUrl: businessImage,
      category: "MARKETS"
    },
    {
      title: "Sustainable Finance Initiative Gains Momentum",
      summary: "Major financial institutions commit to carbon-neutral investing, redirecting trillions toward green infrastructure projects.",
      author: "Emma Thompson",
      publishTime: "4 hours ago",
      category: "FINANCE"
    },
    {
      title: "Tech Startups Drive Innovation in Healthcare",
      summary: "Emerging companies revolutionize medical diagnosis and treatment through artificial intelligence and biotechnology advances.",
      author: "Dr. Alex Kumar",
      publishTime: "6 hours ago",
      imageUrl: technologyImage,
      category: "HEALTHCARE"
    }
  ];

  return (
    <div className="bg-background">
      <HeroSection />
      
      <div className="border-t border-section-divider">
        <NewsSection title="World News" articles={worldNews} />
      </div>
      
      <div className="border-t border-section-divider">
        <NewsSection title="Business & Finance" articles={businessNews} />
      </div>
    </div>
  );
};

export default Index;
