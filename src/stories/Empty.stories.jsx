import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyAction, EmptyActions } from '@/components/ui/empty';
import { Button } from '@/components/ui/button';
import { InboxIcon, SearchIcon, FileIcon } from 'lucide-react';

export default {
  title: 'Molecules/Empty',
  parameters: { layout: 'centered' },
};

export const Default = {
  render: () => (
    <Empty className="w-80">
      <EmptyMedia>
        <InboxIcon className="size-8 text-muted-foreground" />
      </EmptyMedia>
      <EmptyHeader>
        <EmptyTitle>No messages</EmptyTitle>
        <EmptyDescription>You have no messages yet. Start a conversation!</EmptyDescription>
      </EmptyHeader>
      <EmptyActions>
        <Button>New message</Button>
      </EmptyActions>
    </Empty>
  ),
};

export const NoResults = {
  name: 'No Search Results',
  render: () => (
    <Empty className="w-80">
      <EmptyMedia>
        <SearchIcon className="size-8 text-muted-foreground" />
      </EmptyMedia>
      <EmptyHeader>
        <EmptyTitle>No results found</EmptyTitle>
        <EmptyDescription>Try adjusting your search or filters to find what you're looking for.</EmptyDescription>
      </EmptyHeader>
      <EmptyActions>
        <Button variant="outline">Clear filters</Button>
        <Button>Browse all</Button>
      </EmptyActions>
    </Empty>
  ),
};

export const EmptyFiles = {
  name: 'Empty Files',
  render: () => (
    <Empty className="w-80">
      <EmptyMedia>
        <FileIcon className="size-8 text-muted-foreground" />
      </EmptyMedia>
      <EmptyHeader>
        <EmptyTitle>No files uploaded</EmptyTitle>
        <EmptyDescription>Upload files to get started. Supports PNG, JPG, PDF up to 10MB.</EmptyDescription>
      </EmptyHeader>
      <EmptyActions>
        <Button>Upload file</Button>
      </EmptyActions>
    </Empty>
  ),
};
