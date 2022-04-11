<template>
    <span class="proposicao-actions">
        <button
            v-if="acoesPermitidas.includes('editar')"
            type="button"
            class="btn btn-labeled proposicao-action"
            @click="_abrirEmenda"
        >
            <span class="btn-label">
                <svg class="bi proposicao-action-icon">
                    <use xlink:href="#folder2-open" />
                </svg>
            </span>
            Editar
        </button>
        <button
            v-if="acoesPermitidas.includes('excluir')"
            type="button"
            class="btn btn-labeled proposicao-action"
            @click="removerDaLista"
        >
            <span class="btn-label">
                <svg class="bi proposicao-action-icon">
                    <use xlink:href="#alarm" />
                </svg>
            </span>
            Remover da lista
        </button>

        <button
            v-if="acoesPermitidas.includes('criarEmendaPadrao')"
            type="button"
            class="btn btn-labeled proposicao-action"
            @click="_criarEmenda()"
        >
            <span class="btn-label">
                <svg class="bi proposicao-action-icon">
                    <use xlink:href="#journal-code" />
                </svg>
            </span>
            Emendar
        </button>
        <button
            v-if="acoesPermitidas.includes('criarEmendaArtigoOndeCouber')"
            type="button"
            class="btn btn-labeled proposicao-action"
            @click="_criarEmenda(true)"
        >
            <span class="btn-label">
                <svg class="bi proposicao-action-icon">
                    <use xlink:href="#journal-code" />
                </svg>
            </span>
            Emendar: Artigo "Onde Couber"
        </button>
        <button
            v-if="acoesPermitidas.includes('salvar')"
            type="button"
            class="btn btn-labeled proposicao-action"
            @click="_salvarEmenda"
        >
            <span class="btn-label">
                <svg class="bi proposicao-action-icon">
                    <use xlink:href="#save" />
                </svg>
            </span>
            Salvar
        </button>
        <button
            v-if="acoesPermitidas.includes('abrir')"
            type="button"
            class="btn btn-labeled proposicao-action"
            @click="abrirEmendaDoDisco"
        >
            <span class="btn-label">
                <svg class="bi proposicao-action-icon">
                    <use xlink:href="#folder2-open" />
                </svg>
            </span>
            Abrir emenda do disco
        </button>
        <input
            v-if="acoesPermitidas.includes('abrir')"
            type="file"
            id="fileUpload"
            accept="application/json"
            @change="selecionaArquivo($event)"
            style="display: none"
        />

        <!-- <button type="button" class="btn btn-labeled proposicao-action">
                    <span class="btn-label">
                        <svg class="bi proposicao-action-icon">
                            <use xlink:href="#alarm" />
                        </svg>
                    </span>
                    Excluir
                </button>
                <button type="button" class="btn btn-labeled proposicao-action">
                    <span class="btn-label">
                        <svg class="bi proposicao-action-icon">
                            <use xlink:href="#alarm" />
                        </svg>
                    </span>
                    Autenticar
                </button>
                <button type="button" class="btn btn-labeled proposicao-action">
                    <span class="btn-label">
                        <svg class="bi proposicao-action-icon">
                            <use xlink:href="#alarm" />
                        </svg>
                    </span>
                    Exibir emendas
                </button>
                <button type="button" class="btn btn-labeled proposicao-action">
                    <span class="btn-label">
                        <svg class="bi proposicao-action-icon">
                            <use xlink:href="#alarm" />
                        </svg>
                    </span>
                    Compartillhar
        </button>-->
    </span>
</template>

<script setup lang="ts">
import { useAppStore } from '../../stores/appStore';
import { ref } from 'vue';
import {
    AcaoPermitida,
    Emenda,
    EmendaEmDisco,
    Proposicao
} from "../../model";
import {
    criarEmenda,
    salvarEmenda,
    abrirEmenda,
    abrirEmendaDoDisco,
    selecionaArquivo
} from '../../utils/acoes';

interface Props {
    item?: Proposicao | Emenda;
    acoesPermitidas: Array<AcaoPermitida>;
}
const props = defineProps<Props>();
const acoesPermitidas = ref(props.acoesPermitidas);

function _criarEmenda(ondeCouber = false) {
    criarEmenda(props.item as Emenda, ondeCouber);
}

function _salvarEmenda() {
    salvarEmenda(props.item as Emenda);
}

function _abrirEmenda() {
    abrirEmenda(props.item as EmendaEmDisco);
}

const appStore = useAppStore();
function removerDaLista() {
    appStore.removerDaLista(props.item as Emenda);
}
</script>

<style scoped src="../../assets/css/actions.css">
</style>
