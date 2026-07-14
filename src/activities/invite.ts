import { type APObject, isAPObject } from "../object.js";
import { type APActivity } from "../activity.js";

export type APInvite = APActivity & { type: "Invite" };

export const isAPInvite = (activity: APObject): activity is APInvite => {
	return isAPObject(activity) && activity.type == "Invite";
};
