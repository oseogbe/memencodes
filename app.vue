<template>  
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
  onMounted(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400
    })

    sr.reveal(`.profile__border`)
    sr.reveal(`.profile__name`, { delay: 500 })
    sr.reveal(`.profile__profession`, { delay: 800 })
    sr.reveal(`.profile__social`, { delay: 700 })
    sr.reveal(`.profile__info-group`, { interval: 100, delay: 600 })
    sr.reveal(`.profile__buttons`, { delay: 800 })
    sr.reveal(`.profile__content`, { delay: 900 })
    sr.reveal(`.packages`, { delay: 1000 })
    sr.reveal(`.filters`, { delay: 50 })
  })
</script>

<style lang="scss" scoped>

</style>