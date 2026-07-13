import { type APActor, isAPActor } from "../actor.js";
import { type APObject } from "../object.js";

export type APService = APActor & { type: "Service" };

export const isAPService = (actor: APObject): actor is APService => {
	return isAPActor(actor) && actor.type == "Service";
};
