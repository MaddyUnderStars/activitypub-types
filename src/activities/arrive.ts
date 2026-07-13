import { type APActivity, isAPActivity } from "../activity.js";

export type APArrive = APActivity & { type: "Arrive" };

export const ActivityIsArrive = (activity: APActivity): activity is APArrive => {
	return isAPActivity(activity) && activity.type == "Arrive";
};
