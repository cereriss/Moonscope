"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./src/app.module");
const express = require("express");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(express.static('public'));
    await app.listen(3000);
    console.log('Application is running on port 3000');
}
bootstrap().catch((error) => {
    console.error('Error starting the application', error);
});
//# sourceMappingURL=main.js.map