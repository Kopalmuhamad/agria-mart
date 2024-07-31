'use client';

import Container from '@/components/container';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useProductById } from '@/services/api/products';
import { useParams } from 'next/navigation'; // Pastikan ini sesuai dengan versi Next.js Anda

const Detail = () => {
    const { id } = useParams() || {};

    const { product, error } = useProductById(id as string);


    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>No product found</div>;
    }

    console.log(product)
    return (
        <div className='w-full min-h-screen pt-[100px]'>
            <Container className='h-full flex items-center justify-center'>
                <main className='max-w-lg h-fit w-full shadow-xl rounded-lg'>
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={200}
                        height={200}
                        className='w-full aspect-square object-contain'
                    />
                    <h1 className='text-2xl font-medium pl-4 py-2'>{product.name}</h1>
                    <h3 className='text-xl font-medium pl-4 pb-2'>Rp. {product.price}</h3>
                    <div className='flex items-center justify-start gap-x-4 pl-4 pb-4'>
                        <Button>Buy</Button>
                        <Button>Add to cart</Button>
                    </div>
                </main>
            </Container>
        </div>
    );
};

export default Detail;
