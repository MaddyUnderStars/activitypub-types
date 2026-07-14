import { type APObject, isAPObject } from "../object.js";
import { type APActivity } from "../activity.js";

export type APTravel = APActivity & { type: "Travel" };

export const isAPTravel = (activity: APObject): activity is APTravel => {
	return isAPObject(activity) && activity.type == "Travel";
};
