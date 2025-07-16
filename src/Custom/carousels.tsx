import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "/home.jpg",
  "/performance.jpg",
  "/reliability.jpg"
];

export const Carousels = () => {
  return (
    <div className="relative flex justify-center">
      <Carousel className="w-[500px] md:w-[600px] lg:w-[1800px] z-0">
        <CarouselContent>
          {images.map((imgSrc, index) => (
            <CarouselItem key={index}>
              <Card className="overflow-hidden rounded-2xl shadow-lg">
                <CardContent className="p-0">
                  <Image
                    src={imgSrc}
                    alt={`Image ${index + 1}`}
                    width={1000}
                    height={500}
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* H1 Overlay */}
      <h1 className="absolute text-3xl md:text-5xl font-bold text-white drop-shadow-lg text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        Professional Gym Trainer
      </h1>
    </div>
  );
};
