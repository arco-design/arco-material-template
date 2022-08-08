import React, { ReactNode } from 'react';
import { Button, Tooltip, ButtonProps } from '@arco-design/web-react';

/**
 * @title @CONST_COMPONENT_NAME_FROM_PACKAGE@
 */
export interface @CONST_COMPONENT_NAME_FROM_PACKAGE@Props {
  children?: any;
  /**
   * @zh 按钮的标题
   * @defaultValue `Hello Arco`
   * @version 1.0.0
   */
  title?: ReactNode;
  /**
   * @zh 按钮的提示
   */
  btnProps?: ButtonProps;
}

const @CONST_COMPONENT_NAME_FROM_PACKAGE@ = (props: @CONST_COMPONENT_NAME_FROM_PACKAGE@Props) => {
  const { children, title = 'Hello Arco', btnProps } = props;
  return (
    <div className="arco-rc-tooltip-button">
      {title ? (
        <Tooltip content={title}>
          <Button {...btnProps}>{children}</Button>
        </Tooltip>
      ) : (
        <Button {...btnProps}>{children}</Button>
      )}
    </div>
  );
};

export default @CONST_COMPONENT_NAME_FROM_PACKAGE@;
