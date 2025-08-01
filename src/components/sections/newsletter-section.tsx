
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NewsletterSection() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold font-headline mb-2">
          Join the Club
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Sign up for our newsletter to get exclusive deals, drop alerts, and style inspiration delivered to your inbox.
        </p>
        <form className="max-w-md mx-auto flex gap-2 items-center">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-grow bg-white rounded-md h-11"
            aria-label="Email for newsletter"
          />
          <Button type="submit" variant="outline" size="lg" className="bg-primary text-primary-foreground border-primary hover:bg-primary/90 rounded-md">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}

    