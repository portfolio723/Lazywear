
"use client";

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useUser, useAuth } from "@/firebase";
import { useToast } from "@/hooks/use-toast";
import {
  getAuth,
  RecaptchaVerifier,
  PhoneAuthProvider,
  PhoneMultiFactorGenerator,
  multiFactor,
  updateProfile,
  reauthenticateWithCredential,
  EmailAuthProvider,
  type ConfirmationResult,
} from "firebase/auth";

export default function AccountPage() {
  const { user, isLoading } = useUser();
  const auth = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const [displayName, setDisplayName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // MFA State
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [verificationId, setVerificationId] = useState<string | null>(null);
  
  const recaptchaVerifierRef = useRef<RecaptchaVerifier | null>(null);
  const recaptchaContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
    if (user) {
      setDisplayName(user.displayName || '');
    }
  }, [user, isLoading, router]);

  useEffect(() => {
    if (auth && recaptchaContainerRef.current && !recaptchaVerifierRef.current) {
        const verifier = new RecaptchaVerifier(getAuth(), recaptchaContainerRef.current, {
            'size': 'invisible',
            'callback': (response: any) => {
                // reCAPTCHA solved, allow phone number submission.
            }
        });
        recaptchaVerifierRef.current = verifier;
    }
  }, [auth]);

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    
    setIsSubmitting(true);
    try {
      await updateProfile(user, { displayName });
      toast({ title: 'Profile updated successfully!' });
      setIsEditing(false);
    } catch (error: any) {
      toast({ variant: 'destructive', title: 'Update failed', description: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleEnrollMfa = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!user || !recaptchaVerifierRef.current) {
          toast({ variant: 'destructive', title: 'User not authenticated or reCAPTCHA not ready.' });
          return;
      }
      
      setIsSubmitting(true);
      
      const phoneAuthProvider = new PhoneAuthProvider(auth);
      const formattedPhoneNumber = `+91${phone}`;

      try {
        const verificationID = await phoneAuthProvider.verifyPhoneNumber(formattedPhoneNumber, recaptchaVerifierRef.current);
        setVerificationId(verificationID);
        toast({ title: "Verification code sent", description: "Please enter the OTP to continue." });
      } catch (error: any) {
        toast({ variant: "destructive", title: "Failed to send code", description: error.message });
      } finally {
        setIsSubmitting(false);
      }
  };

  const handleVerifyMfa = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!verificationId || !user) {
          toast({ variant: 'destructive', title: 'Verification ID missing.' });
          return;
      }
      
      setIsSubmitting(true);

      const credential = PhoneAuthProvider.credential(verificationId, otp);
      const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(credential);

      try {
        const multiFactorSession = await multiFactor(user).getSession();
        await multiFactor(user).enroll(multiFactorAssertion, "My Phone Number");
        toast({ title: "Success!", description: "Multi-factor authentication has been enabled." });
        setVerificationId(null);
        setPhone('');
        setOtp('');
      } catch (error: any) {
        toast({ variant: "destructive", title: "Enrollment Failed", description: error.message });
      } finally {
        setIsSubmitting(false);
      }
  };


  if (isLoading || !user) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-[#111] items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  const isMfaEnabled = user.multiFactor?.enrolledFactors.length > 0;

  return (
    <div className="flex flex-col min-h-screen bg-background text-[#111]">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold font-headline">My Account</h1>
            <p className="text-muted-foreground mt-2">Manage your profile, security, and order history.</p>
          </div>
          
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal details here.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProfileUpdate} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={user.email || ''} disabled />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="displayName">Full Name</Label>
                    <Input 
                      id="displayName" 
                      type="text" 
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      disabled={!isEditing || isSubmitting}
                    />
                  </div>
                  {isEditing ? (
                    <div className="flex gap-2">
                      <Button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Saving...' : 'Save Changes'}</Button>
                      <Button variant="ghost" onClick={() => { setIsEditing(false); setDisplayName(user.displayName || ''); }}>Cancel</Button>
                    </div>
                  ) : (
                    <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
                  )}
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Security</CardTitle>
                <CardDescription>Enhance your account security with Multi-Factor Authentication.</CardDescription>
              </CardHeader>
              <CardContent>
                {isMfaEnabled ? (
                    <div>
                        <p className="text-green-600 font-semibold">Multi-Factor Authentication is enabled.</p>
                        <p className="text-muted-foreground text-sm">Your account is protected with an additional security layer.</p>
                    </div>
                ) : (
                    !verificationId ? (
                        <form onSubmit={handleEnrollMfa} className="space-y-4">
                           <div className="space-y-2">
                                <Label htmlFor="phone-mfa">Phone Number</Label>
                                <div className="flex items-center">
                                    <span className="border border-r-0 border-input rounded-l-md px-3 py-2 bg-muted text-muted-foreground">+91</span>
                                    <Input
                                        id="phone-mfa"
                                        type="tel"
                                        placeholder="10-digit number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        disabled={isSubmitting}
                                        className="rounded-l-none"
                                    />
                                </div>
                           </div>
                           <Button type="submit" disabled={isSubmitting || phone.length < 10}>{isSubmitting ? 'Sending OTP...' : 'Enroll Phone Number'}</Button>
                        </form>
                    ) : (
                        <form onSubmit={handleVerifyMfa} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="otp-mfa">Enter OTP</Label>
                                <Input
                                    id="otp-mfa"
                                    type="text"
                                    placeholder="6-digit code"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    disabled={isSubmitting}
                                />
                            </div>
                            <Button type="submit" disabled={isSubmitting || otp.length < 6}>{isSubmitting ? 'Verifying...' : 'Verify and Enable MFA'}</Button>
                        </form>
                    )
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
      <div id="recaptcha-container" ref={recaptchaContainerRef}></div>
    </div>
  );
}

    