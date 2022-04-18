import { defineStore } from "pinia";
import { AppState, EmendaEmDisco } from "../model";

const ordernarEmendas = (_emendas: EmendaEmDisco[]): EmendaEmDisco[] => {
  const emendas = [..._emendas];
  emendas.sort((e1, e2) => {
    const d1 = new Date(e1.metadados!.datUltimoAcesso);
    const d2 = new Date(e2.metadados!.datUltimoAcesso);
    return d2.getTime() - d1.getTime();
  });
  return emendas;
};

const salvarEmendasNoLocalStorage = (_emendas: EmendaEmDisco[]): void => {
  window.localStorage.setItem("emendas", JSON.stringify(_emendas));
};

export const useAppStore = defineStore({
  id: "appStore",
  state: (): AppState => ({
    emendas: [],
  }),
  getters: {},
  actions: {
    adicionarEmenda(_emenda: EmendaEmDisco) {
      const emenda = { ..._emenda };
      const indexAtual = this.emendas.findIndex((e) => e.metadados?.id === emenda.metadados?.id);

      if (indexAtual >= 0) {
        this.emendas[indexAtual] = emenda;
      } else {
        this.emendas.push(emenda);
      }

      this.emendas = ordernarEmendas(this.emendas);
      salvarEmendasNoLocalStorage(this.emendas);
    },
    lerEmendas(): EmendaEmDisco[] {
      this.emendas = JSON.parse(window.localStorage.getItem("emendas") || "[]");
      return this.emendas;
    },
    removerDaLista(_emenda: EmendaEmDisco) {
      this.emendas = this.emendas.filter((e) => e.metadados?.id !== _emenda.metadados?.id);
      salvarEmendasNoLocalStorage(this.emendas);
    },
  },
});
