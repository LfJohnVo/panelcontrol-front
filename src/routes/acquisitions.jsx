import Acquisition from '../views/acquisition/index';
import AcquisitionCreate from '../views/acquisition/create';
import UpdateAcquisition from '../views/acquisition/update';
import ShowAcquisition from '../views/acquisition/show';
import Error from '../views/error';

const acquisitions = [
  {
    path: '/acquisitions',
    element: <Acquisition />,
    errorElement: <Error />,
  },
  {
    path: '/acquisitions/create',
    element: <AcquisitionCreate />,
    errorElement: <Error />,
  },
  {
    path: '/acquisitions/:id/update',
    element: <UpdateAcquisition />,
    errorElement: <Error />,
  },
  {
    path: '/acquisitions/:id',
    element: <ShowAcquisition />,
    errorElement: <Error />,
  },
];

export default acquisitions;
