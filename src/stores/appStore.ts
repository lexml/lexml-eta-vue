import { defineStore } from "pinia";
import { AppState, EmendaEmDisco } from "@/model";

const ordernarEmendas = (_emendas: EmendaEmDisco[]): EmendaEmDisco[] => {
    const emendas = [..._emendas];
    emendas.sort((e1, e2) => {
        const d1 = new Date(e1.datUltimoAcesso);
        const d2 = new Date(e2.datUltimoAcesso);
        return d2.getTime() - d1.getTime();
    });
    return emendas;
};
export const useAppStore = defineStore({
    id: "appStore",
    state: (): AppState => ({
        emendas: [],
    }),
    getters: {},
    actions: {
        adicionarEmenda(_emenda: EmendaEmDisco) {
            const emenda = {
                ..._emenda,
                projetoNorma: null,
            };
            const indexAtual = this.emendas.findIndex(
                (e) => e.id === emenda.id
            );

            if (indexAtual >= 0) {
                this.emendas[indexAtual] = emenda;
            } else {
                this.emendas.push(emenda);
            }

            this.emendas = ordernarEmendas(this.emendas);
            window.localStorage.setItem(
                "emendas",
                JSON.stringify(this.emendas)
            );
        },
        lerEmendas(): EmendaEmDisco[] {
            this.emendas = JSON.parse(
                window.localStorage.getItem("emendas") || "[]"
            );
            return this.emendas;
        },
    },
});
