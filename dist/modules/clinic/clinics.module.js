"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicsModule = void 0;
const common_1 = require("@nestjs/common");
const clinics_controller_1 = require("./controllers/clinics.controller");
const specialtys_service_1 = require("./services/specialtys.service");
const clinics_repository_1 = require("./repositories/clinics.repository");
let ClinicsModule = class ClinicsModule {
};
exports.ClinicsModule = ClinicsModule;
exports.ClinicsModule = ClinicsModule = __decorate([
    (0, common_1.Module)({
        controllers: [clinics_controller_1.ClinicsController],
        providers: [specialtys_service_1.ClinicsService, clinics_repository_1.ClinicsRepository],
        exports: [specialtys_service_1.ClinicsService],
    })
], ClinicsModule);
//# sourceMappingURL=clinics.module.js.map