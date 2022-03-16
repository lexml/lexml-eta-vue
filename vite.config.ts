import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import EnvironmentPlugin from "vite-plugin-environment";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => tag.startsWith("lexml"),
                },
            },
        }),
        EnvironmentPlugin([
            "VUE_APP_BASE_URL_API",
        ]),
    ],
});
