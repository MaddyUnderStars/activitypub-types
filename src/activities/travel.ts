import { type APObject } from "../object.js";
import { type APActivity, isAPActivity } from "../activity.js";

export type APTravel = APActivity & { type: "Travel" };

export const isAPTravel = (activity: APObject): activity is APTravel => {
	return isAPActivity(activity) && activity.type == "Travel";
};
