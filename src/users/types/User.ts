import { Exclude } from 'class-transformer';

export interface User {
  username: string;
  password: string;
}

export class SerializerUser {
  username: string;
  @Exclude()
  password: string;

  constructor(partial: Partial<SerializerUser>) {
    Object.assign(this, partial);
  }
}
