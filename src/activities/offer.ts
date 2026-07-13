import { type APActivity, isAPActivity } from "../activity.js";

export type APOffer = APActivity & { type: "Offer" };

export const ActivityIsOffer = (activity: APActivity): activity is APOffer => {
	return isAPActivity(activity) && activity.type == "Offer";
};
