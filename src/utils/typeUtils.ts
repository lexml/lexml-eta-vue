import { Proposicao, Emenda } from "../model/index";

export const isEmenda = (dado: unknown): boolean =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "titulo" in (dado as any) && "proposicao" in (dado as any);

export const getProposicaoFromObjeto = (
    objeto: Proposicao | Emenda
): Proposicao => {
    if (isEmenda(objeto)) {
        return (objeto as Emenda).proposicao;
    } else {
        return objeto as Proposicao;
    }
};

export const getObjetoAsEmenda = (
    objeto: Proposicao | Emenda
): Emenda | undefined => {
    if (isEmenda(objeto)) {
        return objeto as Emenda;
    } else {
        return undefined;
    }
};
