import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { ChevronsUpDownIcon } from 'lucide-react';
import { useState } from 'react';

export default {
  title: 'Molecules/Collapsible',
  component: Collapsible,
  parameters: { layout: 'centered' },
};

export const Default = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Collapsible open={open} onOpenChange={setOpen} className="w-80 space-y-2">
        <div className="flex items-center justify-between px-4">
          <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon" className="size-8">
              <ChevronsUpDownIcon className="size-4" />
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-2 text-sm font-mono">@radix-ui/primitives</div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 text-sm font-mono">@radix-ui/colors</div>
          <div className="rounded-md border px-4 py-2 text-sm font-mono">@stitches/react</div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};
