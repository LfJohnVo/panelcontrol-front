import Catalog from '../views/projects';
import CreateCatalog from '../views/projects/create';
import UpdateCatalog from '../views/projects/update';
import ShowCatalog from '../views/projects/show';
import Error from '../views/error';

const projects = [
  {
    path: '/projects',
    element: <Catalog />,
    errorElement: <Error />,
  },
  {
    path: '/projects/create',
    element: <CreateCatalog />,
    errorElement: <Error />,
  },
  {
    path: '/projects/:id/update',
    element: <UpdateCatalog />,
    errorElement: <Error />,
  },
  {
    path: '/projects/:id',
    element: <ShowCatalog />,
    errorElement: <Error />,
  },
];

export default projects;
