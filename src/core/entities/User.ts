import { Event } from "./Event";
import { UserToChat } from "./userToChat";

export interface User {
	id: string;
	name: string;
	password: string;
	events: Event[];
	chats: UserToChat[];
	myEvents: Event[];
}
