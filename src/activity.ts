import { type APObject, isObjectId, type ObjectField, type ObjectId } from "./object.js";

export type APActivity = APObject & {
	actor: ObjectId;

	object?: ObjectField;

	target?: ObjectField;

	result?: ObjectField;

	origin?: ObjectField;

	instrument?: ObjectField;

	oneOf?: ObjectField;

	anyOf?: ObjectField;

	closed?: Date | boolean | ObjectField;
};

export const isAPActivity = (obj: Record<string, unknown>): obj is APActivity => {
	return "actor" in obj && isObjectId(obj.actor) && !("attributedTo" in obj);
};
