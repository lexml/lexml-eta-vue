<template>
    <div v-if="sigla && numero && ano">
        <editor-emenda-edicao
            :sigla="sigla"
            :numero="numero"
            :ano="ano"
            :onde-couber="ondeCouber"
            :emenda-lexml="emendaLexml"
            :titulo="(route.params.titulo as string)"
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
const ondeCouber = ref<boolean | undefined>();
const emendaLexml = ref<object>();

watch(() => route.query, (query) => {
    sigla.value = query.sigla?.toString();
    numero.value = query.numero?.toString();
    ano.value = Number(query.ano?.toString());
    if ('ondeCouber' in query && query.ondeCouber) {
        ondeCouber.value = !!query.ondeCouber;
    }
    if (route.params.emendaLexml) {
        emendaLexml.value = JSON.parse(route.params.emendaLexml as string || '{}');
    }
}, {
    immediate: true
});
</script>
