// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import CommunicationPage from '../../../page-components/communication';

export const metadata = {
  title: 'Team Communication Software & Tools for Teams | MeMate',
  description: 'MeMate team communication tools make teamwork simple. Manage chats, tasks, and updates in one place with the best team communication software.',
  openGraph: {
    title: 'Team Communication Software & Tools for Teams | MeMate',
    description: 'MeMate team communication tools make teamwork simple. Manage chats, tasks, and updates in one place with the best team communication software.',
  },
}

export default function Communication() {
  return (
    // <AppWrapper>
      <CommunicationPage />
    // </AppWrapper>
  );
}