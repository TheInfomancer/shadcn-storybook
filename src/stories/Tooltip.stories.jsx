import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Kbd } from '@/components/ui/kbd';
import { PlusIcon, TrashIcon, PencilIcon } from 'lucide-react';

export default {
  title: 'Molecules/Tooltip',
  component: Tooltip,
  parameters: { layout: 'centered' },
  decorators: [(Story) => <TooltipProvider><Story /></TooltipProvider>],
};

export const Default = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>This is a tooltip</TooltipContent>
    </Tooltip>
  ),
};

export const WithShortcut = {
  name: 'With Keyboard Shortcut',
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon"><PlusIcon /></Button>
      </TooltipTrigger>
      <TooltipContent className="flex items-center gap-2">
        Add item <Kbd>⌘N</Kbd>
      </TooltipContent>
    </Tooltip>
  ),
};

export const IconButtons = {
  name: 'Icon Button Tooltips',
  render: () => (
    <div className="flex gap-2">
      {[
        { icon: <PlusIcon />,  label: 'Add',    shortcut: '⌘N' },
        { icon: <PencilIcon />, label: 'Edit',   shortcut: '⌘E' },
        { icon: <TrashIcon />,  label: 'Delete', shortcut: '⌫'  },
      ].map(({ icon, label, shortcut }) => (
        <Tooltip key={label}>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon">{icon}</Button>
          </TooltipTrigger>
          <TooltipContent className="flex items-center gap-2">
            {label} <Kbd>{shortcut}</Kbd>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
};

export const Sides = {
  name: 'Placement',
  render: () => (
    <div className="flex flex-col items-center gap-6 p-8">
      <Tooltip>
        <TooltipTrigger asChild><Button variant="outline" size="sm">Top</Button></TooltipTrigger>
        <TooltipContent side="top">Tooltip on top</TooltipContent>
      </Tooltip>
      <div className="flex gap-16">
        <Tooltip>
          <TooltipTrigger asChild><Button variant="outline" size="sm">Left</Button></TooltipTrigger>
          <TooltipContent side="left">Tooltip on left</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild><Button variant="outline" size="sm">Right</Button></TooltipTrigger>
          <TooltipContent side="right">Tooltip on right</TooltipContent>
        </Tooltip>
      </div>
      <Tooltip>
        <TooltipTrigger asChild><Button variant="outline" size="sm">Bottom</Button></TooltipTrigger>
        <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
      </Tooltip>
    </div>
  ),
};
