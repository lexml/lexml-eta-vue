export interface ProposicaoBasica {
  sigla: string;
  numero: string;
  ano: number;
  ementa: string;
}

export interface Proposicao extends ProposicaoBasica {
  idIdentificacao: number;
  descricaoIdentificacao: string;
  descricaoIdentificacaoExtensa: string;
  idSdlegDocumentoDigital?: string;
  idSdlegDocumentoItemDigital?: string;
  urlDownloadItemDigitalZip?: string;
}

export type AcaoPermitida =
  | "abrir"
  | "abrirDoDisco"
  | "editar"
  | "removerEmendaDaLista"
  | "excluir"
  | "salvar"
  | "compartilhar"
  | "autenticar"
  | "criarEmenda"
  | "exibirQuadroEmendas";

export type TipoCard = "MinhasEmendas" | "PrazoEmendaAberto" | "EmTramitacao" | "Parametrizada";

export interface ConfigCard {
  tipo: TipoCard;
  titulo: string;
  subtitulo?: string;
  totalItens: number;
  icone?: string;
}

export interface DadosCard extends ConfigCard {
  lista: Proposicao[] | EmendaEmDisco[];
  parametros?: ParametrosPesquisaProposicao;
}
export interface ParametrosPesquisaProposicao {
  sigla: string;
  numero?: string;
  ano: number;
  pagina?: number;
}

export interface RootState {
  version: string;
}
export interface DashBoardState {
  cardAtivo: DadosCard;

  proposicoesRecentes: Proposicao[];
  minhasEmendas: [];
  parametrosPesquisaProposicao: ParametrosPesquisaProposicao;
}

export interface DestinoEmenda {
  siglaCasaLegislativa: "CN" | "SF" | "CD";
  tipoColegiado: "Plenário" | "Comissão";
  siglaComissao?: string;
}

export enum TipoEmenda {
  EMENDA = "emenda",
  EMENDA_ARTIGO_ONDE_COUBER = "emendaArtigoOndeCouber",
}

type Genero = "M" | "F";
export interface RefProposicaoEmendada extends ProposicaoBasica {
  urn: string;
  genero: Genero;
  substitutivo: false;
  identificacaoTexto: string;
}

// TODO: Usar definição de "Emenda" do lexml-eta
export interface Emenda {
  tipo: TipoEmenda;
  numero?: number;
  proposicao: RefProposicaoEmendada;
  destino?: any;
  epigrafe?: any;
  dispositivos?: any;
  comandoEmenda?: any;
  justificativa?: "";
  local?: "";
  data?: string; // formato “YYYY-MM-DD”
  autoria?: any;
}
export type VersaoMetadadoEmenda = "1";
export interface MetadadosEmenda {
  versao: VersaoMetadadoEmenda;
  id?: string;
  titulo: string;
  path?: string;
  datAlteracao: Date;
  datUltimoAcesso: Date;
}
export interface EmendaEmDisco {
  metadados: MetadadosEmenda;
  projetoNorma?: any;
  emenda: Emenda;
}

export interface AppState {
  emendas: EmendaEmDisco[];
}
