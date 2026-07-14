import { type APObject, isAPObject } from "../object.js";
import { type APActivity } from "../activity.js";

export type APCreate = APActivity & { type: "Create" };

export const isAPCreate = (activity: APObject): activity is APCreate => {
	return isAPObject(activity) && activity.type == "Create";
};
