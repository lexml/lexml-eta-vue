<template>
    <div v-if="sigla && numero && ano">
        <editor-emenda-edicao
            :sigla="sigla"
            :numero="numero"
            :ano="ano"
            :emenda-modificada="JSON.parse(route.params.emendaModificada)"
        />
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const EditorEmendaEdicao = defineAsyncComponent(
    () => import("./EditorEmendaEdicao.vue")
);

const route = useRoute();

const sigla = ref<string>();
const numero = ref<string>();
const ano = ref<number>();

watch(() => route.query, (query) => {
    sigla.value = query.sigla?.toString();
    numero.value = query.numero?.toString();
    ano.value = Number(query.ano?.toString());
}, {
    immediate: true
});
</script>
