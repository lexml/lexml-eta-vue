<template>
  <form class="was-validated eta-search-form mt-3 mt-md-5 mb-3 mb-md-5">
    <input
      type="search"
      v-model="parametros.sigla"
      class="form-control eta-search-input"
      placeholder="Sigla"
      aria-label="Sigla"
      required
    />
    <input
      type="search"
      v-model="parametros.numero"
      class="form-control eta-search-input"
      placeholder="Número"
      aria-label="Número"
    />
    <input
      type="search"
      v-model="parametros.ano"
      class="form-control eta-search-input"
      placeholder="Ano"
      aria-label="Ano"
      required
    />
    <button
      type="button"
      :disabled="isDisabled"
      @click="pesquisar"
      class="btn btn-primary eta-search-button"
    >
      Pesquisar
    </button>
  </form>
</template>

<script setup lang="ts">
import { toRefs, computed } from 'vue';
import { useRouter } from 'vue-router';

interface IParametrosPesquisaProposicao {
  sigla?: string;
  numero?: string;
  ano?: number;
}

interface Props {
  parametros?: IParametrosPesquisaProposicao;
}

const props = withDefaults(defineProps<Props>(), {
  parametros: () => ({
    sigla: 'MPV',
    ano: new Date().getFullYear()
  })
});

const emit = defineEmits(['pesquisar']);

const { parametros } = toRefs(props);

const isDisabled = computed(() => !parametros.value?.sigla || !parametros.value?.ano);

const router = useRouter();
function pesquisar() {
  emit('pesquisar', { ...parametros.value });
  const { sigla, numero, ano } = parametros.value;
  router.push({
    name: 'PesquisaProposicao',
    query: { sigla, numero, ano }
  });
}
</script>

<style scoped src="../../assets/css/dashboard.css">
</style>
