type PosiblesConfiguraciones = 'Por Fechas' | 'Activacion Manual';

type ConfiguracionVisibilidad = {
  posiblesConfiguraciones: PosiblesConfiguraciones
  fechaInicio?: string
  fechaFinal?: string
  estaActivo?: boolean
};

type BloqueConfig = {
  __editorItemTitle: string
  indexId: number
  configuracionVisibilidad: ConfiguracionVisibilidad
};

type OrganizadorDinamicoWrapperProps = {
  disposicionBloques: BloqueConfig[]
  children: ReactNode
};
