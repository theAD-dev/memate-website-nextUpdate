// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import SubprocessorsPage from '../../page-components/subprocessors';

export const metadata = {
  title: 'Subprocessors & Data Partners | Trusted List | MeMate',
  description: 'Discover how MeMate securely manages subprocessors to protect your data & privacy. Learn what we use, why it matters, and take control today! Visit us now.',
  openGraph: {
    title: 'Subprocessors & Data Partners | Trusted List | MeMate',
    description: 'Discover how MeMate securely manages subprocessors to protect your data & privacy. Learn what we use, why it matters, and take control today! Visit us now.',
  },
}


export default function Subprocessors() {
  return (
    // <AppWrapper>
      <SubprocessorsPage /> 
    // </AppWrapper>
  );
}