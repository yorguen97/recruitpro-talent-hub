import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, UserSearch, FileText, Users, Target, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroServices from "@/assets/hero-services.jpg";

const Services = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-primary-foreground py-20 bg-cover bg-center" style={{ backgroundImage: `url(${heroServices})` }}>
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("services.hero.title")}</h1>
            <p className="text-xl opacity-90">
              {t("services.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Services for Job Seekers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("services.jobSeekers.title")}</h2>
              <p className="text-lg text-muted-foreground">
                {t("services.jobSeekers.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{t("services.jobSeekers.jobSearch.title")}</CardTitle>
                  <CardDescription>
                    {t("services.jobSeekers.jobSearch.description")}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{t("services.jobSeekers.resumeReview.title")}</CardTitle>
                  <CardDescription>
                    {t("services.jobSeekers.resumeReview.description")}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{t("services.jobSeekers.careerGuidance.title")}</CardTitle>
                  <CardDescription>
                    {t("services.jobSeekers.careerGuidance.description")}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Services for Employers */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("services.employers.title")}</h2>
              <p className="text-lg text-muted-foreground">
                {t("services.employers.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                    <UserSearch className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>{t("services.employers.talentSourcing.title")}</CardTitle>
                  <CardDescription>
                    {t("services.employers.talentSourcing.description")}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>{t("services.employers.candidateScreening.title")}</CardTitle>
                  <CardDescription>
                    {t("services.employers.candidateScreening.description")}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>{t("services.employers.recruitmentStrategy.title")}</CardTitle>
                  <CardDescription>
                    {t("services.employers.recruitmentStrategy.description")}
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
