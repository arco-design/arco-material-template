import React, { ReactNode } from 'react';
import { Button, Tooltip } from '@CONST_ARCO_PACKAGE_NAME@';
import { ButtonProps } from '@CONST_ARCO_PACKAGE_NAME@/es/Button';

/**
 * @title TooltipButton
 */
export interface TooltipButtonProps {
  children?: any;
  /**
   * @zh 按钮的标题
   * @default `Hello Arco`
   * @version 1.0.0
   */
  title?: ReactNode;
  /**
   * @zh 按钮的提示
   */
  btnProps?: ButtonProps;
}

const TooltipButton = (props: TooltipButtonProps) => {
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

export default TooltipButton;
