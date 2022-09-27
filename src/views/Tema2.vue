<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tipos de datos
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          img(src='@/assets/curso/temas/t2/img-1.png' alt='img-1')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p En el proceso de recolección de datos se debe establecer el tipo de información que se quiere estudiar, dependiendo de los resultados que se esperan recoger. Esta decisión está relacionada directamente con los objetivos propuestos desde un inicio en la investigación. Los tipos de datos más utilizados son: los textuales, conocidos como datos cualitativos, y los numéricos, llamados datos cuantitativos.
    .bloque-texto-b.color-secundario.p-4
      .bloque-texto-b__texto
        i.fas.fa-quote-left
          h2.mb-0 Can we all just agree as the greater design community to stop talking about Comic Sans altogether?
        i.fas.fa-quote-right
    h2 1.1  Cualitativos

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
