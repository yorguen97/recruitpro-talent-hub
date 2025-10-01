import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, UserSearch, FileText, Users, Target, TrendingUp } from "lucide-react";
import heroServices from "@/assets/hero-services.jpg";

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-primary-foreground py-20 bg-cover bg-center" style={{ backgroundImage: `url(${heroServices})` }}>
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl opacity-90">
              Comprehensive recruitment solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services for Job Seekers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">For Job Seekers</h2>
              <p className="text-lg text-muted-foreground">
                We're committed to helping you find your perfect career opportunity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Job Search Assistance</CardTitle>
                  <CardDescription>
                    Access our extensive database of opportunities across various industries and experience levels
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Resume Review</CardTitle>
                  <CardDescription>
                    Professional resume review and optimization to help you stand out to employers
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Career Guidance</CardTitle>
                  <CardDescription>
                    Personalized career counseling to help you achieve your professional goals
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Services for Employers */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">For Employers</h2>
              <p className="text-lg text-muted-foreground">
                Strategic recruitment solutions to build your dream team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                    <UserSearch className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Talent Sourcing</CardTitle>
                  <CardDescription>
                    Proactive identification and engagement of qualified candidates for your specific needs
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Candidate Screening</CardTitle>
                  <CardDescription>
                    Thorough evaluation and verification of candidates to ensure the perfect fit
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Recruitment Strategy</CardTitle>
                  <CardDescription>
                    Customized recruitment strategies aligned with your business objectives and culture
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
