import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
@IsNotEmpty()
  id: string;
@IsNotEmpty()
  username: string;

@IsEmail()
@IsNotEmpty()
  email: string;
}