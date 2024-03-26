import { db } from '@/utils/db';
import { v4 as uuidv4 } from 'uuid';
import { useLiveQuery } from 'dexie-react-hooks';

export const useStore = () => {
  const addUser = async (username: string, email: string) => {
    await db.users.add({
      id: uuidv4(),
      username,
      email,
    });
  };

  const getAllUsers = useLiveQuery(async () => {
    return await db.users.toArray();
  });

  return {
    addUser,
    getAllUsers,
  };
};
