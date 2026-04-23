import { Spinner } from '@/components/ui/spinner';
import { Button } from '@/components/ui/button';

export default {
  title: 'Atoms/Spinner',
  component: Spinner,
  parameters: { layout: 'centered' },
};

export const Default = {};

export const Sizes = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner className="size-3" />
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
      <Spinner className="size-12" />
    </div>
  ),
};

export const WithText = {
  name: 'With Text',
  render: () => (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Spinner />
      Loading...
    </div>
  ),
};

export const InButton = {
  name: 'In Button',
  render: () => (
    <div className="flex gap-3">
      <Button disabled>
        <Spinner />
        Saving...
      </Button>
      <Button variant="outline" disabled>
        <Spinner />
        Loading
      </Button>
    </div>
  ),
};
