import { Toggle } from '@/components/ui/toggle';
import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react';

export default {
  title: 'Atoms/Toggle',
  component: Toggle,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'select', options: ['default', 'outline'] },
    size:    { control: 'select', options: ['default', 'sm', 'lg'] },
    disabled: { control: 'boolean' },
  },
  args: { children: 'Toggle', variant: 'default', disabled: false },
};

export const Default  = {};
export const Outline  = { args: { variant: 'outline', children: 'Outline' } };
export const Disabled = { args: { disabled: true } };

export const WithIcon = {
  name: 'With Icon',
  render: () => (
    <Toggle aria-label="Bold">
      <BoldIcon />
    </Toggle>
  ),
};

export const Formatting = {
  name: 'Text Formatting',
  render: () => (
    <div className="flex gap-1">
      <Toggle aria-label="Bold" variant="outline"><BoldIcon /></Toggle>
      <Toggle aria-label="Italic" variant="outline"><ItalicIcon /></Toggle>
      <Toggle aria-label="Underline" variant="outline"><UnderlineIcon /></Toggle>
    </div>
  ),
};

export const Sizes = {
  render: () => (
    <div className="flex items-center gap-2">
      <Toggle size="sm" variant="outline"><BoldIcon /></Toggle>
      <Toggle size="default" variant="outline"><BoldIcon /></Toggle>
      <Toggle size="lg" variant="outline"><BoldIcon /></Toggle>
    </div>
  ),
};
