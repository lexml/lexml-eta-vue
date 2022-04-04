import { Emenda, Proposicao } from "./../model/index";
import { getProposicaoFromObjeto } from "./typeUtils";
import { Router } from "vue-router";

export const criarEmenda = (
    item: Emenda | Proposicao,
    router: Router
): void => {
    if (item) {
        const { sigla, numero, ano } = getProposicaoFromObjeto(item);
        router.push({
            path: "/edicao",
            query: {
                sigla,
                numero,
                ano,
            },
        });
    }
};

export const abrirEmenda = (
    item: Emenda | Proposicao,
    payload: any,
    router: Router
): void => {
    if (item) {
        const { sigla, numero, ano } = getProposicaoFromObjeto(item);
        router.push({
            path: "/edicao",
            query: {
                sigla,
                numero,
                ano,
            },
            params: {
                emendaLexml: JSON.stringify(payload),
                titulo: payload.titulo,
            },
        });
    }
};
