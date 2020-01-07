import {ConfigModule} from '@nestjs/config';
import * as Joi from '@hapi/joi';

export const ConfigModuleForRoot = ConfigModule.forRoot({
  validationSchema: Joi.object({
    NODE_ENV: Joi.string()
      .valid('development', 'production', 'test', 'provision')
      .default('development'),
    PORT: Joi.number().default(5000),
  }),
  validationOptions: {
    allowUnknown: false,
    abortEarly: true,
  },
});
