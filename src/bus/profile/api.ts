import { placeholderInstance, samuraiInstance } from '@app/services/axios';

export const profileAPI = {
  getProfile(userId: number) {
    return samuraiInstance.get(`profile/${userId}`);
  },
  getStatus(userId: number) {
    return samuraiInstance.get(`profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return samuraiInstance.put(`profile/status`, { status: status });
  },
  getPosts(userId: number) {
    return placeholderInstance.get(`posts?userId=${userId}`);
  },
};
