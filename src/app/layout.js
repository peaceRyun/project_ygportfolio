import './globals.css';
import ClientLayout from './ClientLayout';

export const metadata = {
    title: 'Defiant Clone',
    description: 'A clone of the Defiant website built with Next.js',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body data-theme='theme-marketing'>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
