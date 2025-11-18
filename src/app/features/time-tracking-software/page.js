// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import TimeSheetPage from '../../../page-components/time-sheet';

export const metadata = {
  title: 'MeMate Time Tracking App | Employee & Project Software',
  description: 'Boost productivity with MeMate—your all-in-one time tracking software & employee time tracking app. Try our project time tracking app today! Visit us now!',
}

export default function TimeSheet() {
  return (
    // <AppWrapper>
      <TimeSheetPage />
    // </AppWrapper>
  );
}