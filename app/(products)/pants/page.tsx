'use client';

import Container from '@/components/container';
import { Card, CardContent } from '@/components/ui/card';
import { useProductByCategory } from '@/services/api/products';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PantsSection = () => {
    const category = "pants";
    const { products, error } = useProductByCategory(category);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (products.length === 0) {
        return <div>No products found</div>;
    }

    return (
        <div className='pt-[60px]'>
            <Container>
                <header className='py-10 text-2xl md:text-3xl lg:text-4xl font-semibold'>Pants</header>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pb-20'>
                    {products.map((product: any) => (
                        <Link key={product.id} href={`/detail/${product.id}`}>
                            <Card>
                                <CardContent className="p-0">
                                    <Image
                                        src={product.image || '/default-image.jpg'}
                                        alt={product.name || 'Product Image'}
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="p-4">
                                        <h2 className="text-lg font-semibold text-background-foreground">{product.name}</h2>
                                        <p className="text-sm text-paragraph">Rp. {product.price}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default PantsSection;
