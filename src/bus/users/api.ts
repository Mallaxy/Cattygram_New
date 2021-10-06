import { samuraiInstance } from '@app/services/axios';

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return samuraiInstance.get(`users?page=${currentPage}&count=${pageSize}`);
  },
  followUser(userId: number) {
    return samuraiInstance.post(`follow/${userId}`);
  },
  unfollowUser(userId: number) {
    return samuraiInstance.delete(`follow/${userId}`);
  },
};
