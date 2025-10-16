
"use client";

import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from '@/components/ui/separator';

const GoogleIcon = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
        <path d="M12 5.16c1.58 0 2.94.54 4.04 1.58l3.15-3.15C17.45 1.8 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        <path d="M1 1h22v22H1z" fill="none" />
    </svg>
);

const FacebookIcon = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-1.5c-.83 0-1.5.67-1.5 1.5V12h3l-.5 3h-2.5v7.8c4.56-.93 8-4.96 8-9.8z" fill="#1877F2" />
    </svg>
);


export default function LoginPage() {
    const [step, setStep] = useState<'phone' | 'otp'>('phone');
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState(new Array(6).fill(""));

    const handlePhoneSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Basic validation
        if (phone.length === 10 && !isNaN(Number(phone))) {
            setStep('otp');
        } else {
            alert("Please enter a valid 10-digit mobile number.");
        }
    };

    const handleOtpChange = (element: HTMLInputElement, index: number) => {
        if (isNaN(Number(element.value))) return false;
    
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    
        // Focus on next input
        if (element.nextSibling && element.value) {
          (element.nextSibling as HTMLInputElement).focus();
        }
    };

    const handleOtpSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically verify the OTP
        console.log("Verifying OTP:", otp.join(""));
        alert("Login successful!"); // Placeholder for actual success
    };

    return (
        <div className="flex flex-col min-h-screen bg-background text-[#111]">
            <Header />
            <main className="flex-grow flex items-center justify-center pt-24 pb-16">
                <div className="w-full max-w-sm mx-auto p-6 md:p-8 text-center">
                    
                    <Link href="/">
                        <Image src="https://miro.medium.com/v2/resize:fit:246/format:webp/1*pHF5KzQmHRkpZQ7-ntgZ8w.png" alt="Lazywear Logo - a comfortable clothing store in India for casual and affordable loungewear" width={120} height={48} className="object-contain mx-auto mb-4" />
                    </Link>

                    {step === 'phone' && (
                        <div className="animate-in fade-in-0 duration-500">
                            <h1 className="text-2xl font-bold font-headline">Welcome to LazyWear</h1>
                            <p className="text-muted-foreground mt-1">Effortless style, delivered.</p>
                            
                            <form onSubmit={handlePhoneSubmit} className="mt-8 space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium">Enter your mobile number to get started</label>
                                    <div className="flex items-center">
                                        <span className="border border-r-0 border-input rounded-l-md px-3 py-2 bg-muted text-muted-foreground">+91</span>
                                        <Input 
                                            id="phone" 
                                            type="tel" 
                                            maxLength={10} 
                                            placeholder="Your 10-digit number" 
                                            className="rounded-l-none"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <Button type="submit" className="w-full" size="lg">Send OTP</Button>
                            </form>
                            
                            <div className="relative my-6">
                                <Separator />
                                <span className="absolute left-1/2 -translate-x-1/2 -top-2.5 bg-background px-2 text-sm text-muted-foreground">OR</span>
                            </div>

                            <div className="flex items-center justify-center gap-4">
                                <Button variant="outline" className="w-full">
                                    <GoogleIcon />
                                    <span>Sign in with Google</span>
                                </Button>
                                <Button variant="outline" className="w-full">
                                    <FacebookIcon />
                                    <span>Sign in with Facebook</span>
                                </Button>
                            </div>
                            
                            <p className="text-xs text-muted-foreground mt-6">
                                By continuing, you agree to our <Link href="#" className="underline">Terms</Link> & <Link href="#" className="underline">Privacy Policy</Link>.
                            </p>
                            <p className="text-sm text-muted-foreground mt-4">
                                New to LazyWear? <span className="font-medium text-foreground">You'll create your account after verifying.</span>
                            </p>
                        </div>
                    )}
                    
                    {step === 'otp' && (
                        <div className="animate-in fade-in-0 duration-500">
                            <h1 className="text-2xl font-bold font-headline">Verify Your Number</h1>
                            <p className="text-muted-foreground mt-1">We’ve sent a 6-digit code to +91 {phone}</p>
                            
                            <form onSubmit={handleOtpSubmit} className="mt-8 space-y-6">
                                <div className="flex justify-center gap-2">
                                    {otp.map((data, index) => {
                                        return (
                                            <Input
                                                key={index}
                                                type="text"
                                                maxLength={1}
                                                className="w-12 h-14 text-center text-2xl font-bold"
                                                value={data}
                                                onChange={e => handleOtpChange(e.target, index)}
                                                onFocus={e => e.target.select()}
                                            />
                                        );
                                    })}
                                </div>
                                <p className="text-sm text-muted-foreground">Resend OTP in 30s</p>

                                <Button type="submit" className="w-full" size="lg">Verify & Continue</Button>
                            </form>
                            
                            <div className="text-sm mt-6 space-x-2">
                                <span className="text-muted-foreground">Didn’t receive the code?</span>
                                <Button variant="link" className="p-0 h-auto">Resend Now</Button>
                            </div>
                            <Button variant="link" className="p-0 h-auto text-sm" onClick={() => setStep('phone')}>
                                Entered wrong number? Change
                            </Button>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
