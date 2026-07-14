import { type APObject } from "../object.js";
import { type APActivity, isAPActivity } from "../activity.js";

export type APLike = APActivity & { type: "Like" };

export const isAPLike = (activity: APObject): activity is APLike => {
	return isAPActivity(activity) && activity.type == "Like";
};
