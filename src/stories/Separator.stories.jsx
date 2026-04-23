import { Separator } from '@/components/ui/separator';

export default {
  title: 'Atoms/Separator',
  component: Separator,
  parameters: { layout: 'centered' },
  argTypes: {
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] },
  },
  args: { orientation: 'horizontal' },
};

export const Horizontal = {
  render: () => (
    <div className="w-72">
      <p className="text-sm">Above the separator</p>
      <Separator className="my-4" />
      <p className="text-sm">Below the separator</p>
    </div>
  ),
};

export const Vertical = {
  render: () => (
    <div className="flex h-8 items-center gap-4 text-sm">
      <span>Blog</span>
      <Separator orientation="vertical" />
      <span>Docs</span>
      <Separator orientation="vertical" />
      <span>Source</span>
    </div>
  ),
};

export const WithContent = {
  name: 'Section Divider',
  render: () => (
    <div className="w-72 space-y-4">
      <div>
        <h4 className="text-sm font-medium">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
      </div>
      <Separator />
      <div className="flex gap-4 text-sm">
        <span>Blog</span>
        <Separator orientation="vertical" className="h-4" />
        <span>Docs</span>
        <Separator orientation="vertical" className="h-4" />
        <span>Source</span>
      </div>
    </div>
  ),
};
