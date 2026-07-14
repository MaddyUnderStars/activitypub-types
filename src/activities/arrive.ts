import { type APObject, isAPObject } from "../object.js";
import { type APActivity } from "../activity.js";

export type APArrive = APActivity & { type: "Arrive" };

export const isAPArrive = (activity: APObject): activity is APArrive => {
	return isAPObject(activity) && activity.type == "Arrive";
};
