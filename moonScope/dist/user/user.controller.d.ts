import { CreateUserDto } from './create-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
}
