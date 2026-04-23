import { ItemGroup, Item, ItemLabel, ItemDescription, ItemSeparator } from '@/components/ui/item';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { BellIcon, ShieldIcon, CreditCardIcon, UserIcon } from 'lucide-react';

export default {
  title: 'Molecules/Item',
  parameters: { layout: 'centered' },
};

export const Default = {
  render: () => (
    <ItemGroup className="w-80">
      {[
        { icon: <UserIcon className="size-4" />,       label: 'Profile',        desc: 'Manage your profile' },
        { icon: <BellIcon className="size-4" />,       label: 'Notifications',  desc: 'Manage notifications' },
        { icon: <ShieldIcon className="size-4" />,     label: 'Security',       desc: 'Password and 2FA' },
        { icon: <CreditCardIcon className="size-4" />, label: 'Billing',        desc: 'Payment methods' },
      ].map(({ icon, label, desc }) => (
        <Item key={label}>
          <span className="text-muted-foreground">{icon}</span>
          <div>
            <ItemLabel>{label}</ItemLabel>
            <ItemDescription>{desc}</ItemDescription>
          </div>
        </Item>
      ))}
    </ItemGroup>
  ),
};

export const WithBadge = {
  name: 'With Badges',
  render: () => (
    <ItemGroup className="w-80">
      {[
        { label: 'Inbox',     count: '12',  variant: 'default' },
        { label: 'Drafts',    count: '3',   variant: 'secondary' },
        { label: 'Sent',      count: null,  variant: null },
        { label: 'Spam',      count: '99+', variant: 'destructive' },
      ].map(({ label, count, variant }) => (
        <Item key={label} className="justify-between">
          <ItemLabel>{label}</ItemLabel>
          {count && <Badge variant={variant}>{count}</Badge>}
        </Item>
      ))}
    </ItemGroup>
  ),
};
