<template>
  <div />
</template>

<script>
import { defineComponent, onBeforeMount, useRouter } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const router = useRouter()
    onBeforeMount(() => {
      router.push('/auth/login')
    })
  }
})
</script>

