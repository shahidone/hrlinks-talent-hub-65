import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Users, TrendingUp, Settings, Target, Award } from "lucide-react";

export default function OrganizationalDevelopmentPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Organizational Development</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Transform your organization with our comprehensive development services. 
          We help tech companies optimize their processes, build stronger teams, 
          and achieve sustainable growth.
        </p>
      </div>

      {/* Service Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <Building className="w-12 h-12 text-primary mb-4" />
            <CardTitle className="text-2xl">Process Optimization</CardTitle>
            <Badge variant="secondary" className="w-fit">Efficiency Focus</Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Streamline your operations with data-driven process improvements 
              tailored for technology organizations.
            </p>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Our Services Include:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Workflow analysis and optimization</li>
                <li>• Development lifecycle improvements</li>
                <li>• Quality assurance process enhancement</li>
                <li>• Documentation and knowledge management</li>
                <li>• Automation strategy development</li>
                <li>• Performance metrics implementation</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Users className="w-12 h-12 text-primary mb-4" />
            <CardTitle className="text-2xl">Team Building & Culture</CardTitle>
            <Badge variant="secondary" className="w-fit">People First</Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Foster collaboration, improve communication, and build a strong 
              organizational culture that drives innovation and retention.
            </p>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Team Development Areas:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Cross-functional team building</li>
                <li>• Communication workshops</li>
                <li>• Conflict resolution training</li>
                <li>• Leadership development programs</li>
                <li>• Remote team collaboration</li>
                <li>• Culture assessment and improvement</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Focus Areas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader className="text-center">
            <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
            <CardTitle>Growth Strategy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-center">
              Develop sustainable growth strategies aligned with your technology roadmap and market opportunities.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <Settings className="w-12 h-12 text-primary mx-auto mb-4" />
            <CardTitle>Change Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-center">
              Navigate organizational changes smoothly with structured change management processes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <Target className="w-12 h-12 text-primary mx-auto mb-4" />
            <CardTitle>Performance Excellence</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-center">
              Implement performance management systems that drive results and employee engagement.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Development Process */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-2xl">Our Development Approach</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                1
              </div>
              <h4 className="font-semibold mb-2">Assessment</h4>
              <p className="text-sm text-muted-foreground">
                Comprehensive organizational analysis and gap identification
              </p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                2
              </div>
              <h4 className="font-semibold mb-2">Strategy</h4>
              <p className="text-sm text-muted-foreground">
                Develop customized improvement strategies and roadmaps
              </p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                3
              </div>
              <h4 className="font-semibold mb-2">Implementation</h4>
              <p className="text-sm text-muted-foreground">
                Execute changes with minimal disruption to operations
              </p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                4
              </div>
              <h4 className="font-semibold mb-2">Monitoring</h4>
              <p className="text-sm text-muted-foreground">
                Track progress and adjust strategies based on results
              </p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                5
              </div>
              <h4 className="font-semibold mb-2">Optimization</h4>
              <p className="text-sm text-muted-foreground">
                Continuous improvement and long-term sustainability
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Benefits */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-2xl">Expected Outcomes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4 flex items-center">
                <Award className="w-5 h-5 text-primary mr-2" />
                Operational Excellence
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Improved productivity and efficiency</li>
                <li>• Reduced operational costs</li>
                <li>• Better quality control</li>
                <li>• Faster time-to-market</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 flex items-center">
                <Users className="w-5 h-5 text-primary mr-2" />
                People & Culture
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Higher employee engagement</li>
                <li>• Improved retention rates</li>
                <li>• Enhanced collaboration</li>
                <li>• Stronger leadership pipeline</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact for Services */}
      <div className="text-center">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Organization?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can help optimize your processes and build a stronger, 
              more efficient organization.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Schedule Consultation
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}