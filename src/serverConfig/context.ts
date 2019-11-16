import { Request, Response, response } from "express";
import { JWTRepository } from "../common/jwt";
import { UserRepository } from "../repository/user/user.repository";

interface iContext {
  _userRepositoryInstance: UserRepository;
}

class ContextRepository {
  private static instance: ContextRepository;
  private request: Request;
  private response: Response;
  public _userRepositoryInstance: UserRepository;

  constructor(request: Request, response: Response) {
    this.request = request;
    this.response = response;
    this._userRepositoryInstance = UserRepository.getInstance();
  }

  getUserId() {
    const JWTRepositoryInstance = JWTRepository.getInstance();
  }

  public static getInstance(
    request: Request,
    response: Response
  ): ContextRepository {
    if (!ContextRepository.instance) {
      ContextRepository.instance = new ContextRepository(request, response);
    }

    return ContextRepository.instance;
  }
}

export { ContextRepository, iContext };
