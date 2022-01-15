<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-grey-9">
      <q-toolbar>
        <q-toolbar-title>
          <router-link :to="{name: 'Launches'}" class="text-white">
            SpaceX Launcher
          </router-link>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    return {}
  },
})
</script>
