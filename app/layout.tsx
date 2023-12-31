import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Sidebar from "./components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToastProvider from "@/providers/ToasterProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Spotify Clone",
	description: "Live the Music!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={font.className}>
				<ToastProvider />
				<SupabaseProvider>
					<UserProvider>
						<ModalProvider />
						<Sidebar>{children}</Sidebar>
					</UserProvider>
				</SupabaseProvider>
			</body>
		</html>
	);
}
