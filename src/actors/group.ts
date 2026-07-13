import { type APActor, isAPActor } from "../actor.js";
import { type APObject } from "../object.js";

export type APGroup = APActor & { type: "Group" };

export const isAPGroup = (actor: APObject): actor is APGroup => {
	return isAPActor(actor) && actor.type == "Group";
};
