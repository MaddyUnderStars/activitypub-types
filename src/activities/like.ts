import { type APObject, isAPObject } from "../object.js";
import { type APActivity } from "../activity.js";

export type APLike = APActivity & { type: "Like" };

export const isAPLike = (activity: APObject): activity is APLike => {
	return isAPObject(activity) && activity.type == "Like";
};
