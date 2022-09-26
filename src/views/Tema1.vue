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

    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          h2.mb-0 Según el Boletín Científico de las Ciencias Económico Administrativas del ICEA (Cruz García, 2019):  
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p ‘Las fuentes de información son instrumentos para el conocimiento, acceso y búsqueda de la información, su objetivo principal es el de buscar, fijar y difundir la fuente de información implícita en cualquier soporte físico, estas se pueden catalogar desde diferentes perspectivas, sin embargo, cada autor puede elaborar su propia clasificación dependiendo su grado de información. De acuerdo con el grado de información que proporcionan, las fuentes de información se dividen en primarias, secundarias y terciarias; esta división se utiliza generalmente en el ámbito académico.’ (p.57)
            
    p.mb-5 Las fuentes de información también son una herramienta para el razonamiento, análisis, búsqueda y entrada de información, como punto de partida para generación de hipótesis, conclusiones, informes, que pueden llevar a la solución de problemas o exploración de respuestas organizacionales. La selección de las mismas dependerá de la disponibilidad y el acceso de la información. 
    p.mb-5 Esto requiere un proceso objetivo y consecuente con los resultados que se estiman obtener. Es por ello necesario considerar sus características para lograr la mayor adaptación en los resultados. 

    h3.text-center Las características más destacadas son: la variabilidad de la información, la solución de problemas y la adaptación a las necesidades actuales. 
    .row.mt-5
      .col-12
        img(src='@/assets/curso/temas/t1/caracteristicas.svg')

    Separador.mb-5
    
    .titulo-segundo.color-secundario.mb-5
      h2 1.1  Título de segundo nivel, 24pt

    .row.mt-5
      .col-12
        img(src='@/assets/curso/temas/t1/infoPrimaria.svg')
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
