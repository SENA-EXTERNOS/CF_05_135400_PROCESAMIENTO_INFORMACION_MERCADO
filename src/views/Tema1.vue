<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fuentes de información

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t1/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Cuando se inicia una investigación de mercados en una empresa, donde la finalidad es aportar valor y crecimiento a los intereses de la misma en relación a los productos y servicios que presta, es imprescindible realizar una elección adecuada de fuentes de información que genere datos oportunos y confiables, ya que de esto dependerá en gran medida el éxito del estudio.

    .row.mt-5
      .col-12
        .cajon.color-acento-contenido.p-4.mb-4
          p Una fuente de información corresponde al origen del suministro de datos que son requeridos en una investigación para cumplir un objetivo trazado en una organización.  En su selección se recomienda organizar la información desde que se obtiene y seleccionarla de acuerdo a la utilidad establecida. Además de tener en cuenta su origen para dar los créditos respectivos si es necesario.

    .row.mt-5
      .col-12.text-center
        .subtitle-custom Algunas recomendaciones de las fuentes de información son:
    .row.mt-5
      .col-12
        img(src='@/assets/curso/temas/t1/img-2.svg', alt='img2')
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
