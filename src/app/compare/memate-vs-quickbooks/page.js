// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import ServicesVsQuickBooksPage from '../../../page-components/memate-vs-quickbooks';

export const metadata = {
  title: 'Compare MeMate vs QuickBooks | Save More, Do Less Accounting',
  description: 'Compare MeMate vs QuickBooks—discover key differences, pricing & features, and see why MeMate is the smarter choice for businesses. Explore our solution now!',
  openGraph: {
    title: 'Compare MeMate vs QuickBooks | Save More, Do Less Accounting',
    description: 'Compare MeMate vs QuickBooks—discover key differences, pricing & features, and see why MeMate is the smarter choice for businesses. Explore our solution now!',
  },
}

export default function ServicesVsQuickBooks() {
  return (
    // <AppWrapper>
      <ServicesVsQuickBooksPage />
    // </AppWrapper>
  );
}