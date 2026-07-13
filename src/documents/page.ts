import { type APObject, isAPObject } from "../object.js";

export type APPage = APObject & { type: "Page" };

export const isAPPage = (object: APObject): object is APPage => {
	return isAPObject(object) && object.type == "Page";
};
