<template>
    <span class="proposicao-actions">
        <button
            v-if="acoesPermitidas.includes('emendar')"
            type="button"
            class="btn btn-labeled proposicao-action"
            @click="emendar"
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
            @click="salvar"
        >
            <span class="btn-label">
                <svg class="bi proposicao-action-icon">
                    <use xlink:href="#save" />
                </svg>
            </span>
            Salvar
        </button>

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
import { useRouter } from 'vue-router';
import { AcaoPermitida, Emenda, Proposicao } from "../../model";
import { getProposicaoFromObjeto } from '../../utils/typeUtils';
interface Props {
    item: Proposicao | Emenda;
    acoesPermitidas: Array<AcaoPermitida>;
}
const props = defineProps<Props>();
const acoesPermitidas = ref(props.acoesPermitidas);

const router = useRouter();

function emendar() {
    const { sigla, numero, ano } = getProposicaoFromObjeto(props.item);
    router.push({
        path: '/edicao',
        query: {
            sigla,
            numero,
            ano
        }
    });
}

function salvar() {
    console.log('teste');
}
</script>

<style scoped src="../../assets/css/actions.css">
</style>
