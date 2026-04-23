import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

export default {
  title: 'Molecules/Sonner',
  parameters: { layout: 'centered' },
  decorators: [(Story) => (
    <>
      <Toaster position="bottom-right" richColors />
      <Story />
    </>
  )],
};

export const Default = {
  render: () => (
    <Button variant="outline" onClick={() => toast('Event has been created')}>
      Show toast
    </Button>
  ),
};

export const Types = {
  name: 'Toast Types',
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => toast('Default message')}>Default</Button>
      <Button variant="outline" onClick={() => toast.success('Saved successfully!')}>Success</Button>
      <Button variant="outline" onClick={() => toast.error('Something went wrong')}>Error</Button>
      <Button variant="outline" onClick={() => toast.warning('Please review your input')}>Warning</Button>
      <Button variant="outline" onClick={() => toast.info('New version available')}>Info</Button>
    </div>
  ),
};

export const WithAction = {
  name: 'With Action',
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast('File deleted', {
          description: 'report.pdf has been deleted.',
          action: { label: 'Undo', onClick: () => toast.success('Restored!') },
        })
      }
    >
      Delete with undo
    </Button>
  ),
};

export const Promise = {
  name: 'Promise Toast',
  render: () => (
    <Button
      variant="outline"
      onClick={() => {
        const save = new Promise((resolve) => setTimeout(resolve, 2000));
        toast.promise(save, {
          loading: 'Saving...',
          success: 'Saved successfully!',
          error: 'Failed to save',
        });
      }}
    >
      Save (with promise)
    </Button>
  ),
};
