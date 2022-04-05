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
                    <a class="dropdown-item" href="#" @click.prevent="_abrirEmenda()">Editar</a>
                </li>
                <li>
                    <a class="dropdown-item disabled" href="#">Excluir</a>
                </li>
                <li>
                    <a class="dropdown-item disabled" href="#">Encaminhar</a>
                </li>
                <li>
                    <hr class="dropdown-divider" />
                </li>
                <li>
                    <a class="dropdown-item disabled" href="#">Nova emenda</a>
                </li>
            </template>
            <template v-else>
                <li>
                    <a class="dropdown-item disabled" href="#">Criar emenda</a>
                </li>
            </template>
            <li>
                <a class="dropdown-item ps-4" href="#" @click.prevent="_criarEmenda()">Padrão</a>
            </li>
            <li>
                <a
                    class="dropdown-item ps-4 disabled"
                    href="#"
                    @click.prevent="_criarEmendaOndeCouber()"
                >Onde couber</a>
            </li>
            <li>
                <a class="dropdown-item ps-4 disabled" href="#">Substitutivo</a>
            </li>
            <li>
                <hr class="dropdown-divider" />
            </li>
            <li>
                <a class="dropdown-item disabled" href="#">Quadro de emendas</a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { Proposicao, Emenda, EmendaEmDisco } from '@/model';
import { useRouter } from 'vue-router';
import { criarEmenda, abrirEmenda } from '../../utils/acoes';

interface Props {
    minhaEmenda?: boolean;
    item: Emenda | Proposicao;
}
const props = defineProps<Props>();

const router = useRouter();

function _criarEmenda() {
    criarEmenda(props.item, router);
}

function _abrirEmenda() {
    abrirEmenda(props.item as EmendaEmDisco, router);
}

function _criarEmendaOndeCouber() {
    console.log(11111, "teste");
}
</script>

<style scoped src="../../assets/css/dashboard.css">
</style>

