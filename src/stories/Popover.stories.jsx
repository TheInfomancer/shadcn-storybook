import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default {
  title: 'Molecules/Popover',
  component: Popover,
  parameters: { layout: 'centered' },
};

export const Default = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <p className="text-sm">This is a popover. Click outside to close it.</p>
      </PopoverContent>
    </Popover>
  ),
};

export const WithForm = {
  name: 'With Form',
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Edit profile</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-1">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
          </div>
          <div className="grid gap-2">
            {[
              { id: 'width',  label: 'Width',  value: '100%' },
              { id: 'height', label: 'Max. height', value: '300px' },
            ].map(({ id, label, value }) => (
              <div key={id} className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor={id}>{label}</Label>
                <Input id={id} defaultValue={value} className="col-span-2 h-8" />
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
