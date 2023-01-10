export default {
  global: {
    componenteFormativo: 'Clasificación de la información recolectada',
    descripcionCurso:
      'Las empresas deben responder al mundo globalizado que exige permanentemente una alta competitividad. Es importante el reconocimiento de sus mercados a través de indagaciones que generen información precisa sobre las tendencias, necesidades, sectores, públicos, etc. La clasificación de la información obtenida en los estudios de recolección de información, permite establecer resultados sobre el objeto estudiado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fuentes de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Información primaria',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Información secundaria',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipos de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Cualitativos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Cuantitativos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Seguridad de datos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Fuentes de información',
      referencia:
        'Cruz García, M. M. (2019). <em>Boletín Científico de las Ciencias Económico Administrativas del ICEA</em>.',
      tipo: 'Artículo',
      link:
        'https://repository.uaeh.edu.mx/revistas/index.php/icea/article/view/4864/6748',
    },
    {
      tema: 'Fuentes de información',
      referencia:
        'Maranto Rivera, M. y  González Fernández, M. E. (2015). <em>Fuentes de información</em>. Universidad Autónoma del estado de Hidalgo.',
      tipo: 'Boletín virtual',
      link:
        'https://repository.uaeh.edu.mx/bitstream/bitstream/handle/123456789/16700/LECT132.pdf',
    },
    {
      tema: 'Fuentes de información',
      referencia:
        'Rodríguez, I. V. (2008). <em>Metodología para la elaboración de guías de fuentes de información</em>. Universidad Complutense de Madrid.',
      tipo: 'Artículo',
      link: 'https://www.scielo.org.mx/pdf/ib/v22n46/v22n46a6.pdf',
    },
    {
      tema: 'Fuentes de información',
      referencia:
        'Escuela de Administración de Negocios. (2008). <em>Metodologías de la Investigación en las Ciencias Sociales</em>. Fases, fuentes y selección de técnicas. Revista EAN.',
      tipo: 'Artículo',
      link: 'https://www.redalyc.org/pdf/206/20612981002.pdf',
    },
    {
      tema: 'Tipos de datos',
      referencia:
        'Torres, M. (s.f.). <em>Métodos de recolección de datos para una investigación</em>. Boletín electrónico No. 03. Facultad de Ingeniería, Universidad Rafael Landívar.',
      tipo: 'Boletín',
      link:
        'http://148.202.167.116:8080/jspui/bitstream/123456789/2817/1/M%c3%a9todos%20de%20recolecci%c3%b3n%20de%20datos%20para%20una%20investigaci%c3%b3n.pdf',
    },
    {
      tema: 'Seguridad de los datos',
      referencia:
        'ISO 27001. (2013). <em>Guía de implementación de seguridad de la información.</em>',
      tipo: 'Norma',
      link:
        'https://www.nqa.com/medialibraries/NQA/NQA-Media-Library/PDFs/Spanish%20QRFs%20and%20PDFs/NQA-ISO-27001-Guia-de-implantacion.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de datos',
      significado:
        'Hace referencia a la verificación y clasificación de los datos obtenidos en el estudio de investigación.',
    },
    {
      termino: 'Concepto',
      significado:
        'interpretación que se da a un término, indicando su significado.',
    },
    {
      termino: 'Conclusiones',
      significado:
        'Genera la síntesis de resultados obtenidos en una investigación a lo largo del proceso.',
    },
    {
      termino: 'Confiabilidad',
      significado:
        'indica la estabilidad, consistencia y exactitud de los resultados.',
    },
    {
      termino: 'Cuadro o tabla',
      significado:
        'representación del orden de datos numéricos en filas y columnas que especifican ciertos datos.',
    },
    {
      termino: 'Dato primario',
      significado:
        'información reunida por el investigador directamente de la fuente elegida.',
    },
    {
      termino: 'Dato secundario',
      significado:
        'información reunida a través de intermediarios, pueden ser libros, informes, estadísticas, etc.',
    },
    {
      termino: 'Entrevista',
      significado:
        'Se aplica con el fin de obtener información de un tema específico, en algunos casos es predeterminado por un cuestionario.',
    },
    {
      termino: 'Estudio de campo',
      significado:
        'Hace referencia a las investigaciones que se realizan en el medio directo de la fuente elegida, es decir, en donde se desarrolla el problema que se va a investigar.',
    },
    {
      termino: 'Hipótesis',
      significado:
        'Es la respuesta tentativa a un problema; es una proposición que se pone a prueba para determinar su validez.',
    },
    {
      termino: 'Muestreo',
      significado:
        'Es la selección de la población objeto de estudio para estudiar determinadas características sobre una totalidad',
    },
    {
      termino: 'Observación de campo',
      significado: 'Se realiza en el lugar donde se da el fenómeno observado.',
    },
    {
      termino: 'Tabulación',
      significado:
        'Consiste en determinar grupos, subgrupos, clases o categorías en los que puedan ser clasificadas las respuestas del cuestionario aplicado en la investigación, resumiendo los datos en tablas estadísticas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Baronio, A. (2018). <em>Saber y Saber Hacer con Estadística</em>. UniRio.',
      link: '',
    },
    {
      referencia:
        'ISO 27001. (2013). <em>Sistema de Gestión de Seguridad en la Información.</em>',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
