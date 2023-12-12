import { Chat } from "./Chat";
import { Reaction } from "./Reaction";
import { UserToChat } from "./userToChat";

export interface Message {
    id : string,
    timeCreate : Date,
    text : string,
    isUpdate : boolean,
    chat : Chat,
    reactions : Reaction[],
    user : UserToChat
}