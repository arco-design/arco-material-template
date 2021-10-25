import React, { CSSProperties, ReactNode } from 'react';

/**
 * @title @CONST_COMPONENT_NAME@
 */
export interface @CONST_COMPONENT_NAME@Props {
  children?: ReactNode;
  style?: CSSProperties;
}

const @CONST_COMPONENT_NAME@ = (props: @CONST_COMPONENT_NAME@Props) => {
  const { style } = props;
  return <h3 style={style}>This is @CONST_COMPONENT_NAME@</h3>;
};

export default @CONST_COMPONENT_NAME@;
