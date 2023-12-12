import { Event } from "./Event";

export interface Stage {
	id: string;
	event: Event;
	name: string;
	description: string;
}
