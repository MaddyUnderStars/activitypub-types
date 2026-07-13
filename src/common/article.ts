import { type APObject, isAPObject } from "../object.js";

export type APArticle = APObject & { type: "Article" };

export const isAPArticle = (object: APObject): object is APArticle => {
	return isAPObject(object) && object.type == "Article";
};
