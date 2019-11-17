import { Request, Response, response } from "express";
import { JWTRepository } from "../common/jwt";
import { UserRepository } from "../repository/user/user.repository";
import { TodoRepository } from "../repository/todo/todo.repository";

interface iContext {
  getUserId(): { userId: string } | Error;
  _userRepositoryInstance: UserRepository;
  _todoRepositoryInstance: TodoRepository;
}

class ContextRepository {
  private static instance: ContextRepository;
  private request: Request;
  private response: Response;
  public _userRepositoryInstance: UserRepository;
  public _todoRepositoryInstance: TodoRepository;
  public _JWTRepositoryInstance: JWTRepository;

  constructor({ request, response }: { request: Request; response: Response }) {
    this.request = request;
    this.response = response;
    this._userRepositoryInstance = UserRepository.getInstance();
    this._todoRepositoryInstance = TodoRepository.getInstance();
    this._JWTRepositoryInstance = JWTRepository.getInstance();
  }

  async getUserId() {
    const authorization = this.request.headers.authorization;
    if (!authorization) {
      throw new Error("No authorization headers found");
    }
    const token = authorization.replace("Bearer ", "");
    // console.log({ token });
    const { userId } = await this._JWTRepositoryInstance.verfyToken(token);
    return { userId };
  }

  public static getInstance({
    request,
    response
  }: {
    request: Request;
    response: Response;
  }): ContextRepository {
    if (!ContextRepository.instance) {
      ContextRepository.instance = new ContextRepository({ request, response });
    }

    return ContextRepository.instance;
  }
}

export { ContextRepository, iContext };
