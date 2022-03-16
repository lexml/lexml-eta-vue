<template>
    <div class="card-proposicao">
        <span class="card-proposicao-sigla">{{ getProposicaoFromObjeto(item).sigla }}</span>
        <div class="card-proposicao-body">
            <card-emenda v-if="isEmenda(item)" :emenda="getEmendaFromObjeto(item)" />
            <card-proposicao :proposicao="getProposicaoFromObjeto(item)" />
            <acoes-permitidas-vue :item="item" :acoes-permitidas="acoesPermitidas" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Proposicao, Emenda, AcaoPermitida } from "../../model";
import { getProposicaoFromObjeto, isEmenda } from "../../utils/typeUtils";

import CardEmenda from '../../components/comuns/CardEmenda.vue';
import CardProposicao from '../../components/comuns/CardProposicao.vue';
import AcoesPermitidasVue from '../../components/comuns/AcoesPermitidas.vue';

interface Props {
    item: Proposicao | Emenda;
    acoesPermitidas: Array<AcaoPermitida>;
}

// const CardEmenda = defineAsyncComponent(
//     () => import("../../components/comuns/CardEmenda.vue")
// );

// const CardProposicao = defineAsyncComponent(
//     () => import("../../components/comuns/CardProposicao.vue")
// );

// const AcoesPermitidasVue = defineAsyncComponent(
//     () => import("../../components/comuns/AcoesPermitidas.vue")
// );

const props = defineProps<Props>();
const item = ref(props.item);
const acoesPermitidas = ref(props.acoesPermitidas);

function getEmendaFromObjeto(objeto: Proposicao | Emenda) {
    return objeto as Emenda;
}
</script>

<style scoped src="../../assets/css/listaproposicao.css">
</style>
