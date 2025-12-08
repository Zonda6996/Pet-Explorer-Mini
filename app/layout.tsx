import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from './providers/providers'
import { Header } from './components/Header'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Pet Explorer Mini',
	description: 'A mini app to explore pets with theme toggling feature.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable}  transition-colors duration-500 antialiased`}
			>
				<Providers>
					<Header />
					<main className='px-4'>{children}</main>
				</Providers>
			</body>
		</html>
	)
}

