import { type APObject } from "../object.js";
import { type APActivity, isAPActivity } from "../activity.js";

export type APCreate = APActivity & { type: "Create" };

export const isAPCreate = (activity: APObject): activity is APCreate => {
	return isAPActivity(activity) && activity.type == "Create";
};
