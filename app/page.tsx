'use client';

import { useStore } from '@/hooks/useStore';

export default function Home() {
  const { addUser, getAllUsers, allUserCount } = useStore();

  const handleAddUser = async (e: React.SyntheticEvent) => {
    try {
      e.preventDefault();
      const target = e.currentTarget as HTMLFormElement;
      const username = target.username.value;
      const email = target.email.value;
      await addUser(username, email);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <h1>Next.js + IndexedDB + Dexie.js Starter</h1>
      <form
        onSubmit={async (e) => {
          handleAddUser(e);
        }}
      >
        <input type="text" name="username" placeholder="Username" />
        <input type="email" name="email" placeholder="Email" />
        <button type="submit">Add User</button>
      </form>

      <h2>Users</h2>
      <ul>
        {getAllUsers === undefined ? (
          <li>Loading...</li>
        ) : (
          <>
            {allUserCount === 0 ? (
              <li>No users found.</li>
            ) : (
              <>
                {getAllUsers?.map((user, i) => (
                  <li key={i}>
                    <strong>{user.username}</strong> - {user.email}
                  </li>
                ))}
              </>
            )}
          </>
        )}
      </ul>
    </main>
  );
}
