import { type APObject, isAPObject } from "../object.js";

export type APRelationship = APObject & { type: "Relationship" };

export const isAPRelationship = (object: APObject): object is APRelationship => {
	return isAPObject(object) && object.type == "Relationship";
};
