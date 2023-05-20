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
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
let UserRepository = class UserRepository {
    constructor(connection) {
        this.connection = connection;
    }
    async createUser(user) {
        const query = 'INSERT INTO utenti (username, email, password, birth_date) VALUES (?, ?, ?, ?)';
        const [result] = await this.connection.query(query, [
            user.username,
            user.email,
            user.password,
            user.birth_date,
        ]);
        const createdUserId = result['insertId'];
        return createdUserId;
    }
    async findUserById(id) {
        const query = 'SELECT * FROM users WHERE id = ?';
        const [rows] = await this.connection.query(query, [id]);
        const user = rows[0];
        if (!user) {
            return null;
        }
        return user;
    }
};
UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map