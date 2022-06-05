import { Module } from "@nestjs/common";
import { TrainerModule } from "../trainer/trainer.module";
import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";

@Module({
    imports: [TrainerModule],
    providers: [AuthService, AuthResolver]
})
export class AuthModule {}