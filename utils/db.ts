import Dexie, { Table } from 'dexie';

export interface User {
  id?: string;
  username: string;
  email: string;
}

export class DB extends Dexie {
  users!: Table<User>;

  constructor() {
    super('app-db');
    this.version(1).stores({
      users: '++id, username, email',
    });
  }
}

export const db = new DB();
