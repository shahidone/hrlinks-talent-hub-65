import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserCheck, Clock, Users } from "lucide-react";

export default function RecruitmentModelsPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Recruitment Models</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Choose the recruitment model that best fits your organization's needs. 
          We offer flexible solutions to help you find and hire the right talent.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Direct Hire Model */}
        <Card className="h-full">
          <CardHeader>
            <UserCheck className="w-12 h-12 text-primary mb-4" />
            <CardTitle className="text-2xl">Direct Hire Model</CardTitle>
            <Badge variant="secondary" className="w-fit">One-time Fee</Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Our direct hire model is perfect for organizations looking to make permanent 
              additions to their team. We handle the entire recruitment process from sourcing 
              to placement.
            </p>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Key Features:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Comprehensive candidate screening and vetting</li>
                <li>• One-time placement fee upon successful hire</li>
                <li>• 90-day replacement guarantee</li>
                <li>• Direct employment with your organization</li>
                <li>• Full ownership of the hire</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Best For:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Long-term positions</li>
                <li>• Senior and executive roles</li>
                <li>• Core team members</li>
                <li>• Specialized skill requirements</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Provider Model */}
        <Card className="h-full">
          <CardHeader>
            <Clock className="w-12 h-12 text-primary mb-4" />
            <CardTitle className="text-2xl">Provider Model</CardTitle>
            <Badge variant="secondary" className="w-fit">Hourly Basis</Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Our provider model offers flexible staffing solutions with full-time or 
              part-time resources on an hourly basis. Perfect for project-based work 
              or temporary staffing needs.
            </p>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Key Features:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Flexible full-time or part-time arrangements</li>
                <li>• Hourly billing for transparency</li>
                <li>• Quick scaling up or down</li>
                <li>• Managed by HRLinks</li>
                <li>• Reduced administrative burden</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Best For:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Project-based work</li>
                <li>• Temporary staffing needs</li>
                <li>• Skill augmentation</li>
                <li>• Trial periods before permanent hire</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Affiliates Section */}
      <Card>
        <CardHeader>
          <Users className="w-12 h-12 text-primary mb-4" />
          <CardTitle className="text-2xl">Our Affiliate Network</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            Through our extensive network of local IT service providers, we can offer 
            additional resources and specialized expertise to meet your unique requirements.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-semibold mb-2">Development Partners</h4>
              <p className="text-sm text-muted-foreground">
                Specialized software development companies
              </p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-semibold mb-2">DevOps Specialists</h4>
              <p className="text-sm text-muted-foreground">
                Infrastructure and deployment experts
              </p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-semibold mb-2">QA & Testing Partners</h4>
              <p className="text-sm text-muted-foreground">
                Quality assurance and testing specialists
              </p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-semibold mb-2">UI/UX Design Studios</h4>
              <p className="text-sm text-muted-foreground">
                User experience and interface design experts
              </p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-semibold mb-2">Data Analytics Firms</h4>
              <p className="text-sm text-muted-foreground">
                Big data and analytics specialists
              </p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-semibold mb-2">Cybersecurity Experts</h4>
              <p className="text-sm text-muted-foreground">
                Information security professionals
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}