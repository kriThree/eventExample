import { Chat } from "./Chat";
import { Stage } from "./Stage";
import { User } from "./User";
import { userToEvent } from "./userToEvent";

export interface Event {
	id: string;
	name: string;
	admin: User;
	users: userToEvent[];
	stage: Stage[];
	activeStage: Stage;
	chat: Chat;
	point: string;
}
