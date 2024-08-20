'use client';
import { Button, Link, Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import ProductPerformance from '../components/dashboard/ProductPerformance';

const Campaigns = () => {
  return (
    <PageContainer title="Campaigns" description="Campaigns Listing">
        <ProductPerformance></ProductPerformance>
    </PageContainer>
  );
};

export default Campaigns;

