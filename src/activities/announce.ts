import { type APObject, isAPObject } from "../object.js";
import { type APActivity } from "../activity.js";

export type APAnnounce = APActivity & { type: "Announce" };

export const isAPAnnounce = (activity: APObject): activity is APAnnounce => {
	return isAPObject(activity) && activity.type == "Announce";
};
