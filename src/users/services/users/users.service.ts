import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializerUser, User } from 'src/users/types/User';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'linh',
      password: '1234',
    },
    {
      id: 2,
      username: 'linh2',
      password: '1234',
    },
    {
      id: 3,
      username: 'linh3',
      password: '1234',
    },
    {
      id: 4,
      username: 'linh4',
      password: '1234',
    },
  ];

  getUsers() {
    return this.users.map((user) => new SerializerUser(user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
