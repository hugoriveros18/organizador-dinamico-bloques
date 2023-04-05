import React, { useEffect, useState } from 'react';
import OrganizadorDinamicoWrapperSchema from '../../schema/OrganizadorDinamicoWrapperSchema';

const OrganizadorDinamicoWrapper = ({disposicionBloques,children}:OrganizadorDinamicoWrapperProps) => {

  //STATES
  const [currentChildren, setCurrentChildren] = useState<any>([]);

  //EFFECTS
  useEffect(() => {
    const childrensActivos = disposicionBloques.map((bloque) =>  {
      if(bloque.configuracionVisibilidad.posiblesConfiguraciones === 'Activacion Manual' && bloque.configuracionVisibilidad.estaActivo) {
        return children[bloque.indexId];
      }
      if(bloque.configuracionVisibilidad.fechaInicio && bloque.configuracionVisibilidad.fechaFinal) {
        const now = new Date();
        const fechaIncioInput = new Date(bloque.configuracionVisibilidad.fechaInicio);
        const fechaFinalInput = new Date(bloque.configuracionVisibilidad.fechaFinal);
        if(fechaIncioInput.getTime() < now.getTime() && fechaFinalInput.getTime() > now.getTime()) {
          return children[bloque.indexId]
        }
      }
      return null;
    })
    setCurrentChildren(childrensActivos);
  },[])

  //JSX
  return (
    <>{currentChildren}</>
  )
}

OrganizadorDinamicoWrapper.schema = OrganizadorDinamicoWrapperSchema;

export default OrganizadorDinamicoWrapper;
