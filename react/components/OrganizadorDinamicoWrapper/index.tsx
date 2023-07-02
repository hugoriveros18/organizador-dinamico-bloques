import React from 'react';
import OrganizadorDinamicoWrapperSchema from '../../schema/OrganizadorDinamicoWrapperSchema';
import useBlocksOrganizer from '../../hooks/useBlocksOrganizer';

const OrganizadorDinamicoWrapper = ({disposicionBloques,children}:OrganizadorDinamicoWrapperProps) => {

  //BLOCKS ORGANIZATION
  const currentChildren = useBlocksOrganizer({
    disposicionBloques: disposicionBloques,
    children: children
  })


  //JSX
  return (
    <>{currentChildren}</>
  )
}

OrganizadorDinamicoWrapper.schema = OrganizadorDinamicoWrapperSchema;

export default OrganizadorDinamicoWrapper;
