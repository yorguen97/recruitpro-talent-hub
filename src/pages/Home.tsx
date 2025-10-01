import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Building2, TrendingUp, Shield } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Connecting Talent with Leading Companies
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Your trusted partner in finding the perfect match between exceptional talent and outstanding opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/job-seekers">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Find a Job
                </Button>
              </Link>
              <Link to="/employers">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-background text-foreground hover:bg-background/90">
                  Post a Job
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose RecrutPro?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver exceptional recruitment solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Top Talent Network</h3>
                <p className="text-muted-foreground">
                  Access to a vast network of pre-screened, qualified professionals
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Leading Companies</h3>
                <p className="text-muted-foreground">
                  Partnerships with industry-leading organizations across sectors
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
                <p className="text-muted-foreground">
                  Opportunities that align with your career aspirations and goals
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Trusted Process</h3>
                <p className="text-muted-foreground">
                  Secure, transparent recruitment process with personalized support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground">
              Whether you're seeking your next career opportunity or looking to hire exceptional talent, we're here to help
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="success" size="lg" className="w-full sm:w-auto">
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
