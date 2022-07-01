import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializerUser, User } from 'src/users/types/User';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'linh',
      password: '1234',
    },
    {
      username: 'linh2',
      password: '1234',
    },
    {
      username: 'linh3',
      password: '1234',
    },
    {
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
}
