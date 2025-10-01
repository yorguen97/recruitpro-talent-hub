import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About RecrutPro</h1>
            <p className="text-xl opacity-90">
              We're dedicated to creating meaningful connections between exceptional talent and forward-thinking companies
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To bridge the gap between talent and opportunity, creating lasting professional relationships
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Our Values</h3>
                  <p className="text-muted-foreground">
                    Integrity, excellence, and commitment to both candidates and clients
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Our Approach</h3>
                  <p className="text-muted-foreground">
                    Personalized service with deep industry expertise and market insights
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-muted-foreground mb-4">
                RecrutPro is a leading recruitment agency specializing in connecting top-tier talent with exceptional 
                companies across various industries. With years of experience in the recruitment sector, we understand 
                the challenges both job seekers and employers face in today's competitive market.
              </p>
              <p className="text-muted-foreground mb-4">
                Our team of experienced recruitment professionals works tirelessly to understand the unique needs of 
                each client and candidate. We believe that successful recruitment goes beyond matching skills to job 
                descriptions—it's about understanding company culture, career aspirations, and long-term goals.
              </p>
              <p className="text-muted-foreground">
                Whether you're a professional seeking your next career move or an organization looking to build your 
                team, RecrutPro is committed to delivering results that exceed expectations. Our personalized approach, 
                extensive network, and industry expertise make us your trusted partner in recruitment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
