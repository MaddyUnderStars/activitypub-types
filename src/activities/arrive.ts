import { type APObject } from "../object.js";
import { type APActivity, isAPActivity } from "../activity.js";

export type APArrive = APActivity & { type: "Arrive" };

export const isAPArrive = (activity: APObject): activity is APArrive => {
	return isAPActivity(activity) && activity.type == "Arrive";
};
