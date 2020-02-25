"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const recipe_entity_1 = require("./recipe.entity");
const type_graphql_1 = require("type-graphql");
let Rate = class Rate {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Rate.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int),
    typeorm_1.Column({ type: "int" }),
    __metadata("design:type", Number)
], Rate.prototype, "value", void 0);
__decorate([
    type_graphql_1.Field(type => user_entity_1.User),
    typeorm_1.ManyToOne(type => user_entity_1.User, { lazy: true }),
    __metadata("design:type", Object)
], Rate.prototype, "user", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Rate.prototype, "date", void 0);
__decorate([
    typeorm_1.ManyToOne(type => recipe_entity_1.Recipe, { lazy: true }),
    __metadata("design:type", Object)
], Rate.prototype, "recipe", void 0);
Rate = __decorate([
    typeorm_1.Entity(),
    type_graphql_1.ObjectType()
], Rate);
exports.Rate = Rate;
//# sourceMappingURL=rate.entity.js.map