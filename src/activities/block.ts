import { type APObject } from "../object.js";
import { type APActivity, isAPActivity } from "../activity.js";

export type APBlock = APActivity & { type: "Block" };

export const isAPBlock = (activity: APObject): activity is APBlock => {
	return isAPActivity(activity) && activity.type == "Block";
};
