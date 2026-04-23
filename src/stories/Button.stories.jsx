import { Button } from '@/components/ui/button';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: { control: 'select', options: ['default', 'sm', 'lg', 'icon'] },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: { children: 'Button', disabled: false },
};

export const Default     = { args: { variant: 'default' } };
export const Destructive = { args: { variant: 'destructive', children: 'Delete' } };
export const Outline     = { args: { variant: 'outline' } };
export const Secondary   = { args: { variant: 'secondary' } };
export const Ghost       = { args: { variant: 'ghost' } };
export const Link        = { args: { variant: 'link', children: 'Learn more →' } };
export const Disabled    = { args: { variant: 'default', disabled: true } };

export const AllVariants = {
  name: 'All Variants',
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      {['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'].map((v) => (
        <Button key={v} variant={v}>{v.charAt(0).toUpperCase() + v.slice(1)}</Button>
      ))}
    </div>
  ),
};

export const Sizes = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
