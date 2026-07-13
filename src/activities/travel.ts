import { type APActivity, isAPActivity } from "../activity.js";

export type APTravel = APActivity & { type: "Travel" };

export const ActivityIsTravel = (activity: APActivity): activity is APTravel => {
	return isAPActivity(activity) && activity.type == "Travel";
};
