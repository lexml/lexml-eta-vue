module.exports = {
    transpileDependencies: true,
    chainWebpack: (config) => {
        config.module
            .rule("vue")
            .use("vue-loader")
            .tap((options) => {
                options["compilerOptions"] = {
                    ...(options.compilerOptions || {}),
                    isCustomElement: (tag) => tag.startsWith("lexml"),
                };
                return options;
            });
    },
};
