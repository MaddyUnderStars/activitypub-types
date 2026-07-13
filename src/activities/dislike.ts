import { type APActivity, isAPActivity } from "../activity.js";

export type APDislike = APActivity & { type: "Dislike" };

export const ActivityIsDislike = (activity: APActivity): activity is APDislike => {
	return isAPActivity(activity) && activity.type == "Dislike";
};
