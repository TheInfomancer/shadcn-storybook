import { Skeleton } from '@/components/ui/skeleton';

export default {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  parameters: { layout: 'centered' },
};

export const Default = {
  render: () => <Skeleton className="h-4 w-48" />,
};

export const CardSkeleton = {
  name: 'Card Skeleton',
  render: () => (
    <div className="flex flex-col gap-3 w-72 p-4 rounded-lg border">
      <Skeleton className="h-40 w-full rounded-lg" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <div className="flex items-center gap-2 pt-1">
        <Skeleton className="size-8 rounded-full" />
        <div className="flex flex-col gap-1.5 flex-1">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
    </div>
  ),
};

export const ListSkeleton = {
  name: 'List Skeleton',
  render: () => (
    <div className="space-y-3 w-64">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton className="size-10 rounded-full shrink-0" />
          <div className="flex-1 space-y-1.5">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-4/5" />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const FormSkeleton = {
  name: 'Form Skeleton',
  render: () => (
    <div className="space-y-4 w-72">
      {['Name', 'Email', 'Message'].map((_, i) => (
        <div key={i} className="space-y-1.5">
          <Skeleton className="h-3 w-16" />
          <Skeleton className={`h-8 w-full ${i === 2 ? 'h-20' : ''}`} />
        </div>
      ))}
      <Skeleton className="h-8 w-24" />
    </div>
  ),
};
