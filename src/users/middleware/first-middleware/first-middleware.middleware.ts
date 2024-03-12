import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class FirstMiddlewareMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("First Middleware");
    console.log(req.headers.authorization);
    const { authorization } = req.headers;
    if (!authorization)
      throw new Error("No Authorization Header");

    if (authorization === 'mytoken') next();
    else throw new Error("Invalid Token");
  }
}