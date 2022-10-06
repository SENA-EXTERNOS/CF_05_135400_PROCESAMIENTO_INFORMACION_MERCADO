<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Seguridad de datos
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t3/img-1.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 La seguridad de la información es el grupo de medidas preventivas que permiten proteger la información recolectada en un estudio de investigación de mercado, intentando conservar la confidencialidad de datos obtenidos Tiene un impacto relevante en relación a su privacidad, la que puede generar efectos secundarios contraproducentes en el mal manejo de la información recolectada. El medio de la seguridad de la información ha trascendido y evolucionado de manera considerable desde la Segunda Guerra Mundial, convirtiéndose en un asunto de gran importancia en las organizaciones en general. A su vez, ha dado la oportunidad de  crear líneas de especialización enfocada a auditorías en los sistemas de información, gestión de seguridad en la información, etc.
    
    .titulo-segundo.color-secundario.mb-5
      h2 3.1 Clasificación
    .row
      .cajon-b.color-secundario.p-3.mb-3
        p.mb-0 La ISO 27001 (2013), establece un Sistema de Gestión de la Seguridad en Información, convirtiéndose en una guía para el manejo adecuado de los datos en cualquier tipo de organización.
          br
          br
      | Según esta norma, existen diferentes criterios para clasificar la información, uno de los más empleados está basado en la confidencialidad de la información. Para establecer una adecuada categorización , es recomendable llevar a cabo los siguientes pasos:
    .row.d-flex.justify-content-center.align-items-center
      .col-6
        .subtitle-custom.text-center.mt-5 Clasificación de la información
          img.mb-5(src='@/assets/curso/temas/t3/img-2.png', alt='img2')

    .titulo-segundo.color-secundario
      h2 3.2 Confidencialidad de la información
    .tarjeta.confidencialidad.p-3
      .row.justify-content-around.align-items-center
        .col
          .row.justify-content-between.align-items-center
            .col
              p.text La confidencialidad de la información garantiza que aquella que es obtenida en un proceso de recolección de información será protegida, al no ser divulgada sin autorización de una persona. Para ello existen reglas, en las cuales actualmente la ISO 27001 (2013) la establece como un tipo de riesgo sensible que en algunos casos incluye datos financieros, operativos, sobre empleados, clientes, proveedores, 
              p.text Según la ISO 27001 (2013) este tipo de riesgos está dentro de la clasificación CID (Confidencialidad, Integridad y disponibilidad). En la cual la norma establece una guía basada en el ciclo PHVA para proporcionar un enfoque en la mejora continua.
            .col-sm-auto
              img(src='@/assets/curso/temas/t3/img-3.svg', alt='img3')

    .row.mt-5.mb-5
      .col-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
           
    .titulo-segundo.color-secundario.mb-5
      h2 3.3 Validación de datos

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-acento-botones.p-5
        .row.justify-content-center.mb-4
          
        p.mb-5 La validación de datos hace referencia al proceso que se realiza para evitar la introducción de información  incorrecta en un estudio.
        p Esto exige un proceso de aseguramiento para la exactitud de lo registrado. Por lo tanto, se trata de un proceso que asegura el ingreso correcto de datos, además de que sean útiles, de acuerdo con el propósito del estudio.  Esto se consigue mediante las conocidas ‘reglas de validación’, “’restricciones de validación’ o ‘rutinas de comprobación’.

      .col-md.tarjeta.color-acento-contenido.p-5         
        p Existen algunos métodos que son útiles para este proceso, como las siguientes:
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | Formato de verificación.
          li 
            i.fas.fa-check
            | Comprobación de cantidad de caracteres introducidos.
          li 
            i.fas.fa-check
            | Verificación de tipo de carácter introducido.
          li 
            i.fas.fa-check
            | Revisión de rango, para que corresponda a los rangos establecidos.
          li 
            i.fas.fa-check
            | Incluir cuadro despegable en las opciones de respuesta, para reducir la probabilidad de cometer errores.

    p.mb-5 En la recolección de datos es posible que se presenten situaciones que pueden generar errores en la información, las cuales afectarían directamente el proceso de validación. A continuación, se hacen recomendaciones para reducirlos:

    .row 
      .col-6 
        figure
          img(src='@/assets/curso/temas/t3/img-7.svg')
      .col-6
        AcordionA.mb-5(tipo="b" clase-tarjeta="acordeon")
          .row(titulo="Reentrevistas")
            .col-md-11.mb-1.mb-md-0
              p Consiste en elaborar un plan de reentrevistas a un determinado número de elementos muestreados, en distintos días de la semana y en diferentes momentos. Esto minimiza los errores de no respuesta.

              
          .row(titulo="Recompensas e Incentivos")
            .col-md-11.mb-1.mb-md-0
              p Consiste en usar la estrategia de ofrecer un premio para estimular por la respuesta. Este puede ser un valor en efectivo para la persona que participe en el estudio.  

          .row(titulo="Entrenamiento en los entrevistadores")
            .col-md-11.mb-1.mb-md-0
              p Desarrollar habilidades en el entrevistador. Se relaciona con la calidad y cantidad de información que resulta de una encuesta.

          .row(titulo="Verificación de Datos")
            .col-md-11.mb-1.mb-md-0
              p Para la verificación de los cuestionarios diligenciados, estos se deben analizar, preferiblemente, por alguien distinto al entrevistador, para que sea un resultado objetivo.

</template>

<script>
export default {
  name: 'Tema3',
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
