import React, { ReactNode } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

interface TooltipContainerProps {
  content: string;
  children: ReactNode;
}

const TooltipContainer: React.FC<TooltipContainerProps> = ({ content, children }) => {
  return (
    <Tooltip>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent>{content}</TooltipContent>
    </Tooltip>
  );
};

export default TooltipContainer;
