<template>
  <q-page class="page bg-dark">
    <q-card v-if="launch" class="launch" flat>
      <q-card-section>
        <div class="text-h1 text-white">{{ launch.name }}</div>
      </q-card-section>
      <q-card-section class="info text-white">
        <div>
          <span class="text-weight-bold">Rocket:</span> {{ launch.rocket.name }}
        </div>
        <div>
          <span class="text-weight-bold">Rocket type:</span> {{ launch.rocket.type }}
        </div>
        <div>
          <span class="text-weight-bold">Launch date:</span> {{ launch.date }}
        </div>
        <div>
          <span class="text-weight-bold">Launch site:</span> {{ launch.launchSite.longName }}
        </div>
      </q-card-section>
      <q-card-section v-if="launch.rocket.image.url">
        <q-img :src="launch.rocket.image.url"/>
      </q-card-section>
    </q-card>
    <div v-else-if="!loading" class="text-white text-h1">
      Launch not found.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useResult } from '@vue/apollo-composable'

import { useLaunchQuery } from 'src/graphql'

export const getIdFromSlug = (slug: string): string => {
  return slug.split('-')[0]
}

export default defineComponent({
  name: 'LaunchDetail',
  setup () {
    const route = useRoute()
    const { result, loading } = useLaunchQuery({ id: getIdFromSlug(route.params.id as string) })
    const launch = useResult(result, null, data => data.launch)

    return { launch, loading }
  },
})
</script>

<style lang="scss" scoped>
@import 'src/css/quasar.variables';

.page {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 32px 0;

  .launch {
    width: 100%;
    max-width: 1200px;
    background: $grey-10;
    border: 1px solid $grey-9;
    border-radius: 8px;
    padding: 16px;
  }
}
</style>
