<template>
    <div class="bloco-dash" @click="emitirEventoCardClick" ref="root">
        <span v-if="false" class="info-num-itens">{{ dados.totalItens }}</span>
        <span class="info-icone">{{ dados.icone }}</span>
        <span class="info-titulo">{{ dados.titulo }}</span>
        <span class="info-subtitulo">{{ dados.subtitulo }}</span>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Dados {
    titulo: string;
    subtitulo?: string;
    icone: string;
    totalItens: number;
    parametros: {
        sigla: string;
        numero?: string;
        ano: number;
    }
}
interface Props {
    dados: Dados;
}
const props = defineProps<Props>();
const root = ref<HTMLElement>();
const dados = { ...props.dados, tipo: 'Parametrizada' };

function emitirEventoCardClick() {
    root.value?.dispatchEvent(new CustomEvent('card-click', {
        bubbles: true,
        detail: {
            tipo: dados.tipo,
            titulo: dados.titulo,
            parametros: dados.parametros,
        },
    }));
}
</script>

<style scoped>
/* TODO: colocar estes estilos em arquivo separado */

.info-titulo {
    font-weight: bold;
}
.bloco-dash {
    flex: 1 0 calc(50% - 10px);
    margin: 5px;
    background-color: #fff;
    border-radius: 4px;
    padding: 1rem;
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
    border: 1px solid lightgray;
}

@media (min-width: 768px) {
    .bloco-dash {
        flex: 1 0 calc(30% - 10px);
    }
}

@media (min-width: 1024px) {
    .bloco-dash {
        flex: 1 0 calc(20% - 10px);
    }
}
</style>
