import { Connection } from 'mysql2/promise';
import { User } from '../entities/user.entity';
export declare class UserRepository {
    private connection;
    constructor(connection: Connection);
    createUser(user: User): Promise<User>;
    findUserById(id: number): Promise<User | null>;
}
