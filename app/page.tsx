// components/Home.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Container from "@/components/container";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import { Product, useProducts } from '@/services/hooks/products';

const Home = () => {
  const { products: initialProducts, loading, error } = useProducts();
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [sortOption, setSortOption] = useState<string>("");

  // Handle sorting client-side
  useEffect(() => {
    let sortedProducts = [...initialProducts];
    if (sortOption === "price_asc") {
      sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortOption === "price_desc") {
      sortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }
    setProducts(sortedProducts);
  }, [sortOption, initialProducts]);

  // Data produk untuk featured section
  const featuredProducts = [
    {
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/be354c8c-537c-4d6d-9ba5-8a7805b1022b/jordan-mj-greatness-1985-t-shirt-PNPrxr.png",
      alt: "Featured product 1",
    },
    {
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9a4a7d37-6a78-4309-9f09-5a4a4ec43ea4/dri-fit-fitness-t-shirt-lFdNHv.png",
      alt: "Featured product 2",
    },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen w-full">
      {/* Carousel Section */}
      <section className="pt-[100px] py-10">
        <Container>
          <Carousel>
            <CarouselContent>
              {products.slice(0, 5).map((product) => (
                <CarouselItem key={product.id}>
                  <Image
                    width={300}
                    height={300}
                    src={product.image}
                    alt={product.name}
                    className="w-full object-contain sm:h-[400px] md:w-full md:h-[450px] lg:h-[592px] xl:h-[720px] touch-none"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Container>
      </section>

      {/* Featured Section */}
      <section>
        <Container>
          <header className="pb-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-background-foreground">
              Featured
            </h1>
          </header>
          <div className="grid grid-cols-2 min-h-[250px] sm:min-h-[500px] md:min-h-[520px] lg:min-h-[650px] xl:min-h-[750px] relative">
            {featuredProducts.map((item, index) => (
              <Image
                key={index}
                src={item.image}
                alt={item.alt}
                width={200}
                height={200}
                className={
                  index === 0 ? "place-self-start w-full" : "place-self-end w-full"
                }
              />
            ))}
            <h1 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 min-w-max text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold bg-accent-primary text-background-foreground rotate-12">
              Best Deal For Best Styles
            </h1>
          </div>
        </Container>
      </section>

      {/* Products Section */}
      <section className="min-h-screen py-10 pb-20">
        <Container>
          <header className="pb-10 flex flex-col items-start justify-around gap-y-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-background-foreground">
              Our Stuff
            </h1>
            <div className="w-full flex items-center justify-between gap-x-4">
              <Select onValueChange={setSortOption}>
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
            {products.map((product) => (
              <Link key={product.id} href={`/detail/${product.id}`}>
                <Card>
                  <CardContent className="p-0">
                    <Image
                      src={product.image || '/default-image.jpg'}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-lg font-semibold text-background-foreground">
                        {product.name}
                      </h2>
                      <p className="text-sm text-paragraph">Rp. {product.price}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Home;
