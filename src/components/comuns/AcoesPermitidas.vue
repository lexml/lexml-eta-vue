<template>
    <span class="proposicao-actions">
        <button
            v-if="acoesPermitidas.includes('emendar')"
            type="button"
            class="btn btn-labeled proposicao-action"
            @click="_criarEmenda"
        >
            <span class="btn-label">
                <svg class="bi proposicao-action-icon">
                    <use xlink:href="#journal-code" />
                </svg>
            </span>
            Emendar
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
            Abrir
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
import { ref } from 'vue';
import { AcaoPermitida, Emenda, Proposicao } from "../../model";
import {
    criarEmenda,
    salvarEmenda,
    abrirEmendaDoDisco,
    selecionaArquivo
} from '../../utils/acoes';

interface Props {
    item?: Proposicao | Emenda;
    acoesPermitidas: Array<AcaoPermitida>;
}
const props = defineProps<Props>();
const acoesPermitidas = ref(props.acoesPermitidas);

function _criarEmenda() {
    criarEmenda(props.item as Emenda);
}

function _salvarEmenda() {
    salvarEmenda(props.item as Emenda);
}
</script>

<style scoped src="../../assets/css/actions.css">
</style>
