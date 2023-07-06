import TableDasboard from '../components/tables/dashboard';
import { titleUser, titleUserTitle } from '../common/text/TextTitle';
import { textBienvenida } from '../common/text/TextCardWellcome';
import { ViewLayout } from '../components/common/layouts';

const Dashboard = () => {
  const props = {
    navigateLink: '/dashboard',
    title: titleUser,
    text: titleUserTitle,
    textCard: textBienvenida,
  };
  return (
    <ViewLayout props={props}>
      <TableDasboard />
    </ViewLayout>
  );
};

export default Dashboard;
