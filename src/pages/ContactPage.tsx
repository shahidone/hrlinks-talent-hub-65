import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Ready to find exceptional IT talent or explore opportunities? 
          Get in touch with our team and let's discuss how we can help you achieve your goals.
        </p>
      </div>

      <ContactForm />

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-6">Other Ways to Reach Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div>
            <h4 className="font-semibold mb-2">General Inquiries</h4>
            <p className="text-muted-foreground">info@hrlinks.com</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Resume Submissions</h4>
            <p className="text-muted-foreground">resumes@hrlinks.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}