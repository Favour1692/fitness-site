import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { testimonial } from "@/constants";

const Testimonials = () => {
  return (
    <div className="w-[80%] mx-auto px-2 md:px-0">
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}>
        <CarouselContent className="-ml-4">
          {testimonial.map((data) => (
            <CarouselItem key={data.id} className="pl-4 w-full md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="flex justify-center items-center h-[110px]">
                  <CardContent className="flex items-center justify-center p-2 w-full max-w-full">{data.content}</CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonials;
