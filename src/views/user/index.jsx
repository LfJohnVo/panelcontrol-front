import React from 'react';
import { titleUser, titleUserTitle } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';
import TableUser from '../../components/tables/users';
import { ViewLayout } from '../../components/common/layouts';

const User = () => {
  const props = {
    navigateLink: '/users',
    title: titleUser,
    text: titleUserTitle,
    textCard: textBienvenida,
  };
  return (
    <ViewLayout props={props}>
      <TableUser />
    </ViewLayout>
  );
};

export default User;
