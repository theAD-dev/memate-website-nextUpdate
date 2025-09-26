// 'use client';

import AppWrapper from '../../../components/AppWrapper';
import StartupsPage from '../../../page-components/startups';

export const metadata = {
  title: 'All-in-One Startup Management Platform | MeMate',
  description: 'Manage your startup with MeMate — CRM, project management tools for startups, workflow software & invoicing in one all-in-one software solution.',
  openGraph: {
    title: 'All-in-One Startup Management Platform | MeMate',
    description: 'Manage your startup with MeMate — CRM, project management tools for startups, workflow software & invoicing in one all-in-one software solution.',
  },
}


export default function Startups() {
  return (
    <AppWrapper>
      <StartupsPage />
    </AppWrapper>
  );
}