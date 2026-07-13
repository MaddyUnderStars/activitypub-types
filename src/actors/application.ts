import { type APActor, isAPActor } from "../actor.js";
import { type APObject } from "../object.js";

export type APApplication = APActor & { type: "Application" };

export const isAPApplication = (actor: APObject): actor is APApplication => {
	return isAPActor(actor) && actor.type == "Application";
};
