import { samuraiInstance } from '@app/services/axios';

export const authAPI = {
  authUser() {
    return samuraiInstance.get(`auth/me`);
  },
};
