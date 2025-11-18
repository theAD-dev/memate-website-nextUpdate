// 'use client';

import AppWrapper from '../../../components/AppWrapper';
import IndustryPage from '../../../page-components/industry-page';

export const metadata = {
  title: 'Agency Management Software for Creative Agencies | MeMate',
  description: 'MeMate agency management software gives creative teams project management, quoting tools, time tracking for creatives, and workflow software in one place.',
  openGraph: {
    title: 'Agency Management Software for Creative Agencies | MeMate',
    description: 'MeMate agency management software gives creative teams project management, quoting tools, time tracking for creatives, and workflow software in one place.',
  },
}


export default function Industry() {
  return (
    <AppWrapper>
      <IndustryPage />
    </AppWrapper>
  );
}