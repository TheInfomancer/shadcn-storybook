import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default {
  title: 'Molecules/Card',
  component: Card,
  parameters: { layout: 'centered' },
};

export const Default = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          This is the card content area. You can put any content here.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
};

export const Notification = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">Notifications</CardTitle>
          <Badge variant="secondary">3 new</Badge>
        </div>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {['Your report is ready', 'New comment on task', 'Build succeeded'].map((msg) => (
          <div key={msg} className="flex items-center gap-2 text-sm py-1 border-b last:border-0">
            <span className="size-2 rounded-full bg-primary shrink-0" />
            {msg}
          </div>
        ))}
      </CardContent>
    </Card>
  ),
};

export const Stats = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      {[
        { label: 'Total Revenue', value: '$45,231', change: '+20.1%' },
        { label: 'Active Users',  value: '2,350',   change: '+15.3%' },
        { label: 'Conversions',  value: '12.5%',    change: '-2.4%' },
      ].map(({ label, value, change }) => (
        <Card key={label}>
          <CardHeader className="pb-2">
            <CardDescription>{label}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{value}</p>
            <p className={`text-xs mt-1 ${change.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>
              {change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  ),
};
