<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5P
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tipos de datos
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t2/img-1.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 En el proceso de recolección de datos se debe establecer el tipo de información que se quiere estudiar, dependiendo de los resultados que se esperan recoger. Esta decisión está relacionada directamente con los objetivos propuestos desde un inicio en la investigación. Los tipos de datos más utilizados son: los textuales, conocidos como datos cualitativos, y los numéricos, llamados datos cuantitativos.
    
    
    
    .bloque-texto-l.d-flex.mt-5
      i.fas.fa-quote-left
      .text-regular.px-3.mt-3.w-60 Según el artículo ‘Metodología de la Investigación en las ciencias sociales’(Escuela de Administración de Negocios, 2008) establece que:
    .row.justify-content-end.align-items-end
      .col-8
        .bloque-texto-m.d-flex.bg-adicional-3.p-4.align-items-end
          p.mb-0 ‘Desde un punto de vista científico, la investigación es un proceso que nos permite aplicar el método y las técnicas científicas adecuadas para encontrar respuesta al problema inicialmente planteado: El uso de unas técnicas u otras define el tipo de investigación que estamos realizando’. (p.9)
          i.fas.fa-quote-right
    Separador.my-3
    .titulo-segundo.color-secundario.mb-5
      h2 2.1 Cualitativos
    .row.mt-5
      .col-12.col-sm-12.col-md-4
        img(src='@/assets/curso/temas/t2/img-2.png', alt='img2')
      .col-12.col-sm-12.col.col-md-8
        p La recopilación de datos cualitativos se emplea en aquellos estudios en los cuales no es posible cuantificar la información o cuando no se dispone de ella. Generalmente las técnicas utilizadas para su recolección están dadas para generar predicciones basadas en opiniones individuales que sirvan como base de estudio para una investigación más profunda.
        p.mt-3 En algunos casos la experiencia y conocimientos de expertos contribuyen en la solución de problemas en la obtención de información relevante de algún segmento de mercado, además facilita la detección de factores negativos en un estudio o establece pronósticos en las tendencias de mercados.
    p.mt-5 Una de las técnicas más empleada es el método Delphi, en el cual se aplican las siguientes etapas:
    TabsB.color-acento-contenido.mt-4
      .py-4.py-md-5(titulo="Se realiza la selección de los expertos." :icono="require('@/assets/curso/temas/t2/img-3.png')")
      .py-4.py-md-5(titulo="Se realiza la entrevista." :icono="require('@/assets/curso/temas/t2/img-4.svg')")
      .py-4.py-md-5(titulo="Se obtienen respuestas." :icono="require('@/assets/curso/temas/t2/img-5.svg')")
      .py-4.py-md-5(titulo="Se obtienen resultados." :icono="require('@/assets/curso/temas/t2/img-6.svg')")
    .row.d-flex.justify-content-center.align-items-center
      .col-6
        p.text-bold El método Delphi consiste en reunir a expertos de diferentes disciplinas para lograr dar respuesta o solucionar un problema determinado, a través de la lluvia de ideas que se genere en esa reunión.
    .row.d-flex.justify-content-center.align-items-center.mt-5
      .col-4
        img(src='@/assets/curso/temas/t2/img-9.png', alt='img9')
    .row.d-flex.justify-content-center.align-items-center.mt-5
      .col-8
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/t2/img-7.svg', alt='img-7')
          .tarjeta.color-primario.p-3(x="12%" y="1%" numero="1")
            p.text-center.mb-0.text-bold Encuestas de preguntas abiertas
          .tarjeta.color-primario.p-3(x="37%" y="1%" numero="2")
            p.text-center.mb-0.text-bold Observación cualitativa
          .tarjeta.color-primario.p-3(x="63%" y="1%" numero="3")
            p.text-center.mb-0.text-bold Técnica Delphi
          .tarjeta.color-primario.p-3(x="88%" y="1%" numero="4")
            p.text-center.mb-0.text-bold Entrevista
          .tarjeta.color-primario.p-3(x="25%" y="54%" numero="5")
            p.text-center.mb-0.text-bold Documentales
          .tarjeta.color-primario.p-3(x="50%" y="54%" numero="6")
            p.text-center.mb-0.text-bold <i>Focus Groups</i>
          .tarjeta.color-primario.p-3(x="75%" y="54%" numero="7")
            p.text-center.mb-0.text-bold Comunidades <i>Online</i>
    Separador.my-2
    .titulo-segundo.color-secundario.mb-5
      h2 2.2 Cuantitativos
    p.mb-5 La investigación cuantitativa implica el análisis de datos cuantificables exactos. Tiene por objeto recopilar y analizar información de tipo numérica basada en técnicas matemáticas y estadísticas, las cuales son utilizadas, generalmente, para determinar cantidades, frecuencias de consumos, precios, tamaños, contenidos, etc. Estas técnicas son requeridas en estudios de mercado para diversos propósitos como: la innovación, el relanzamiento, el posicionamiento, la diversificación, la generación de valor agregado, en productos y servicios con propósitos de mejora continua en las organizaciones.
    p.mb-5 El estudio de los datos cuantitativos requiere una serie de etapas, que conlleven al logro de los objetivos propuestos. A continuación, se presentan las etapas: 
    .row.d-flex.justify-content-center.align-items-center.mt-5
      .col-8
        img(src='@/assets/curso/temas/t2/img-8.png', alt='img-8')
    .row.mt-5
      .cajon-b.color-secundario.p-3
        p.mb-0 En la recolección de datos cuantitativos se pueden presentar errores generados en las anotaciones, tabulaciones o clasificaciones incorrectas. Estas anomalías son fácilmente identificables cuando por ejemplo se detectan repeticiones de algunos números, o máximos y mínimos extremos. Este tipo de errores se puede eliminar debido a que carecen de representatividad en las medidas utilizadas. 
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
