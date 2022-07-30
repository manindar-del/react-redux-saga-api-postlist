import { faker } from '@faker-js/faker';
import _ from 'lodash';

import { CurrentUserResponse, User } from './users.interface';

export const userApi = {
  getCurrentUser: (): Promise<CurrentUserResponse> => {
    return new Promise((resolve) => {
      _.delay(() => {
        const user: User = {
          id: faker.datatype.uuid(),
          firstName: faker.name.firstName(),
          lastName:  faker.name.lastName(),
          phoneNo: faker.phone.phoneNumber(),
          token: faker.datatype.uuid(),
          image: faker.image.avatar()
        };
        resolve({ user });
      }, 3000);
    });
  },

  forgetPassword: (): Promise<{ token: string }> => {
    return new Promise((resolve) => {
      _.delay(() => {
        resolve({ token: faker.datatype.uuid() });
      }, 3000);
    });
  }
};

export default userApi;
