import { useState, useEffect } from "react";

export default function useBlocksOrganizer({disposicionBloques, children}:OrganizadorDinamicoWrapperProps) {

  //STATES
  const [currentChildren, setCurrentChildren] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  //EFFECTS
  useEffect(() => {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });

    // caches.keys().then((names) => {
    //   names.forEach((name) => {
    //     console.log(name);
    //   });
    // });

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
    setLoading(false);
  },[])

  return {
    loading: loading,
    currentChildren: currentChildren
  }
}
