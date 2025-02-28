import AppLogoIcon from '@/components/app-logo-icon';
import { Link } from '@inertiajs/react';

interface AuthLayoutProps {
    children: React.ReactNode;
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({ children, title, description }: AuthLayoutProps) {
    return (
        <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-8  ">
                    <div className="flex flex-col items-center gap-4">


                        <div className="space-y-2 text-center">
                            <h1 className="text-4xl  font-bold text-white">{title}</h1>
                            <p className="font-bold text-white text-center text-sm">{description}</p>
                        </div>
                    </div>
                 <div className='bg-white p-10 rounded-2xl'>
                 {children}
              
                 </div>
                </div>
            </div>
        </div>
    );
}
