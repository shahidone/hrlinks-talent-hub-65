import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Trophy, Target } from "lucide-react";

export default function TrainingsPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Training Programs</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Enhance your team's capabilities with our comprehensive training programs designed 
          for IT professionals and organizations seeking to stay ahead in the technology landscape.
        </p>
      </div>

      {/* Training Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <BookOpen className="w-12 h-12 text-primary mb-4" />
            <CardTitle className="text-2xl">Technical Skills Training</CardTitle>
            <Badge variant="secondary" className="w-fit">For Professionals</Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Stay current with the latest technologies and frameworks through our 
              hands-on technical training programs designed by industry experts.
            </p>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Available Programs:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Full-Stack Web Development</li>
                <li>• Cloud Computing (AWS, Azure, GCP)</li>
                <li>• DevOps and CI/CD Practices</li>
                <li>• Mobile App Development</li>
                <li>• Data Science and Analytics</li>
                <li>• Cybersecurity Fundamentals</li>
                <li>• Artificial Intelligence & Machine Learning</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Users className="w-12 h-12 text-primary mb-4" />
            <CardTitle className="text-2xl">Corporate Training</CardTitle>
            <Badge variant="secondary" className="w-fit">For Organizations</Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Customized training solutions for organizations looking to upskill 
              their existing teams and improve overall productivity.
            </p>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Training Areas:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Team Leadership in Tech</li>
                <li>• Agile and Scrum Methodologies</li>
                <li>• Project Management for IT</li>
                <li>• Code Review and Quality Assurance</li>
                <li>• Software Architecture Principles</li>
                <li>• Performance Optimization</li>
                <li>• Technology Adoption Strategies</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Training Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader className="text-center">
            <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
            <CardTitle>Expert Instructors</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-center">
              Learn from industry veterans with years of practical experience in leading tech companies.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <Target className="w-12 h-12 text-primary mx-auto mb-4" />
            <CardTitle>Practical Focus</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-center">
              Hands-on training with real-world projects and scenarios relevant to your work.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
            <CardTitle>Flexible Delivery</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-center">
              Choose from online, in-person, or hybrid training formats to suit your schedule.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Training Process */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">How Our Training Works</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                1
              </div>
              <h4 className="font-semibold mb-2">Assessment</h4>
              <p className="text-sm text-muted-foreground">
                We evaluate current skill levels and identify training needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                2
              </div>
              <h4 className="font-semibold mb-2">Customization</h4>
              <p className="text-sm text-muted-foreground">
                Tailor the curriculum to your specific requirements and goals
              </p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                3
              </div>
              <h4 className="font-semibold mb-2">Delivery</h4>
              <p className="text-sm text-muted-foreground">
                Conduct engaging training sessions with practical exercises
              </p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                4
              </div>
              <h4 className="font-semibold mb-2">Follow-up</h4>
              <p className="text-sm text-muted-foreground">
                Provide ongoing support and measure training effectiveness
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact for Training */}
      <div className="mt-16 text-center">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-2xl font-bold mb-4">Ready to Enhance Your Skills?</h3>
            <p className="text-muted-foreground mb-6">
              Contact us to discuss your training needs and get a customized proposal.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Get Training Quote
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}