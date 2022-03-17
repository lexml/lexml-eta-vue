module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/lexml-eta-vue/' : '/',
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
