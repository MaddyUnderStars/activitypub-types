import { type APObject } from "../object.js";
import { type APActivity, isAPActivity } from "../activity.js";

export type APInvite = APActivity & { type: "Invite" };

export const isAPInvite = (activity: APObject): activity is APInvite => {
	return isAPActivity(activity) && activity.type == "Invite";
};
