export default function Footer() {
  return (
    <footer className="bg-muted mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">HRLinks</h3>
            <p className="text-muted-foreground">
              Connecting exceptional IT talent from Pakistan with global opportunities.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/recruitment-models" className="hover:text-primary transition-colors">Recruitment Models</a></li>
              <li><a href="/hiring-process" className="hover:text-primary transition-colors">Hiring Process</a></li>
              <li><a href="/trainings" className="hover:text-primary transition-colors">Trainings</a></li>
              <li><a href="/resume-tips" className="hover:text-primary transition-colors">Resume Tips</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Get Started</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/submit-resume" className="hover:text-primary transition-colors">Submit Resume</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 HRLinks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}