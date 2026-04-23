import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

export default {
  title: 'Organisms/Carousel',
  parameters: { layout: 'centered' },
};

export const Default = {
  render: () => (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }, (_, i) => i + 1).map((n) => (
          <CarouselItem key={n}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{n}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const MultipleItems = {
  name: 'Multiple Items Visible',
  render: () => (
    <Carousel opts={{ align: 'start' }} className="w-full max-w-sm">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
          <CarouselItem key={n} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{n}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const ImageCarousel = {
  name: 'Image Carousel',
  render: () => (
    <Carousel className="w-full max-w-md">
      <CarouselContent>
        {[
          { label: 'Mountains',   gradient: 'from-sky-400 via-blue-500 to-indigo-600'     },
          { label: 'Sunset',      gradient: 'from-orange-400 via-rose-500 to-pink-600'    },
          { label: 'Forest',      gradient: 'from-emerald-400 via-teal-500 to-green-700'  },
        ].map(({ label, gradient }, i) => (
          <CarouselItem key={i}>
            <div className={`aspect-video w-full rounded-lg bg-gradient-to-br ${gradient} flex items-end p-4`}>
              <span className="text-sm font-semibold text-white/90 drop-shadow">{label}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};
