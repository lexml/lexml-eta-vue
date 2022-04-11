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
    | "editar"
    | "removerEmendaDaLista"
    | "excluir"
    | "salvar"
    | "compartilhar"
    | "autenticar"
    | "criarEmendaPadrao"
    | "criarEmendaArtigoOndeCouber"
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
    parametros?: ParametrosPesquisa;
}

export interface RootState {
    version: string;
}
export interface DashBoardState {
    cardAtivo: DadosCard;

    proposicoesRecentes: Proposicao[];
    minhasEmendas: [];
    parametrosPesquisaProposicao: IParametrosPesquisaProposicao;
}

export interface Emenda {
    id?: string;
    titulo: string;
    proposicao: Proposicao;
    projetoNorma?: any;
    emendaLexml?: any;
}

export interface IParametrosPesquisaProposicao {
    sigla?: string;
    numero?: string;
    ano?: number;
}

export interface EmendaEmDisco extends Emenda {
    path?: string;
    datAlteracao: Date;
    datUltimoAcesso: Date;
}

export interface AppState {
    emendas: EmendaEmDisco[];
}
