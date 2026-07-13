import { type APActivity, isAPActivity } from "../activity.js";

export type APInvite = APActivity & { type: "Invite" };

export const ActivityIsInvite = (activity: APActivity): activity is APInvite => {
	return isAPActivity(activity) && activity.type == "Invite";
};
