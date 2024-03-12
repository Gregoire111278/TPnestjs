import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { CreateUserDto } from "./CreateUser.dto";
import { UsersService } from "../../services/users/users.service";

@Controller("users")
export class UsersController {

  constructor(private UserService: UsersService) {

  }

  @Get()
  getUsers() {
    return this.UserService.fetchUsers();
  }

  @Post("create")
  @UsePipes(new ValidationPipe())
  createUsers(@Body() userInfo: CreateUserDto) {
    console.log(userInfo);
    this.UserService.createUser(userInfo);
  }

  @Get(":id")
  getUserById(@Param("id", ParseIntPipe) id: number) {
    const user = this.UserService.fetchUserById(id);
    if (!user) throw new HttpException("User not found", 404);
return user;
  }

}
