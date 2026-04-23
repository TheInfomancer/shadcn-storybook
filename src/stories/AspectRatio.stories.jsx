import { AspectRatio } from '@/components/ui/aspect-ratio';

export default {
  title: 'Atoms/Aspect Ratio',
  component: AspectRatio,
  parameters: { layout: 'centered' },
};

export const Widescreen = {
  name: '16:9 Video',
  render: () => (
    <div className="w-80">
      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg bg-muted">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="landscape"
          className="size-full object-cover"
        />
      </AspectRatio>
    </div>
  ),
};

export const Square = {
  name: '1:1 Square',
  render: () => (
    <div className="w-48">
      <AspectRatio ratio={1} className="overflow-hidden rounded-lg bg-muted">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="landscape"
          className="size-full object-cover"
        />
      </AspectRatio>
    </div>
  ),
};

export const Portrait = {
  name: '3:4 Portrait',
  render: () => (
    <div className="w-40">
      <AspectRatio ratio={3 / 4} className="overflow-hidden rounded-lg bg-muted">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="landscape"
          className="size-full object-cover"
        />
      </AspectRatio>
    </div>
  ),
};
