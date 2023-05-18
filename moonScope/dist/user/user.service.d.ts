import { Repository } from 'typeorm';
import { CreateUserDto } from './create-user.dto';
import { User } from './entities/user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    createUser(createUserDto: CreateUserDto): Promise<User>;
}
