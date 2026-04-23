import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';

export default {
  title: 'Molecules/Calendar',
  component: Calendar,
  parameters: { layout: 'centered' },
};

export const Default = {
  render: () => {
    const [date, setDate] = useState(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    );
  },
};

export const RangePicker = {
  name: 'Date Range',
  render: () => {
    const [range, setRange] = useState({ from: new Date(), to: undefined });
    return (
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        numberOfMonths={2}
        className="rounded-md border"
      />
    );
  },
};

export const WithDisabled = {
  name: 'With Disabled Dates',
  render: () => {
    const [date, setDate] = useState();
    const today = new Date();
    const disabledDays = { before: today };
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={disabledDays}
        className="rounded-md border"
      />
    );
  },
};
