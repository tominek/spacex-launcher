<template>
  <q-page class="row items-center justify-evenly bg-dark">
    <div class="list">
      <router-link
        v-for="launch in launches"
        :key="launch.id"
        :to="{name: 'LaunchDetail', params: {id: `${launch.id}-${launch.slug}`}}"
        class="launch"
      >
        <div class="header">
          <div class="text-h6">{{ launch.name }}</div>
          <div class="text-subtitle2 text-grey-6">{{ launch.date }}</div>
        </div>
        <div class="info">
          <div>
            <span class="text-weight-bold">Rocket:</span> {{ launch.rocket.name }}
          </div>
          <div>
            <span class="text-weight-bold">Launch site:</span> {{ launch.launchSite.longName }}
          </div>
        </div>
      </router-link>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useResult } from '@vue/apollo-composable'

import { useLaunchesQuery } from 'src/graphql'

export default defineComponent({
  name: 'Launches',
  setup () {
    const { result } = useLaunchesQuery()
    const launches = useResult(result, [], data => data.launches)

    return { launches }
  },
})
</script>

<style lang="scss" scoped>
@import 'src/css/quasar.variables';

.list {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  padding: 32px 0;

  .launch {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: $grey-10;
    border: 1px solid $grey-9;
    border-radius: 8px;
    padding: 16px;
    transition: 0.3s;
    cursor: pointer;
    color: white;
    text-decoration: none;

    &:hover {
      border: 1px solid $grey-6;
    }

    .header {
      display: flex;
      justify-content: space-between;
    }

    .info {
      display: flex;
      flex-direction: column;
    }
  }

  .launch + .launch {
    margin-top: 16px
  }
}
</style>
