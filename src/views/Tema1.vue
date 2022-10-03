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
        .cajon.color-acento-contenido.p-4.mb-4.col-sm-12
          p.mb-0 Una fuente de información corresponde al origen del suministro de datos que son requeridos en una investigación para cumplir un objetivo trazado en una organización.  En su selección se recomienda organizar la información desde que se obtiene y seleccionarla de acuerdo a la utilidad establecida. Además de tener en cuenta su origen para dar los créditos respectivos si es necesario.

    .row.mt-5
      .col-12.text-center
        .subtitle-custom Algunas recomendaciones de las fuentes de información son:
    .row.mt-5
      .col-12
        img(src='@/assets/curso/temas/t1/img-2.svg', alt='img2')
        .mt-5
    
    .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          h2.mb-0.text-color-acento-contenido Según el Boletín Científico de las Ciencias Económico Administrativas del ICEA (Cruz García, 2019): 
        .col-lg-8
          .bloque-texto-a__texto.p-5
            p.mb-0 ‘Las fuentes de información son instrumentos para el conocimiento, acceso y búsqueda de la información, su objetivo principal es el de buscar, fijar y difundir la fuente de información implícita en cualquier soporte físico, estas se pueden catalogar desde diferentes perspectivas, sin embargo, cada autor puede elaborar su propia clasificación dependiendo su grado de información. De acuerdo con el grado de información que proporcionan, las fuentes de información se dividen en primarias, secundarias y terciarias; esta división se utiliza generalmente en el ámbito académico.’ (p.57)

    p.mb-5 Las fuentes de información también son una herramienta para el razonamiento, análisis, búsqueda y entrada de información, como punto de partida para generación de hipótesis, conclusiones, informes, que pueden llevar a la solución de problemas o exploración de respuestas organizacionales. La selección de las mismas dependerá de la disponibilidad y el acceso de la información. 
    p.mb-5 Esto requiere un proceso objetivo y consecuente con los resultados que se estiman obtener. Es por ello necesario considerar sus características para lograr la mayor adaptación en los resultados. 
    .row.d-flex.justify-content-center.align-items-center
      .col-8
        .subtitle-custom.text-center Las características más destacadas son: la variabilidad de la información, la solución de problemas y la adaptación a las necesidades actuales. 
    .row.mt-5
      .col-12
        img(src='@/assets/curso/temas/t1/caracteristicas.svg' alt='caracteristicas')

    Separador.mb-5
    
    .titulo-segundo.color-secundario.mb-5
      h2 1.1 Información primaria
    .row.mt-5
      .col-12
        img(src='@/assets/curso/temas/t1/infoPrimaria.svg' alt='infoPrimaria')
    .row.mt-5
      .col-12
        img(src='@/assets/curso/temas/t1/img-3.svg' alt='img-3')
    .row.mt-5.d-flex.justify-content-center.align-items-center
      .col-8
        .subtitle-custom.text-center Para reunir datos primarios, es importante establecer tres elementos: identificar los métodos e instrumentos de investigación, elaborar un plan de muestreo y definir las técnicas para establecer contacto con la muestra.
    .row.mt-5.d-flex.justify-content-center.align-items-center
      .col-8 
        img(src='@/assets/curso/temas/t1/img-4.png' alt='img-4')
    .row.mt-5
      .cajon-b.color-secundario.p-3
        p.mb-0 Cuando se inicia la selección de las fuentes primarias que serán utilizadas como base en el estudio de investigación, es recomendable responder a los siguientes interrogantes, que darán una mayor orientación, enfoque y precisión al estudio.
    .row.mt-5
      .col-12
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | ¿La fuente seleccionada está relacionada con el objeto de estudio? 
          li 
            i.fas.fa-check
            | ¿Cómo? 
          li 
            i.fas.fa-check
            | ¿Su aporte es relevante?
          li 
            i.fas.fa-check
            | ¿La fuente está actualizada?
          li 
            i.fas.fa-check
            | ¿Contribuye a que el desarrollo del estudio sea rápido
          li 
            i.fas.fa-check
            | ¿Es objetiva
          li 
            i.fas.fa-check
            | <b>¿Proporciona información abundante?</b>

    .row.mt-5
      .col-6
        img(src='@/assets/curso/temas/t1/img-7.png' alt='img-7')
      .col-6
        p.mb-3.subtitle-custom Las fuentes primarias pueden presentarse a través de:
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Monografías")
            .col-md-12.mb-4.mb-md-0
              p Son documentos de un tema específico, en la cual se desarrolla en función de la perspectiva del autor. Es muy útil por el análisis e integración que hacen sobre el tema, debido a que es abordado de manera integral. La monografía facilita la recolección de la información de una manera amplia y con gran cobertura para profundizar en el contenido.
          .row(titulo="Obras de referencia")
            .col-md-12.mb-4.mb-md-0
              p Proporcionan datos específicos de una síntesis de datos relacionados entre sí. La información proviene generalmente de fuentes primarias y se puede representar a través de un esquema determinado. Ejemplos: enciclopedias, diccionarios, manuales, bases de datos bibliográficas, etc.
          .row(titulo="Fotografías")
            .col-md-12.mb-4.mb-md-0
              p Generalmente complementan la información escrita ya que sirve de apoyo visual. Puede hacer referencia a diversos temas. La fotografía se emplea como un segmento auxiliar del contenido de revistas, libros, etc. Aunque también se maneja de forma independiente.
          .row(titulo="Métodos de recolección de información")
            .col-md-12.mb-4.mb-md-0
              p En la recolección de información primaria en una investigación, generalmente se desarrolla la observación, encuestas o entrevistas a la muestra o población seleccionada.
          .row(titulo="Encuesta")
            .col-md-12.mb-4.mb-md-0
              p Es un instrumento en la cual se registran situaciones que pueden ser observadas o se cuestiona a la persona seleccionada para el estudio. La encuesta es un método descriptivo en el que se detectan ideas, necesidades, gustos, hábitos de uso, preferencias, etc.  Utilizando procedimientos estructurados de interrogación en aras de obtener mediciones cuantitativas partiendo de la variedad de variables definidas. Estos datos posteriormente podrán ser clasificados, interpretados y analizados.
              p <b>Las características de una encuesta son:</b>
                ul.lista-ul.my-3
                  li 
                    i.fas.fa-angle-right
                    | La encuesta representa una observación indirecta de la realidad por medio de lo que manifiestan los encuestados.
                  li
                    i.fas.fa-angle-right
                    | Es un método diseñado para una investigación específica
                  li
                    i.fas.fa-angle-right
                    | Se adapta a una aplicación masiva a través de un sistema de muestreo.
                  li
                   
                    i.fas.fa-angle-right
                    | Es posible que la aplicación llegue a la subjetividad de la población seleccionada, lo que permitirá mayor precisión en la información obtenida.
                  
            P <b>Las encuestas se pueden desarrollar de las siguientes formas:</b>
              ol.lista-ol.my-3
                li
                  span.text-bold 1.
                  | Entrevista personal
                li
                  span.text-bold 2.
                  | Entrevista por teléfono
                li
                  span.text-bold 3.
                  | Cuestionario por correo
                li
                  span.text-bold 4.
                  | Observación directa.
                li
                  span.text-bold 5.
                  | Vía electrónica.
    Separador.mb-5       
    .titulo-segundo.color-secundario.mb-5        
      h2 1.2 Información secundaria
    p Las fuentes secundarias son aquellas que dependen de información existente, como pueden ser datos obtenidos de anuarios estadísticos, de internet, de medios de comunicación, monografías, etc.
    p Como complemento a esta definición la  Universidad Autónoma del estado de Hidalgo, (2008) afirma en su documento ‘Fuentes de Información’ que “Este tipo de fuentes son las que ya han procesado información de una fuente primaria. El proceso de esta información se pudo dar por una interpretación, un análisis, así como la extracción y reorganización de la información de la fuente primaria” (p.3).
    .subtitle-custom.text-center.mt-5 Ejemplos de fuentes secundarias
    .row.mt-5
      .col-12 
        img(src='@/assets/curso/temas/t1/img-6.png' alt='img-6')
    .row.mt-5
      .col-6
        img(src='@/assets/curso/temas/t1/img-8.png' alt='img-8')
      .col-6
        .cajon-b.color-secundario.p-3.mb-4
          p.mb-0.text-bold Para emplear las fuentes de información se debe analizar los siguientes interrogantes básicos que son:
        .row
          .col-12
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | ¿Es pertinente la información existente en la investigación?
              li 
                i.fas.fa-check
                |¿La información se adapta a los objetivos establecidos en la investigación?
              li 
                i.fas.fa-check
                |¿Está actualizada en relación a la vigencia del tema en estudio?
              li 
                i.fas.fa-check
                |¿La veracidad de la fuente ha sido cuestionada por algún autor?
              li 
                i.fas.fa-check
                |¿La información se obtuvo a través de metodologías adecuadas
              li 
                i.fas.fa-check
                |¿La información compromete a un público específico
              li 
                i.fas.fa-check
                |¿La información obtenida es ética
              li 
                i.fas.fa-check
                |¿Guarda objetividad?
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
