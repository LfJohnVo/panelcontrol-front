import React from 'react';
import EditUserForm from '../../components/forms/user/update';
import { titleUser, titleUserTitle } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';
import { ViewLayout } from '../../components/common/layouts';

const UpdateUser = () => {
  const props = {
    navigateLink: '/users',
    title: titleUser,
    text: titleUserTitle,
    textCard: textBienvenida,
  };

  return (
    <ViewLayout props={props}>
      <EditUserForm />
    </ViewLayout>
  );
};

export default UpdateUser;
