// 'use client';

import AppWrapper from '../components/AppWrapper';
import LandingPage from '../page-components/landing-page';

export const metadata = {
  title: 'All-in-One Company & Business Management Software | MeMate',
  description: 'Run your business smarter with MeMate—an all-in-one business management software built for small teams. Manage operations, workflows, and growth in one place.',
  openGraph: {
    title: 'All-in-One Company & Business Management Software | MeMate',
    description: 'Run your business smarter with MeMate—an all-in-one business management software built for small teams. Manage operations, workflows, and growth in one place.',
  },
}

export default function Home() {
  return (
    <AppWrapper>
      <LandingPage />
    </AppWrapper>
  );
}
 