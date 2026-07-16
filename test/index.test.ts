import { expect, test } from "vitest";
import { isAnyAPObject, isAPObject, isObjectField } from "../src/object.js";
import { isAPActivity } from "../src/activity.js";
import { isAPActor } from "../src/actor.js";
import { isAPCollection, isAPOrderedCollection } from "../src/collection.js";
import { isAPLink } from "../src/link.js";

[
	{ name: "empty object", input: {}, out: false },
	{ name: "string ID", input: { id: "https://example.com" }, out: true },
	{ name: "URL ID", input: { id: new URL("https://example.com") }, out: true },
	{ name: "null ID", input: { id: null }, out: false },
	{ name: "number ID", input: { id: 1 }, out: false },
].forEach(({ name, input, out }) => {
	test(`isAPObject ${name} should be ${out ? "truthy" : "falsy"}`, () => {
		expect(isAPObject(input)).toBe(out);
		expect(isAnyAPObject(input)).toBe(out);
	});
});

[
	{ name: "id", input: "https://example.com", out: true },
	{ name: "object", input: { id: "https://example.com" }, out: true },
].forEach(({ name, input, out }) => {
	test(`isObjectField ${name} should be ${out ? "truthy" : "falsy"}`, () => {
		expect(isObjectField(input)).toBe(out);
	});
});

[
	{ name: "actor", input: { actor: "https://example.com" }, out: true },
	{
		name: "attributedTo",
		input: { actor: "https://example.com", attributedTo: "https://example.com" },
		out: false,
	},
].forEach(({ name, input, out }) => {
	test(`isAPActivity ${name} should be ${out ? "truthy" : "falsy"}`, () => {
		expect(isAPActivity(input)).toBe(out);
	});
});

[{ name: "inbox", input: { inbox: "https://example.com" }, out: true }].forEach(
	({ name, input, out }) => {
		test(`isAPActor ${name} should be ${out ? "truthy" : "falsy"}`, () => {
			expect(isAPActor(input)).toBe(out);
		});
	},
);

[
	{ name: "totalItems", input: { totalItems: 0 }, out: true },
	{ name: "invalid totalItems", input: { totalItems: null }, out: false },
	{ name: "items", input: { items: [] }, out: true },
	{ name: "orderedItems", input: { orderedItems: [] }, out: true },
	{ name: "partOf", input: { partOf: "https://example.com" }, out: true },
	{ name: "invalid items", input: { items: [{}] }, out: false },
	{ name: "null items", input: { items: null }, out: false },
	{ name: "items with id", input: { items: ["https://example.com"] }, out: true },
].forEach(({ name, input, out }) => {
	test(`isAPCollection ${name} should be ${out ? "truthy" : "falsy"}`, () => {
		expect(isAPCollection(input)).toBe(out);
	});
});

[
	{ name: "items", input: { orderedItems: [] }, out: true },
	{ name: "null items", input: { orderedItems: null }, out: false },
	{ name: "invalid items", input: { orderedItems: [{}] }, out: false },
	{ name: "items with id", input: { orderedItems: ["https://example.com"] }, out: true },
	{ name: "items with obj", input: { orderedItems: [{ id: "https://example.com" }] }, out: true },
	{ name: "items with obj", input: { orderedItems: [undefined] }, out: false },
].forEach(({ name, input, out }) => {
	test(`isAPorderedCollection ${name} should be ${out ? "truthy" : "falsy"}`, () => {
		expect(isAPOrderedCollection(input)).toBe(out);
	});
});

[
	{ name: "href", input: { href: "https://example.com" }, out: true },
	{ name: "invalid href", input: { href: null }, out: false },
].forEach(({ name, input, out }) => {
	test(`isAPLink ${name} should be ${out ? "truthy" : "falsy"}`, () => {
		expect(isAPLink(input)).toBe(out);
	});
});
