import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Users, CheckCircle, UserPlus, MessageSquare, Award } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Initial Consultation",
    description: "We begin by understanding your specific requirements, company culture, and the role you need to fill."
  },
  {
    icon: Search,
    title: "Talent Sourcing",
    description: "Our team leverages extensive networks and databases to identify potential candidates that match your criteria."
  },
  {
    icon: Users,
    title: "Candidate Screening",
    description: "We conduct thorough interviews, technical assessments, and background checks to ensure quality."
  },
  {
    icon: CheckCircle,
    title: "Shortlisting",
    description: "We present you with a curated list of top candidates, complete with detailed profiles and assessments."
  },
  {
    icon: Award,
    title: "Final Selection",
    description: "We facilitate the interview process and help with final selection and offer negotiations."
  },
  {
    icon: UserPlus,
    title: "Placement & Follow-up",
    description: "We ensure smooth onboarding and provide ongoing support during the initial period."
  }
];

export default function HiringProcessPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Hiring Process</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Our systematic approach ensures we find the right talent for your organization. 
          Here's how we make it happen, step by step.
        </p>
      </div>

      {/* Process Steps */}
      <div className="space-y-8 mb-16">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full">
                <step.icon className="w-6 h-6" />
              </div>
            </div>
            <div className="flex-1">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-primary">
                      Step {index + 1}
                    </span>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>

      {/* Timeline Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Timeline & Expectations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1-2 Days</div>
              <h4 className="font-semibold mb-2">Initial Response</h4>
              <p className="text-sm text-muted-foreground">
                We'll get back to you within 1-2 business days to discuss your requirements
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1-2 Weeks</div>
              <h4 className="font-semibold mb-2">Candidate Sourcing</h4>
              <p className="text-sm text-muted-foreground">
                Initial candidate screening and shortlisting based on your criteria
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2-4 Weeks</div>
              <h4 className="font-semibold mb-2">Final Placement</h4>
              <p className="text-sm text-muted-foreground">
                Complete the hiring process from interviews to final onboarding
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quality Assurance */}
      <div className="mt-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Our Quality Assurance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Technical Assessment</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Comprehensive skill evaluations</li>
                  <li>• Hands-on coding assessments</li>
                  <li>• Problem-solving scenarios</li>
                  <li>• Technology-specific tests</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Cultural Fit Evaluation</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Behavioral interviews</li>
                  <li>• Communication skills assessment</li>
                  <li>• Team compatibility evaluation</li>
                  <li>• Work style preferences</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}