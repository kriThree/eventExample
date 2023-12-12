import { UserToChat } from "./userToChat";

export interface Reaction {
    id: string,
    emoji : string,
    user : UserToChat,
}