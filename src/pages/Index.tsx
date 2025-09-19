import { Sprout, Clock, CheckCircle, CloudRain } from "lucide-react"
import { FeatureCard } from "@/components/feature-card"
import { ExpandableChatbot } from "@/components/expandable-chatbot"
import heroImage from "@/assets/hero-farm.jpg"

const features = [
  {
    icon: Sprout,
    title: "💡 Crop-Specific Fertilizer Advice",
    description: "Get the right fertilizer recommendations for your crop, so you can boost yield and save costs."
  },
  {
    icon: Clock,
    title: "🕒 Always Available, Farmer-Friendly",
    description: "No waiting for experts — the chatbot is ready 24/7 to guide you in simple, farmer-friendly language."
  },
  {
    icon: CheckCircle,
    title: "👌 Easy & Interactive",
    description: "Just type in your crop details, and get instant, clear advice within seconds."
  },
  {
    icon: CloudRain,
    title: "🌦️ Weather Prediction & Alerts",
    description: "Stay prepared! The chatbot warns you about upcoming bad weather so you can protect your crops in time."
  }
]

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60" />
        </div>
        
        <div className="relative container mx-auto px-4 py-20 sm:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6 leading-tight">
              Welcome, <span className="text-primary">Farmer</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
              How can I help you today?
            </p>
            <div className="bg-card/95 backdrop-blur-sm p-6 rounded-xl border border-border/50 shadow-soft">
              <h2 className="text-lg font-semibold text-foreground mb-4">What can I do:</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Chatbot Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <ExpandableChatbot />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
