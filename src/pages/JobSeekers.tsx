import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Clock } from "lucide-react";
import { toast } from "sonner";
import heroJobs from "@/assets/hero-jobs.jpg";

const JobSeekers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobType, setJobType] = useState("all");
  const [location, setLocation] = useState("all");

  // Mock job data
  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc",
      location: "New York, NY",
      type: "Full-time",
      experience: "5+ years",
      description: "Join our team to build cutting-edge software solutions",
    },
    {
      id: 2,
      title: "Marketing Manager",
      company: "Global Marketing Solutions",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Lead marketing campaigns for international brands",
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "Analytics Pro",
      location: "San Francisco, CA",
      type: "Contract",
      experience: "2+ years",
      description: "Analyze data to drive business insights and decisions",
    },
    {
      id: 4,
      title: "Product Designer",
      company: "Creative Studios",
      location: "Los Angeles, CA",
      type: "Full-time",
      experience: "4+ years",
      description: "Design user-centered products that delight customers",
    },
  ];

  const handleApply = (jobTitle: string) => {
    toast.success(`Application submitted for ${jobTitle}!`);
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = jobType === "all" || job.type.toLowerCase() === jobType;
    const matchesLocation = location === "all" || job.location.toLowerCase().includes(location.toLowerCase());
    
    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-primary-foreground py-20 bg-cover bg-center" style={{ backgroundImage: `url(${heroJobs})` }}>
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Dream Job</h1>
            <p className="text-xl opacity-90">
              Explore thousands of opportunities from leading companies
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Job Search</CardTitle>
                <CardDescription>Filter jobs by title, company, type, and location</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="search">Keywords</Label>
                    <Input
                      id="search"
                      placeholder="Job title or company"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="job-type">Job Type</Label>
                    <Select value={jobType} onValueChange={setJobType}>
                      <SelectTrigger id="job-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Select value={location} onValueChange={setLocation}>
                      <SelectTrigger id="location">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Locations</SelectItem>
                        <SelectItem value="remote">Remote</SelectItem>
                        <SelectItem value="new york">New York</SelectItem>
                        <SelectItem value="san francisco">San Francisco</SelectItem>
                        <SelectItem value="los angeles">Los Angeles</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">{filteredJobs.length} Jobs Found</h2>
            </div>

            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <p className="text-lg font-medium text-muted-foreground">{job.company}</p>
                      </div>
                      <Button variant="success" onClick={() => handleApply(job.title)}>
                        Apply Now
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Briefcase className="h-4 w-4" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {job.experience}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobSeekers;
