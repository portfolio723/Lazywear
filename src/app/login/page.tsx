
"use client";

import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from '@/firebase';
import { 
  getAuth,
  RecaptchaVerifier, 
  signInWithPhoneNumber, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup, 
  GoogleAuthProvider,
  ConfirmationResult
} from "firebase/auth";
import { useToast } from '@/hooks/use-toast';

const GoogleIcon = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
        <path d="M12 5.16c1.58 0 2.94.54 4.04 1.58l3.15-3.15C17.45 1.8 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        <path d="M1 1h22v22H1z" fill="none" />
    </svg>
);

export default function LoginPage() {
    const auth = useAuth();
    const router = useRouter();
    const { toast } = useToast();
    
    // Common state
    const [isLoading, setIsLoading] = useState(false);
    
    // Email/Password state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Phone/OTP state
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
    
    const recaptchaVerifierRef = useRef<RecaptchaVerifier | null>(null);
    const recaptchaContainerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (!auth || !recaptchaContainerRef.current) return;
        if (recaptchaVerifierRef.current) return;

        // Initialize RecaptchaVerifier
        const verifier = new RecaptchaVerifier(getAuth(), recaptchaContainerRef.current, {
            'size': 'invisible',
            'callback': () => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
            }
        });

        recaptchaVerifierRef.current = verifier;
        
    }, [auth]);


    const handleGoogleSignIn = async () => {
      if (!auth) return;
      setIsLoading(true);
      try {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        toast({ title: 'Successfully signed in with Google!' });
        router.push('/');
      } catch (error: any) {
        toast({ variant: 'destructive', title: 'Google Sign-In Failed', description: error.message });
      } finally {
        setIsLoading(false);
      }
    };
    
    const handleEmailSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!auth) return;
        setIsLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast({ title: 'Sign in successful!' });
            router.push('/');
        } catch (error: any) {
            // If user not found, try to create an account
            if (error.code === 'auth/user-not-found') {
                try {
                    await createUserWithEmailAndPassword(auth, email, password);
                    toast({ title: 'Account created successfully!' });
                    router.push('/');
                } catch (createError: any) {
                     toast({ variant: 'destructive', title: 'Sign Up Failed', description: createError.message });
                }
            } else {
                 toast({ variant: 'destructive', title: 'Sign In Failed', description: error.message });
            }
        } finally {
            setIsLoading(false);
        }
    };
    
    const handlePhoneSignIn = (e: React.FormEvent) => {
        e.preventDefault();
        const appVerifier = recaptchaVerifierRef.current;
        if (!auth || !appVerifier) {
            toast({ variant: 'destructive', title: 'Authentication service not ready.' });
            return;
        };

        if (phone.length !== 10) {
            toast({ variant: 'destructive', title: 'Invalid phone number', description: 'Please enter a 10-digit number.' });
            return;
        }

        setIsLoading(true);
        const formattedPhoneNumber = `+91${phone}`;

        signInWithPhoneNumber(auth, formattedPhoneNumber, appVerifier)
            .then((confirmation) => {
                setConfirmationResult(confirmation);
                toast({ title: 'OTP Sent', description: 'Check your phone for the verification code.' });
            }).catch((error: any) => {
                console.error("Phone sign in error", error);
                toast({ variant: 'destructive', title: 'Failed to send OTP', description: error.message });
            }).finally(() => {
                setIsLoading(false);
            });
    };

    const handleOtpSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!confirmationResult) return;
        setIsLoading(true);
        try {
            await confirmationResult.confirm(otp);
            toast({ title: 'Sign in successful!' });
            router.push('/');
        } catch (error: any) {
            toast({ variant: 'destructive', title: 'OTP Verification Failed', description: error.message });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-background text-[#111]">
            <Header />
            <main className="flex-grow flex items-center justify-center pt-24 pb-16">
                <div className="w-full max-w-sm mx-auto p-6 md:p-8">
                    
                    <Link href="/">
                        <Image src="https://miro.medium.com/v2/resize:fit:246/format:webp/1*pHF5KzQmHRkpZQ7-ntgZ8w.png" alt="Lazywear Logo - a comfortable clothing store in India for casual and affordable loungewear" width={120} height={48} className="object-contain mx-auto mb-6" />
                    </Link>

                    <h1 className="text-2xl font-bold font-headline text-center">Welcome to LazyWear</h1>
                    <p className="text-muted-foreground mt-1 text-center">Effortless style, delivered.</p>
                    
                    <Tabs defaultValue="phone" className="mt-8">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="phone">Phone</TabsTrigger>
                            <TabsTrigger value="email">Email</TabsTrigger>
                        </TabsList>

                        {/* Phone/OTP Tab */}
                        <TabsContent value="phone">
                            {!confirmationResult ? (
                                <form onSubmit={handlePhoneSignIn} className="mt-6 space-y-6 animate-in fade-in-0 duration-500">
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium">Enter your mobile number</label>
                                        <div className="flex items-center">
                                            <span className="border border-r-0 border-input rounded-l-md px-3 py-2 bg-muted text-muted-foreground">+91</span>
                                            <Input 
                                                id="phone" 
                                                type="tel" 
                                                maxLength={10} 
                                                placeholder="10-digit number" 
                                                className="rounded-l-none"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                disabled={isLoading}
                                            />
                                        </div>
                                    </div>
                                    <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                                        {isLoading ? 'Sending...' : 'Send OTP'}
                                    </Button>
                                </form>
                            ) : (
                                <form onSubmit={handleOtpSubmit} className="mt-6 space-y-6 animate-in fade-in-0 duration-500">
                                    <div className="space-y-2">
                                        <label htmlFor="otp" className="text-sm font-medium">Enter the 6-digit code sent to +91 {phone}</label>
                                        <Input
                                            id="otp"
                                            type="text"
                                            maxLength={6}
                                            placeholder="******"
                                            value={otp}
                                            onChange={e => setOtp(e.target.value)}
                                            disabled={isLoading}
                                            className="text-center tracking-[0.5em]"
                                        />
                                    </div>
                                    <Button type="submit" className="w-full" size="lg" disabled={isLoading || otp.length < 6}>
                                        {isLoading ? 'Verifying...' : 'Verify & Continue'}
                                    </Button>
                                    <Button variant="link" size="sm" className="p-0 h-auto" onClick={() => setConfirmationResult(null)}>
                                      Entered wrong number? Change
                                    </Button>
                                </form>
                            )}
                        </TabsContent>

                        {/* Email/Password Tab */}
                        <TabsContent value="email">
                           <form onSubmit={handleEmailSignIn} className="mt-6 space-y-4 animate-in fade-in-0 duration-500">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                                    <Input 
                                        id="email" 
                                        type="email" 
                                        placeholder="you@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={isLoading}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="password-login" className="text-sm font-medium">Password</label>
                                    <Input 
                                        id="password-login"
                                        type="password" 
                                        placeholder="Your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        disabled={isLoading}
                                    />
                                </div>
                                <Button type="submit" className="w-full !mt-6" size="lg" disabled={isLoading}>
                                    {isLoading ? 'Signing in...' : 'Sign In / Sign Up'}
                                </Button>
                            </form>
                        </TabsContent>
                    </Tabs>
                    
                    <div className="relative my-6">
                        <Separator />
                        <span className="absolute left-1/2 -translate-x-1/2 -top-2.5 bg-background px-2 text-sm text-muted-foreground">OR</span>
                    </div>

                    <div className="flex items-center justify-center">
                        <Button variant="outline" className="w-full" onClick={handleGoogleSignIn} disabled={isLoading}>
                            <GoogleIcon />
                            <span className="ml-2">Sign in with Google</span>
                        </Button>
                    </div>
                    
                    <p className="text-xs text-muted-foreground mt-6 text-center">
                        By continuing, you agree to our <Link href="/terms-of-service" className="underline">Terms</Link> & <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.
                    </p>
                </div>
                 <div id="recaptcha-container" ref={recaptchaContainerRef}></div>
            </main>
            <Footer />
        </div>
    );
}
