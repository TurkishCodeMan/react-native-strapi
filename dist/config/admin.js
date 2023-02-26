"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    auth: {
        secret: env('ADMIN_JWT_SECRET', '11a1bd1f7720622756cec403e88a4b5e'),
    },
    apiToken: {
        salt: env('API_TOKEN_SALT', 'key'),
    },
});
