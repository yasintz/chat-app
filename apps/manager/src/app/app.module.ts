import { Module } from '@nestjs/common';
import { HasuraModule } from '@golevelup/nestjs-hasura';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AppAuthModule } from './app-auth/app-auth.module';
import { environment } from '../environments/environment';
import { CONSTANTS } from '../environments/constants';
import { HasuraEventsModule } from './hasura-events/hasura-events.module';

@Module({
  imports: [
    AuthModule,
    AppAuthModule,
    HasuraModule.forRoot(HasuraModule, {
      webhookConfig: {
        secretFactory: environment.hasura.webhookSecretFactory,
        secretHeader:
          CONSTANTS.HASURA_MANAGER_WEBHOOK_SECRET_HEADER_VALUE.toLowerCase(),
      },
      managedMetaDataConfig: !environment.production
        ? {
            metadataVersion: 'v3',
            dirPath: path.join(process.cwd(), 'apps/hasura/metadata'),
            secretHeaderEnvName:
              CONSTANTS.HASURA_MANAGER_WEBHOOK_SECRET_HEADER_VALUE,
            nestEndpointEnvName: 'MANAGER_EVENT_WEBHOOK_ENDPOINT',
            defaultEventRetryConfig: {
              intervalInSeconds: 15,
              numRetries: 3,
              timeoutInSeconds: 100,
              toleranceSeconds: 21600,
            },
          }
        : undefined,
    }),
    HasuraEventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
