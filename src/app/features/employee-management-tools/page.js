// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import EmployeeManagementPage from '../../../page-components/employee-management';

export const metadata = {
  title: 'Employee Management Software & Time Tracking System | MeMate',
  description: 'Manage staff, shifts & tasks easily with MeMate’s employee management tool system. Roster, track time & boost productivity with less admin and more control.',
  openGraph: {
    title: 'Employee Management Software & Time Tracking System | MeMate',
    description: 'Manage staff, shifts & tasks easily with MeMate’s employee management tool system. Roster, track time & boost productivity with less admin and more control.',
  },
}


export default function EmployeeManagement() {
  return (
    // <AppWrapper>
      <EmployeeManagementPage />
    // </AppWrapper>
  );
}