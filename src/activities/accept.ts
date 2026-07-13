import { type APActivity, isAPActivity } from "../activity.js";

export type APAccept = APActivity & { type: "Accept" };

export const ActivityIsAccept = (activity: APActivity): activity is APAccept => {
	return isAPActivity(activity) && activity.type == "Accept";
};
