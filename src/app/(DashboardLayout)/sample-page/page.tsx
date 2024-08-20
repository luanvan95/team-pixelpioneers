'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import ReactGantt from '@/app/(DashboardLayout)/components/react-gantt/ReactGantt';

const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard title="Gantt Chart">
        <ReactGantt></ReactGantt>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;

