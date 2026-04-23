import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { useState } from 'react';

export default {
  title: 'Organisms/Date Picker',
  parameters: { layout: 'centered' },
};

export const Default = {
  render: () => {
    const [date, setDate] = useState();
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className={cn('w-64 justify-start text-left font-normal', !date && 'text-muted-foreground')}>
            <CalendarIcon className="mr-2 size-4" />
            {date ? format(date, 'PPP') : 'Pick a date'}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
        </PopoverContent>
      </Popover>
    );
  },
};

export const DateRange = {
  name: 'Date Range Picker',
  render: () => {
    const [range, setRange] = useState({ from: undefined, to: undefined });
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className={cn('w-80 justify-start text-left font-normal', !range.from && 'text-muted-foreground')}>
            <CalendarIcon className="mr-2 size-4" />
            {range.from
              ? range.to
                ? `${format(range.from, 'MMM d')} – ${format(range.to, 'MMM d, yyyy')}`
                : format(range.from, 'PPP')
              : 'Pick a date range'}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar mode="range" selected={range} onSelect={setRange} numberOfMonths={2} initialFocus />
        </PopoverContent>
      </Popover>
    );
  },
};
