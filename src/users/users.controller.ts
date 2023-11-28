import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';
import { CreateUserDTO } from './dto/createUserDTO';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('')
  async getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  async getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUser(id);
  }

  @Post('')
  async createUser(@Body() userDTO: CreateUserDTO): Promise<User> {
    return this.userService.createUser(userDTO);
  }

  @Put('')
  async updateUser(@Body() userDTO: CreateUserDTO): Promise<User> {
    return this.userService.updateUser(userDTO);
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id);
  }
}