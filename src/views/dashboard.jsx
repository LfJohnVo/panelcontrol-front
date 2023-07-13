import { ViewLayout } from '../components/common/layouts';
import Welcome from '../components/common/welcome';
import { DashboardCounters } from '../components/charts/dashboard';
import TableAcquisitions from '../components/tables/acquisitions';

const Dashboard = () => {
  const breadcrumbs = [
    {
      title: 'Dashboard',
      link: '/dashboard',
    },
  ];

  return (
    <ViewLayout actualPage={'Dashboard'} breadcrumbs={breadcrumbs}>
      <Welcome />
      <DashboardCounters />
      <TableAcquisitions />
    </ViewLayout>
  );
};

export default Dashboard;
