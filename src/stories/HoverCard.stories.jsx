import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { CalendarIcon } from 'lucide-react';

export default {
  title: 'Molecules/Hover Card',
  component: HoverCard,
  parameters: { layout: 'centered' },
};

export const Default = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@shadcn</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between gap-4">
          <Avatar>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@shadcn</h4>
            <p className="text-sm text-muted-foreground">
              Creator of shadcn/ui — Beautiful components built with Radix UI and Tailwind CSS.
            </p>
            <div className="flex items-center gap-1 pt-1 text-xs text-muted-foreground">
              <CalendarIcon className="size-3" />
              <span>Joined December 2022</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
