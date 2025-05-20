"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialtysModule = void 0;
const common_1 = require("@nestjs/common");
const specialtys_controller_1 = require("./controllers/specialtys.controller");
const specialtys_service_1 = require("./services/specialtys.service");
const specialtys_repository_1 = require("./repositories/specialtys.repository");
let SpecialtysModule = class SpecialtysModule {
};
exports.SpecialtysModule = SpecialtysModule;
exports.SpecialtysModule = SpecialtysModule = __decorate([
    (0, common_1.Module)({
        controllers: [specialtys_controller_1.SpecialtysController],
        providers: [specialtys_service_1.SpecialtysService, specialtys_repository_1.SpecialtysRepository],
        exports: [specialtys_service_1.SpecialtysService],
    })
], SpecialtysModule);
//# sourceMappingURL=specialtys.module.js.map