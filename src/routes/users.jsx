import User from '../views/user';
import UserCreate from '../views/user/create';
import ShowUser from '../views/user/show';
import UpdateUser from '../views/user/update';
import Error from '../views/error';

const user = [
  {
    path: '/users',
    element: <User />,
    errorElement: <Error />,
  },
  {
    path: '/users/create',
    element: <UserCreate />,
    errorElement: <Error />,
  },
  {
    path: '/users/:id',
    element: <ShowUser />,
    errorElement: <Error />,
  },
  {
    path: '/users/:id/update',
    element: <UpdateUser />,
    errorElement: <Error />,
  },
];

export default user;
