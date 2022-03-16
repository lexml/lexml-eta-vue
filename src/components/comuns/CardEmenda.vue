<template>
    <div class="card-proposicao-header">
        <span class="card-proposicao-title">{{ emenda.titulo }}</span>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Emenda } from "../../model";

interface Props {
    emenda: Emenda;
}

const props = defineProps<Props>();
const emenda = ref(props.emenda);
</script>

<style scoped src="../../assets/css/listaproposicao.css">
</style>
