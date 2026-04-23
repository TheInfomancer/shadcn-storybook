import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { Bar, BarChart, Line, LineChart, Area, AreaChart, Pie, PieChart, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const monthlyData = [
  { month: 'Jan', desktop: 186, mobile: 80 },
  { month: 'Feb', desktop: 305, mobile: 200 },
  { month: 'Mar', desktop: 237, mobile: 120 },
  { month: 'Apr', desktop: 73,  mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'Jun', desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: { label: 'Desktop', color: 'hsl(var(--primary))' },
  mobile:  { label: 'Mobile',  color: 'hsl(var(--secondary-foreground) / 0.4)' },
};

export default {
  title: 'Organisms/Chart',
  parameters: { layout: 'centered' },
};

export const BarChartStory = {
  name: 'Bar Chart',
  render: () => (
    <ChartContainer config={chartConfig} className="h-64 w-[400px]">
      <BarChart data={monthlyData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile"  fill="var(--color-mobile)"  radius={4} />
      </BarChart>
    </ChartContainer>
  ),
};

export const LineChartStory = {
  name: 'Line Chart',
  render: () => (
    <ChartContainer config={chartConfig} className="h-64 w-[400px]">
      <LineChart data={monthlyData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Line type="monotone" dataKey="desktop" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="mobile"  stroke="var(--color-mobile)"  strokeWidth={2} dot={false} />
      </LineChart>
    </ChartContainer>
  ),
};

export const AreaChartStory = {
  name: 'Area Chart',
  render: () => (
    <ChartContainer config={chartConfig} className="h-64 w-[400px]">
      <AreaChart data={monthlyData}>
        <defs>
          <linearGradient id="desktop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%"  stopColor="var(--color-desktop)" stopOpacity={0.3} />
            <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area type="monotone" dataKey="desktop" stroke="var(--color-desktop)" fill="url(#desktop)" strokeWidth={2} />
      </AreaChart>
    </ChartContainer>
  ),
};

export const PieChartStory = {
  name: 'Pie Chart',
  render: () => {
    const data = [
      { name: 'Chrome',  value: 400 },
      { name: 'Firefox', value: 300 },
      { name: 'Safari',  value: 200 },
      { name: 'Edge',    value: 100 },
    ];
    const COLORS = [
      'hsl(var(--primary))',
      'hsl(var(--muted-foreground))',
      'hsl(var(--primary) / 0.5)',
      'hsl(var(--primary) / 0.25)',
    ];
    return (
      <ChartContainer config={{}} className="h-64 w-64">
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="value" label={({ name }) => name} labelLine={false}>
            {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
        </PieChart>
      </ChartContainer>
    );
  },
};
