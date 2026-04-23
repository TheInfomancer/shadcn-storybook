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
          'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&q=80',
          'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?w=800&q=80',
          'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?w=800&q=80',
        ].map((src, i) => (
          <CarouselItem key={i}>
            <div className="overflow-hidden rounded-lg">
              <img src={src} alt={`Slide ${i + 1}`} className="aspect-video w-full object-cover" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};
