<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/introduccion/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Apreciado aprendiz, bienvenido a este componente formativo, donde se brindar herramientas para que los coordinadores, supervisores, técnicos, mandos medios, e, incluso miembros de juntas directivas de las empresas, puedan obtener de manera fácil información a través de estudios de mercadeo y clasificarla, contribuyendo de esta manera en el crecimiento organizacional de las empresas y la generación de valor agregado a sus productos y servicios.

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-4
        figure
          img(src='@/assets/curso/introduccion/img-2.png', alt='img2')

      .col-lg-8
        p Existen factores que generan deficiencia en la planeación organizacional, incidiendo negativamente en el mercadeo de sus productos y servicios, ocasionando desventajas competitivas frente a los actuales mercados globalizados. Esto genera la necesidad de fortalecer sus procesos de marketing que contribuyan a la transformación de estrategias integrales para impactar el incremento de la efectividad en sus operaciones. 

    .row.mt-5
      p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.       

    .row.mt-5
      .col-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
