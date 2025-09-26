// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import ScheduleJobsPage from '../../../page-components/schedule-jobs';

export const metadata = {
  title: 'Job Management Software & App | MeMate Job Tracking Tools',
  description: 'MeMate job management software, job tracking software, and job scheduling app help Aussie businesses assign, schedule & track jobs with ease.',
  openGraph: {
    title: 'Job Management Software & App | MeMate Job Tracking Tools',
    description: 'MeMate job management software, job tracking software, and job scheduling app help Aussie businesses assign, schedule & track jobs with ease.',
  },
}


export default function ScheduleJobs() {
  return (
    // <AppWrapper>
      <ScheduleJobsPage />
    // </AppWrapper>
  );
}