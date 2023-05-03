import React from 'react';
import OrganizadorDinamicoWrapperSchema from '../../schema/OrganizadorDinamicoWrapperSchema';
import Loading from '../Loading';
import useBlocksOrganizer from '../../hooks/useBlocksOrganizer';

const OrganizadorDinamicoWrapper = ({disposicionBloques,children}:OrganizadorDinamicoWrapperProps) => {

  //BLOCKS ORGANIZATION
  const { currentChildren, loading } = useBlocksOrganizer({
    disposicionBloques: disposicionBloques,
    children: children
  })

  //JSX
  if(loading) {
    return (
      <Loading />
    )
  }
  return (
    <>{currentChildren}</>
  )
}

OrganizadorDinamicoWrapper.schema = OrganizadorDinamicoWrapperSchema;

export default OrganizadorDinamicoWrapper;
