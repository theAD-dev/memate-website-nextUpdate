// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import TimeTrackerPage from '../../../page-components/time-tracker';

export const metadata = {
  title: 'Time Tracking Software for Aussie Teams | MeMate',
  description: 'Track time, log hours and simplify timesheets. MeMate’s time tracking software helps Aussie businesses manage jobs and staff without the paperwork.',
  openGraph: {
    title: 'Time Tracking Software for Aussie Teams | MeMate',
    description: 'Track time, log hours and simplify timesheets. MeMate’s time tracking software helps Aussie businesses manage jobs and staff without the paperwork.',
  },
}


export default function TimeTracker() {
  return (
    // <AppWrapper>
      <TimeTrackerPage />
    // </AppWrapper>
  );
}