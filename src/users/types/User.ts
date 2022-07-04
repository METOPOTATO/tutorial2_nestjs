import { Exclude } from 'class-transformer';

export interface User {
  id: number;
  username: string;
  password: string;
}

export class SerializerUser {
  id: number;
  username: string;
  @Exclude()
  password: string;

  constructor(partial: Partial<SerializerUser>) {
    Object.assign(this, partial);
  }
}
