import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fatih Ercan | AI Language Specialist',
  description: 'AI Language Specialist bridging language, education and artificial intelligence through LLM evaluation, red teaming, translation, localization and QA.',
  keywords: ['AI Language Specialist','LLM Evaluator','Red Teaming','Translation','Localization','AI Trainer','Fatih Ercan'],
  openGraph: {
    title: 'Fatih Ercan | AI Language Specialist',
    description: 'Bridging language, education, and artificial intelligence.',
    images: ['/images/fatih-ercan.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
