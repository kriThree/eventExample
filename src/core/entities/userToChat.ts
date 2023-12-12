import { Chat } from "./Chat";
import { Reaction } from "./Reaction";
import { User } from "./User";

export interface UserToChat {
	user: User;
	chat: Chat;
	reactions: Reaction[];
}
