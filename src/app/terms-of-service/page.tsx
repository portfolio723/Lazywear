
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-[#111]">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold font-headline mb-8">Terms of Service</h1>
            <div className="prose max-w-none text-muted-foreground space-y-6">
              <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

              <p>Please read these Terms of Service (&quot;Terms&quot;, &quot;Terms of Service&quot;) carefully before using the Lazywear website (the &quot;Service&quot;) operated by Lazywear (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).</p>
              <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>

              <h2 className="text-2xl font-bold font-headline">1. Accounts</h2>
              <p>When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>

              <h2 className="text-2xl font-bold font-headline">2. Intellectual Property</h2>
              <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Lazywear and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries.</p>

              <h2 className="text-2xl font-bold font-headline">3. Links To Other Web Sites</h2>
              <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Lazywear. Lazywear has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.</p>

              <h2 className="text-2xl font-bold font-headline">4. Termination</h2>
              <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

              <h2 className="text-2xl font-bold font-headline">5. Governing Law</h2>
              <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>

              <h2 className="text-2xl font-bold font-headline">6. Changes</h2>
              <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

              <h2 className="text-2xl font-bold font-headline">Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us:</p>
              <ul className="list-disc pl-5">
                <li>By email: support@lazywear.com</li>
                <li>By visiting this page on our website: /contact</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
