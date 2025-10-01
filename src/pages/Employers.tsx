import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Building2, Users, Zap } from "lucide-react";

const Employers = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    position: "",
    requirements: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your request has been submitted! We'll contact you soon.");
    setFormData({
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      position: "",
      requirements: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hire Top Talent</h1>
            <p className="text-xl opacity-90">
              Connect with qualified professionals who will drive your business forward
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With Us?</h2>
              <p className="text-lg text-muted-foreground">
                We streamline your hiring process and deliver quality candidates
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Industry Expertise</h3>
                  <p className="text-muted-foreground">
                    Deep understanding of your sector and specific hiring needs
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Quality Candidates</h3>
                  <p className="text-muted-foreground">
                    Pre-screened professionals who match your requirements
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Fast Turnaround</h3>
                  <p className="text-muted-foreground">
                    Efficient process that saves you time and resources
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Request Talent Form */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Request Talent</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll start finding the perfect candidates for your needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contactName">Contact Name *</Label>
                      <Input
                        id="contactName"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="position">Position Title *</Label>
                    <Input
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="requirements">Job Requirements *</Label>
                    <Textarea
                      id="requirements"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe the role, required skills, experience level, etc."
                      required
                    />
                  </div>

                  <Button type="submit" variant="success" size="lg" className="w-full">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Employers;
