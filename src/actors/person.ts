import { type APActor, isAPActor } from "../actor.js";
import { type APObject } from "../object.js";

export type APPerson = APActor & { type: "Person" };

export const isAPPerson = (actor: APObject): actor is APPerson => {
	return isAPActor(actor) && actor.type == "Person";
};
