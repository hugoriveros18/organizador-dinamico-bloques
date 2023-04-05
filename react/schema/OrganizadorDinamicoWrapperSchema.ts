const OrganizadorDinamicoWrapperSchema = {
  title: "Organizacion Bloques",
  description: "Organizacion general de bloques",
  type: "object",
  properties: {
    disposicionBloques: {
      title: "Bloques",
      type: "array",
      items: {
        properties: {
          __editorItemTitle: {
            title: "Nombre Del Bloque",
            type: "string",
          },
          configuracionVisibilidad: {
            title: "Tipo Configuracion Visibilidad",
            type: "object",
            properties: {
              posiblesConfiguraciones: {
                title: "Configuracion a Utilizar",
                type: "string",
                enum: [
                  'Activacion Manual',
                  'Por Fechas'
                ],
                default: "Activacion Manual"
              }
            },
            dependencies: {
              posiblesConfiguraciones: {
                oneOf: [
                  {
                    properties: {
                      posiblesConfiguraciones: {
                        enum: [
                          'Activacion Manual'
                        ]
                      },
                      estaActivo: {
                        title: "¿Esta Activo?",
                        type: "boolean",
                        default: true
                      }
                    }
                  },
                  {
                    properties: {
                      posiblesConfiguraciones: {
                        enum: [
                          'Por Fechas'
                        ]
                      },
                      fechaInicio: {
                        title: "Fecha Inicio Visualizacion Bloque",
                        type: "string",
                        default: '',
                        widget: {
                          "ui:widget": "date-time"
                        }
                      },
                      fechaFinal: {
                        title: "Fecha Final Visualizacion Bloque",
                        type: "string",
                        default: '',
                        widget: {
                          "ui:widget": "date-time"
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      }
    }
  }
}

export default OrganizadorDinamicoWrapperSchema;
