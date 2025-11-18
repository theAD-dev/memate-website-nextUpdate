// 'use client';

import AppWrapper from '../../../components/AppWrapper';
import ConstructionPage from '../../../page-components/construction';

export const metadata = {
  title: 'Business Software for Construction Industry | MeMate',
  description: 'Boost efficiency with MeMate’s business software for the construction industry. Streamline projects, cut costs & grow faster—explore solutions today! Call now.',
  openGraph: {
    title: 'Business Software for Construction Industry | MeMate',
    description: 'Boost efficiency with MeMate’s business software for the construction industry. Streamline projects, cut costs & grow faster—explore solutions today! Call now.',
  },
}

export default function Construction() {
  return (
    <AppWrapper>
      <ConstructionPage />
    </AppWrapper>
  );
}