import { GUCDOEHeader } from '@/components/gucdoe/GUCDOEHeader';
import { GUCDOEFooter } from '@/components/gucdoe/GUCDOEFooter';

export default function GUCDOELayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col">
            <GUCDOEHeader />
            <main className="flex-1">
                {children}
            </main>
            <GUCDOEFooter />
        </div>
    );
}
