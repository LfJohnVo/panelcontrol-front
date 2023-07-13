import Client from '../views/clients';
import CreateClient from '../views/clients/create';
import UpdateClient from '../views/clients/update';
import ShowClient from '../views/clients/show';
import Error from '../views/error';

const clients = [
  {
    path: '/clients',
    element: <Client />,
    errorElement: <Error />,
  },
  {
    path: '/clients/create',
    element: <CreateClient />,
    errorElement: <Error />,
  },
  {
    path: '/clients/:id/update',
    element: <UpdateClient />,
    errorElement: <Error />,
  },
  {
    path: '/clients/:id',
    element: <ShowClient />,
    errorElement: <Error />,
  },
];

export default clients;
