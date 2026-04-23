import { Badge } from '@/components/ui/badge';

export default {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'select', options: ['default', 'secondary', 'destructive', 'outline'] },
    children: { control: 'text' },
  },
  args: { children: 'Badge' },
};

export const Default     = { args: { variant: 'default' } };
export const Secondary   = { args: { variant: 'secondary' } };
export const Destructive = { args: { variant: 'destructive', children: 'Error' } };
export const Outline     = { args: { variant: 'outline' } };

export const AllVariants = {
  name: 'All Variants',
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};
