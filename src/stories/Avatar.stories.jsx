import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
};

export const WithImage = {
  name: 'With Image',
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const Fallback = {
  name: 'Fallback (no image)',
  render: () => (
    <Avatar>
      <AvatarImage src="/broken.png" alt="broken" />
      <AvatarFallback>DL</AvatarFallback>
    </Avatar>
  ),
};

export const Sizes = {
  render: () => (
    <div className="flex items-center gap-4">
      {[
        { size: 'w-6 h-6',  label: 'XS', initials: 'XS' },
        { size: 'w-8 h-8',  label: 'SM', initials: 'SM' },
        { size: 'w-10 h-10', label: 'MD', initials: 'MD' },
        { size: 'w-14 h-14', label: 'LG', initials: 'LG' },
        { size: 'w-20 h-20', label: 'XL', initials: 'XL' },
      ].map(({ size, initials }) => (
        <Avatar key={size} className={size}>
          <AvatarFallback className="text-xs">{initials}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  ),
};

export const Group = {
  name: 'Avatar Group',
  render: () => (
    <div className="flex -space-x-2">
      {['CN', 'JD', 'AB', 'MK', '+3'].map((initials, i) => (
        <Avatar key={i} className="border-2 border-background">
          <AvatarFallback className="text-xs">{initials}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  ),
};
