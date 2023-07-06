import React from 'react';
import UserDetail from '../../components/users/UserDetail';
import { titleModulUser } from '../../common/text/TextTitle';
import { ViewLayout } from '../../components/common/layouts';

const ShowUser = () => {
  const props = {
    navigateLink: '/users',
    title: titleModulUser.titleUserDetail,
    text: titleModulUser.descriptionUserDetail,
  };
  return (
    <ViewLayout props={props}>
      <UserDetail {...props} />
    </ViewLayout>
  );
};

export default ShowUser;
