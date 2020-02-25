"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const Joi = __importStar(require("@hapi/joi"));
exports.ConfigModuleForRoot = config_1.ConfigModule.forRoot({
    validationSchema: Joi.object({
        NODE_ENV: Joi.string()
            .valid('development', 'production', 'test', 'provision')
            .default('development'),
        PORT: Joi.number().default(3000),
    }),
    validationOptions: {
        allowUnknown: true,
        abortEarly: true,
    },
});
//# sourceMappingURL=config.js.map