import { Injectable } from '@nestjs/common';
import { CreateUserType } from "../../../utilities/types";

@Injectable()
export class UsersService {
  private users = [
    {id:"1", username: "test", email: "test@gmail " },
    {id:"2", username: "test1", email: "test1@gmail " },
    {id:"3", username: "test2", email: "test2@gmail " },
    {id:"4", username: "test3", email: "test3@gmail "}
  ];
  fetchUsers() {
 return this.users;
  }

  createUser(userDetails: CreateUserType) {
    this.users.push(userDetails);
    return userDetails;
  }
  fetchUserById(id: number) {
    return this.users[id];
  }
}
