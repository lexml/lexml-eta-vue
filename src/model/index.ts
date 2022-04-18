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

  // TODO: compatibilização com definição da classe RefProposicaoEmendada do lexml-eta
  //       fazer ajustes para evitar campos redundantes
  urn: string;
  identificacao: string;
  genero?: "M" | "F";
  substitutivo?: boolean;
  identificacaoTexto: string;
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
  lista: Proposicao[] | Emenda[];
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

// TODO: Usar definição de "Emenda" do lexml-eta
export interface EmendaLexml {
  tipo: TipoEmenda;
  numero?: number;
  proposicao: Proposicao;
  destino?: any;
  epigrafe?: any;
  dispositivos?: any;
  comandoEmenda?: any;
  justificativa?: "";
  local?: "";
  data?: string; // formato “YYYY-MM-DD”
  autoria?: any;
}
export interface Emenda extends EmendaLexml {
  id?: string;
  titulo: string;
}

export interface EmendaEmDisco extends Emenda {
  path?: string;
  datAlteracao: Date;
  datUltimoAcesso: Date;
}

export interface AppState {
  emendas: EmendaEmDisco[];
}
