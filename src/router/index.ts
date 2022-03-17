import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "dashboard" */ "../views/dashboard/DashboardView.vue"
            ),
    },
    {
        path: "/edicao",
        name: "edicao",
        component: () =>
            import(
                /* webpackChunkName: "editorEmenda" */ "../views/emenda/EditorEmendaView.vue"
            ),
    },
];

interface ScrollPosition {
    left: number;
    top: number;
    behavior?: ScrollBehavior;
}

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        const promise = new Promise<ScrollPosition | false>((resolve) => {
            if (!savedPosition) {
                resolve(false);
            } else {
                const momentoInicial = new Date();
                let timer = 0;

                const recursiveScrollToPosition = () => {
                    clearInterval(timer);
                    const segundosDecorridos =
                        (new Date().getTime() - momentoInicial.getTime()) /
                        1000;
                    const height = document.body.scrollHeight;

                    /*
                        TODO: AVALIAR CUSTO BENEFÍCIO PARA IMPLEMENTAR ESSA CARACTERÍSTICA DE "ACESSIBILIDADE (?)"
                        melhor do que verificar a altura e tempo decorrido é avaliar se a tela já foi montada
                        para isso é necessário criar uma variável que indique esse estado de "tela montada" e acessá-la aqui
                    */
                    if (
                        segundosDecorridos < 2000 &&
                        height < savedPosition.top
                    ) {
                        timer = window.setTimeout(() => {
                            recursiveScrollToPosition();
                        }, 100);
                    } else {
                        resolve({ ...savedPosition, behavior: "auto" });
                    }
                };

                recursiveScrollToPosition();
            }
        });

        return promise;
    },
});

export default router;
