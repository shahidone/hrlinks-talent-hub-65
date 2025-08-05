import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, CheckCircle, AlertCircle, Star, Users, Code } from "lucide-react";

export default function ResumeTipsPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Resume Writing Tips</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Craft a compelling resume that showcases your IT expertise and stands out 
          in today's competitive job market. Follow our proven tips for success.
        </p>
      </div>

      {/* Essential Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <FileText className="w-12 h-12 text-primary mb-4" />
            <CardTitle className="text-2xl">Essential Resume Sections</CardTitle>
            <Badge variant="secondary" className="w-fit">Must Have</Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">1. Professional Summary</h4>
                <p className="text-sm text-muted-foreground">
                  2-3 lines highlighting your experience, key skills, and career objectives
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">2. Technical Skills</h4>
                <p className="text-sm text-muted-foreground">
                  Programming languages, frameworks, tools, and technologies you're proficient in
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">3. Work Experience</h4>
                <p className="text-sm text-muted-foreground">
                  Detailed professional history with achievements and responsibilities
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">4. Education & Certifications</h4>
                <p className="text-sm text-muted-foreground">
                  Academic background and relevant professional certifications
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">5. Projects Portfolio</h4>
                <p className="text-sm text-muted-foreground">
                  Key projects that demonstrate your technical capabilities
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Code className="w-12 h-12 text-primary mb-4" />
            <CardTitle className="text-2xl">IT-Specific Guidelines</CardTitle>
            <Badge variant="secondary" className="w-fit">Tech Focus</Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Technical Proficiency Levels</h4>
                <p className="text-sm text-muted-foreground">
                  Clearly indicate your skill level: Expert, Advanced, Intermediate, Basic
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Quantifiable Achievements</h4>
                <p className="text-sm text-muted-foreground">
                  Include metrics: "Improved performance by 40%" or "Managed team of 8 developers"
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technology Stack</h4>
                <p className="text-sm text-muted-foreground">
                  Group technologies logically: Frontend, Backend, Databases, Cloud, Tools
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">GitHub & Portfolio Links</h4>
                <p className="text-sm text-muted-foreground">
                  Include links to your GitHub profile and online portfolio or demo projects
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Industry Keywords</h4>
                <p className="text-sm text-muted-foreground">
                  Use relevant buzzwords and technologies mentioned in job descriptions
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Do's and Don'ts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
            <CardTitle className="text-2xl text-green-600">Do's</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Use a clean, professional format with consistent styling</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Tailor your resume for each specific job application</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Use action verbs: "Developed," "Implemented," "Optimized"</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Keep it concise - ideally 1-2 pages for most positions</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Include relevant keywords from the job posting</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Proofread carefully for grammar and spelling errors</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Use PDF format to preserve formatting across devices</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <AlertCircle className="w-12 h-12 text-red-600 mb-4" />
            <CardTitle className="text-2xl text-red-600">Don'ts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Don't include irrelevant personal information or photos</span>
              </li>
              <li className="flex items-start space-x-2">
                <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Don't use generic templates without customization</span>
              </li>
              <li className="flex items-start space-x-2">
                <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Don't list every technology you've ever touched briefly</span>
              </li>
              <li className="flex items-start space-x-2">
                <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Don't include salary expectations or references</span>
              </li>
              <li className="flex items-start space-x-2">
                <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Don't use outdated or unprofessional email addresses</span>
              </li>
              <li className="flex items-start space-x-2">
                <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Don't exaggerate skills or include false information</span>
              </li>
              <li className="flex items-start space-x-2">
                <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Don't submit without testing readability on different devices</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Sample Formats */}
      <Card className="mb-12">
        <CardHeader>
          <Star className="w-12 h-12 text-primary mb-4" />
          <CardTitle className="text-2xl">Sample Experience Entry Format</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-6 rounded-lg">
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-lg">Senior Full Stack Developer</h4>
                <p className="text-primary font-semibold">TechCorp Solutions | March 2020 - Present</p>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• Developed and maintained 5+ web applications using React, Node.js, and PostgreSQL, serving 10,000+ daily active users</li>
                <li>• Led a team of 4 developers in implementing microservices architecture, reducing system response time by 35%</li>
                <li>• Designed and implemented RESTful APIs and GraphQL endpoints, improving data retrieval efficiency by 40%</li>
                <li>• Collaborated with cross-functional teams to deliver 20+ features on schedule using Agile/Scrum methodologies</li>
                <li>• Mentored junior developers and conducted code reviews, improving team code quality scores by 25%</li>
              </ul>
              <div className="mt-3">
                <span className="text-sm font-semibold text-muted-foreground">Technologies:</span>
                <span className="text-sm text-muted-foreground ml-2">React, Node.js, PostgreSQL, Docker, AWS, Jenkins, Git</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <CardTitle>Professional Review</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-center text-sm">
              Have your resume reviewed by industry professionals before submitting applications.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
            <CardTitle>ATS Optimization</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-center text-sm">
              Ensure your resume is compatible with Applicant Tracking Systems used by many companies.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <Star className="w-12 h-12 text-primary mx-auto mb-4" />
            <CardTitle>Continuous Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-center text-sm">
              Keep your resume updated with new skills, projects, and achievements regularly.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-2xl font-bold mb-4">Ready to Submit Your Resume?</h3>
            <p className="text-muted-foreground mb-6">
              Apply these tips and submit your polished resume to join our talent network.
            </p>
            <a
              href="/submit-resume"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Submit Your Resume
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}