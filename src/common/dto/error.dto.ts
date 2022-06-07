import { HttpStatus } from "@nestjs/common";
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ErrorDto {
  constructor(statusCode: HttpStatus, message) {
    this.statusCode = statusCode;
    this.message = message;
  }
  @Field()
  statusCode: HttpStatus;
  @Field()
  message: string;
}