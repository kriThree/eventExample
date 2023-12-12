import { Event } from "./Event";
import { Message } from "./Message";
import { UserToChat } from "./userToChat";

export interface Chat {
	id: string;
	personal: boolean;
	users: UserToChat[];
	messages: Message[];
	event?: Event;
}
