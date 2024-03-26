import { db } from '@/utils/db';

export const useStore = () => {
  const addUser = async (username: string, email: string) => {
    await db.users.add({ username, email });
  };

  return {
    addUser,
  };
};
