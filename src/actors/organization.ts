import { type APActor, isAPActor } from "../actor.js";
import { type APObject } from "../object.js";

export type APOrganization = APActor & { type: "Organization" };

export const isAPOrganization = (actor: APObject): actor is APOrganization => {
	return isAPActor(actor) && actor.type == "Organization";
};
