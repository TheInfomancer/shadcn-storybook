import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const tags = Array.from({ length: 50 }, (_, i) => `v1.${i}.0`);
const artworks = [
  { artist: 'Ornella Binni',     gradient: 'from-rose-400 to-pink-600'      },
  { artist: 'Tom Byrom',         gradient: 'from-sky-400 to-indigo-600'     },
  { artist: 'Vladimir Malyavko', gradient: 'from-emerald-400 to-teal-600'   },
  { artist: 'Helena Hertz',      gradient: 'from-amber-400 to-orange-600'   },
  { artist: 'Lucrezia Carnelos', gradient: 'from-violet-400 to-purple-600'  },
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
        {artworks.map(({ artist, gradient }) => (
          <figure key={artist} className="shrink-0">
            <div className={`aspect-[3/4] w-[150px] rounded-md bg-gradient-to-br ${gradient}`} />
            <figcaption className="pt-2 text-xs text-muted-foreground">{artist}</figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};
