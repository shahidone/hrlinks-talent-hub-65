import HeroBanner from "@/components/HeroBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Globe, Award } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      <HeroBanner />
      
      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At HRLinks, we specialize in connecting exceptional IT talent from Pakistan with global 
            opportunities. Our mission is to bridge the gap between skilled professionals and 
            organizations seeking top-tier talent.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle>Expert Talent</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Access to skilled IT professionals with proven expertise
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle>Targeted Matching</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Precise matching of candidates to your specific requirements
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle>Global Reach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Connecting talent across borders for international opportunities
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle>Quality Assured</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Rigorous screening process ensures only top-quality placements
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
          <div className="space-x-4">
            <Button asChild size="lg">
              <a href="/submit-resume">Submit Your Resume</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}