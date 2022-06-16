import { ArgumentsHost, Catch, HttpException } from "@nestjs/common";
import { GqlArgumentsHost, GqlExceptionFilter } from "@nestjs/graphql";
import { ErrorDto } from "../dto";

@Catch(HttpException)
export class HttpExceptionFilter implements GqlExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    return this._genrateError(exception);
  }

  private _genrateError(exception) {
    const statusCode = exception.status;
    const message = exception.response.message;
    return new ErrorDto(statusCode, message);
  }
}