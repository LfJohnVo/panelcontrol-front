import React from 'react';
import CreateUserForm from '../../components/forms/user/create';
import { titleUser, titleUserTitle } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';
import { ViewLayout } from '../../components/common/layouts';

const UserCreate = () => {
  const props = {
    navigateLink: '/users',
    title: titleUser,
    text: titleUserTitle,
    textCard: textBienvenida,
  };
  return (
    <ViewLayout props={props}>
      <CreateUserForm />
    </ViewLayout>
  );
};

export default UserCreate;
