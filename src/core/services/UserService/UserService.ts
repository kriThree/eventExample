import { UserRepository } from "../../repositories/User/User";

export class UserService {
    constructor(readonly userRepository : UserRepository){
    }
    async getAll(){

    }
}
