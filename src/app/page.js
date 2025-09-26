// 'use client';

import AppWrapper from '../components/AppWrapper';
import LandingPage from '../page-components/landing-page';

export const metadata = {
  title: 'Best Business Management Software, ERP & CRM Tools | MeMate',
  description: 'MeMate offers all-in-one cloud-based business management software for Australian SMEs, with ERP, CRM, and project management tools for smarter business growth.',
  openGraph: {
    title: 'Best Business Management Software, ERP & CRM Tools | MeMate',
    description: 'MeMate offers all-in-one cloud-based business management software for Australian SMEs, with ERP, CRM, and project management tools for smarter business growth.',
  },
}

export default function Home() {
  return (
    <AppWrapper>
      <LandingPage />
    </AppWrapper>
  );
}
 