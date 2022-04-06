<template>
    <div class="dropdown">
        <a
            class
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            title="Menu de ações"
        >
            <span class="context-menu" />
        </a>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <template v-if="props.minhaEmenda">
                <li>
                    <a class="dropdown-item" href="#" @click.prevent.stop="_abrirEmenda">Editar</a>
                </li>
                <li>
                    <!-- <a class="dropdown-item disabled" href="#">Excluir</a> -->
                    <a
                        class="dropdown-item"
                        href="#"
                        @click.prevent.stop="_removerDaLista"
                    >Remover da lista</a>
                </li>
                <li @click.prevent.stop>
                    <a class="dropdown-item disabled" href="#">Encaminhar</a>
                </li>
                <li>
                    <hr class="dropdown-divider" />
                </li>
                <li @click.prevent.stop>
                    <a class="dropdown-item disabled" href="#">Nova emenda</a>
                </li>
            </template>
            <template v-else>
                <li @click.prevent.stop>
                    <a class="dropdown-item disabled" href="#">Criar emenda</a>
                </li>
            </template>
            <li>
                <a
                    class="dropdown-item ps-4"
                    href="#"
                    @click.prevent.stop="criarEmenda(props.item);"
                >Padrão</a>
            </li>
            <li>
                <a
                    class="dropdown-item ps-4"
                    href="#"
                    @click.prevent.stop="criarEmenda(props.item, true);"
                >Artigo "Onde couber"</a>
            </li>
            <li @click.prevent.stop>
                <a class="dropdown-item ps-4 disabled" href="#">Substitutivo</a>
            </li>
            <li>
                <hr class="dropdown-divider" />
            </li>
            <li @click.prevent.stop>
                <a class="dropdown-item disabled" href="#">Quadro de emendas</a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { Proposicao, Emenda, EmendaEmDisco } from '../../model';
import { criarEmenda, abrirEmenda } from '../../utils/acoes';
import { useAppStore } from '../../stores/appStore';

interface Props {
    minhaEmenda?: boolean;
    item: Emenda | Proposicao;
}
const props = defineProps<Props>();

function _abrirEmenda() {
    abrirEmenda(props.item as EmendaEmDisco);
}

const appStore = useAppStore();
function _removerDaLista() {
    appStore.removerDaLista(props.item as Emenda);
}
</script>

<style scoped src="../../assets/css/dashboard.css">
</style>

