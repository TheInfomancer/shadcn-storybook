import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const tags = Array.from({ length: 50 }, (_, i) => `v1.${i}.0`);
const artworks = [
  { artist: 'Ornella Binni',  src: 'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?w=300&dpr=2&q=80' },
  { artist: 'Tom Byrom',      src: 'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?w=300&dpr=2&q=80' },
  { artist: 'Vladimir Malyavko', src: 'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?w=300&dpr=2&q=80' },
];

export default {
  title: 'Molecules/Scroll Area',
  component: ScrollArea,
  parameters: { layout: 'centered' },
};

export const Vertical = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal = {
  render: () => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max gap-4 p-4">
        {artworks.map(({ artist, src }) => (
          <figure key={artist} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <img src={src} alt={artist} className="aspect-[3/4] h-fit w-[150px] object-cover" />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">{artist}</figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};
