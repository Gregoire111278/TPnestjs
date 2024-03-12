import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { FirstMiddlewareMiddleware } from "./middleware/first-middleware/first-middleware.middleware";

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FirstMiddlewareMiddleware).forRoutes(
      { path: "users", method :RequestMethod.GET},
      { path: "users/create", method :RequestMethod.POST},
      { path: "users/:id", method :RequestMethod.GET}
    );
  }
}