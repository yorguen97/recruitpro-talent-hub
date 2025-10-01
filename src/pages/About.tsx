import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroAbout from "@/assets/hero-about.jpg";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-primary-foreground py-20 bg-cover bg-center" style={{ backgroundImage: `url(${heroAbout})` }}>
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("about.hero.title")}</h1>
            <p className="text-xl opacity-90">
              {t("about.hero.subtitle")}
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
                  <h3 className="text-xl font-bold mb-2">{t("about.mission.title")}</h3>
                  <p className="text-muted-foreground">
                    {t("about.mission.description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t("about.values.title")}</h3>
                  <p className="text-muted-foreground">
                    {t("about.values.description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t("about.approach.title")}</h3>
                  <p className="text-muted-foreground">
                    {t("about.approach.description")}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">{t("about.content.title")}</h2>
              <p className="text-muted-foreground mb-4">
                {t("about.content.paragraph1")}
              </p>
              <p className="text-muted-foreground mb-4">
                {t("about.content.paragraph2")}
              </p>
              <p className="text-muted-foreground">
                {t("about.content.paragraph3")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
