// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import ClientPage from '../../../page-components/client-management';

export const metadata = {
  title: 'Client Management Software for Aussie Businesses | MeMate',
  description: 'Client management software by Memate will simplify your business managing clients, contacts, and communications in one place built for Australian businesses',
  openGraph: {
    title: 'Client Management Software for Aussie Businesses | MeMate',
    description: 'Client management software by Memate will simplify your business managing clients, contacts, and communications in one place built for Australian businesses',
  },
}

export default function Client() {
  return (
    // <AppWrapper>
      <ClientPage />
    // </AppWrapper>
  );
}