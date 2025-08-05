import ResumeForm from "@/components/ResumeForm";

export default function SubmitResumePage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Submit Your Resume</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Join our network of talented IT professionals. Submit your resume today 
          and get connected with exciting opportunities that match your skills and career goals.
        </p>
      </div>

      <ResumeForm />

      <div className="mt-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">What Happens Next?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1</div>
              <h4 className="font-semibold mb-2">Review</h4>
              <p className="text-sm text-muted-foreground">
                Our team reviews your resume and matches it with our current opportunities
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <h4 className="font-semibold mb-2">Connect</h4>
              <p className="text-sm text-muted-foreground">
                We'll reach out to discuss potential matches and next steps
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <h4 className="font-semibold mb-2">Place</h4>
              <p className="text-sm text-muted-foreground">
                Get connected with employers looking for your specific skills
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}