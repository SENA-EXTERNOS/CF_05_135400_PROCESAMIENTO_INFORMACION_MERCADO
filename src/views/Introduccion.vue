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
        p.mb-0 Bienvenido al presente componente formativo que hace parte del programa ‘procesamiento de información de mercados’, este espacio estará enfocado en desarrollar la competencia de aprendizaje que permite fortalecer habilidades para clasificar la información según la selección de fuentes internas y externas, así como establecer las pautas para separar la información cualitativa y cuantitativa teniendo en cuenta la seguridad y la validación  en la información obtenida del público objetivo.

    .row.mt-5
      .col-12
        .cajon.color-acento-contenido.p-4.mb-4
          p Este componente formativo se elabora con la intención de brindar herramientas para que los coordinadores, supervisores, técnicos, mandos medios, e, incluso miembros de juntas directivas de las empresas, puedan obtener de manera fácil información a través de estudios de mercadeo y clasificarla,  contribuyendo de esta manera en el crecimiento organizacional de las empresas y la generación de valor agregado a sus productos y servicios.   

    .row.mt-5
      .col-8
        p Existen factores que generan deficiencia en la planeación organizacional incidiendo negativamente en el mercadeo de sus productos y servicios, ocasionando desventajas competitivas frente a los actuales mercados globalizados. Esto genera la necesidad de fortalecer sus procesos de marketing que contribuyan a la transformación de estrategias integrales para impactar el incremento de la efectividad en sus operaciones. 
        p.mt-3 Lo invitamos a que visualice el video introductorio que se encuentra a continuación donde conocerá de manera general todos los temas que se desarrollarán en este componente formativo.
        p.mt-3 <b>Muchos éxitos en este proceso de aprendizaje.</b>
      .col-4
        img(src='@/assets/curso/introduccion/img-2.png', alt='img2')
    
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
