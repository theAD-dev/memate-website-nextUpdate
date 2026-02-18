// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import ValuationCalculatorPage from '../../page-components/business-valuation-calculator';

export const metadata = {
  title: 'Business Valuation Calculator | Estimate Your Business Worth | MeMate',
  description: 'Estimate your business value with our Business Valuation Calculator. Discover how revenue, profitability and systems impact what your business could be worth.',
  openGraph: {
    title: 'Business Valuation Calculator | Estimate Your Business Worth | MeMate',
    description: 'Estimate your business value with our Business Valuation Calculator. Discover how revenue, profitability and systems impact what your business could be worth.',
  },
}


export default function Subprocessors() {
  return (
    // <AppWrapper>
      <ValuationCalculatorPage /> 
    // </AppWrapper>
  );
}