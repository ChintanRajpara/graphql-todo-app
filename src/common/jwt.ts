import { Request } from "express";
import { sign } from "jsonwebtoken";

class JWTRepository {
  private static instance: JWTRepository;

  //   private request: Request;

  constructor() {
    // this.request = request;
  }

  generateToken(userId: string) {
    const privateKey = "abcd1234";
    var token = sign({ userId }, privateKey);
    return token;
  }

  getUserId() {}

  public static getInstance(): JWTRepository {
    if (!JWTRepository.instance) {
      JWTRepository.instance = new JWTRepository();
    }

    return JWTRepository.instance;
  }
}

export { JWTRepository };
