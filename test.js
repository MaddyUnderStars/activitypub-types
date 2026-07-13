import { isAPObject } from "./src/object.js";
import { isAPNote } from "./src/common/note.js";
import { isAPActor } from "./src/actor.js";
const note = { id: "https://example.com/note", type: "Note", content: "hi!" };
console.log(isAPObject(note));
console.log(isAPNote(note)); // true
const actor = { inbox: "https://example.com/inbox" };
console.log(isAPActor(actor)); // true
console.log(isAPObject(actor)); // false
//# sourceMappingURL=test.js.map
