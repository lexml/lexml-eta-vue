export interface Proposicao {
    idIdentificacao: number;
    descricaoIdentificacao: string;
    descricaoIdentificacaoExtensa: string;
    sigla: string;
    numero: string;
    ano: number;
    ementa: string;
    idSdlegDocumentoDigital?: string;
    idSdlegDocumentoItemDigital?: string;
    urlDownloadItemDigitalZip?: string;
}

export type AcaoPermitida =
    | "abrir"
    | "emendar"
    | "excluir"
    | "salvar"
    | "compartilhar"
    | "autenticar"
    | "exibirQuadroEmendas";

export type TipoCard =
    | "MinhasEmendas"
    | "PrazoEmendaAberto"
    | "EmTramitacao"
    | "Parametrizada"
    | undefined;

export interface ParametrosPesquisa {
    tipoPesquisa: TipoCard;
    sigla: string;
    numero?: string;
    ano: number;
    pagina?: number;
}
export interface DadosCard {
    tipo: TipoCard;
    titulo: string;
    totalItens: number;
    lista: Proposicao[] | Emenda[];
    parametros: ParametrosPesquisa;
}

export interface RootState {
    version: string;
}
export interface DashBoardState {
    cardAtivo: DadosCard;
}

export interface Emenda {
    titulo: string;
    proposicao: Proposicao;
}
