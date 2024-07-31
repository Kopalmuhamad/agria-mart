'use client'

import Container from "@/components/container";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [sort, setSort] = useState<string>('');

  return (
    <div className="min-h-screen w-full bg-background">
      <section className="pt-[100px] py-10">
        <Container>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  width={300}
                  height={300}
                  src={''}
                  alt={''}
                  className="w-full object-contain sm:h-[400px] md:w-full md:h-[450px] lg:h-[592px] xl:h-[720px] touch-none"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Container>
      </section>
      <section>
        <Container>
          <header className="pb-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">Featured</h1>
          </header>
          <div className="grid grid-cols-2 min-h-[250px] sm:min-h-[500px] md:min-h-[520px] lg:min-h-[650px] xl:min-h-[750px] relative">
            <Image src={'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/be354c8c-537c-4d6d-9ba5-8a7805b1022b/jordan-mj-greatness-1985-t-shirt-PNPrxr.png'} alt="Featured product 1" width={200} height={200} className="place-self-start w-full" />
            <Image src={'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9a4a7d37-6a78-4309-9f09-5a4a4ec43ea4/dri-fit-fitness-t-shirt-lFdNHv.png'} alt="Featured product 2" width={200} height={200} className="place-self-end w-full" />
            <h1 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 min-w-max text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold bg-primary rotate-12">Best Deal For Best Styles</h1>
          </div>
        </Container>
      </section>
      <section className="min-h-screen py-10 pb-20">
        <Container>
          <header className="pb-10 flex flex-col items-start justify-around gap-y-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">Our Stuff</h1>
            <div className="w-full flex items-center justify-between gap-x-4">
              <Select onValueChange={(value) => setSort(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price_asc">Low Price</SelectItem>
                  <SelectItem value="price_desc">High Price</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </header>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <Link href={``}>
              <Card>
                <CardContent className="p-0">
                  <Image src={''} alt={''} width={200} height={200} className="w-full h-full object-cover" />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold">Title</h2>
                    <p className="text-sm text-gray-500">Rp. Price</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
