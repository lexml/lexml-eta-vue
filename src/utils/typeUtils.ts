import { ProposicaoBasica, Proposicao, EmendaEmDisco } from "../model/index";

export const isEmendaEmDisco = (dado: unknown): boolean =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  "emenda" in (dado as any);

export const getProposicaoBasicaFromObjeto = (objeto: Proposicao | EmendaEmDisco): ProposicaoBasica => {
  if (isEmendaEmDisco(objeto)) {
    return (objeto as EmendaEmDisco).emenda.proposicao;
  } else {
    return objeto as Proposicao;
  }
};

export const getObjetoAsEmenda = (objeto: Proposicao | EmendaEmDisco): EmendaEmDisco | undefined => {
  if (isEmendaEmDisco(objeto)) {
    return objeto as EmendaEmDisco;
  } else {
    return undefined;
  }
};
