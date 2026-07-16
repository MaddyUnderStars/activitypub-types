import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		dir: "./test",
		reporters: process.env.GITHUB_ACTIONS ? ["default", "github-actions"] : ["dot"],
		coverage: {
			provider: "v8",
		},
	},
});
