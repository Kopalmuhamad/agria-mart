import { Button } from '@/components/ui/button';
import Modal from '@/components/ui/modal';
import Image from 'next/image';
import React from 'react';

// Define the type for the Product

// Detail component
const Detail = async () => {


    return (
        <Modal>
            <main className='min-w-[300px] sm:min-w-[500px] h-fit w-full shadow-xl rounded-lg p-4'>
                <Image
                    src={''}
                    alt={''}
                    width={200}
                    height={200}
                    className='w-full aspect-square object-contain'
                />
                <h1 className='text-2xl font-medium pl-4 py-2'>Title</h1>
                <h3 className='text-xl font-medium pl-4 pb-2'>Rp. Price</h3>
                <div className='flex items-center justify-start gap-x-4 pl-4 pb-4'>
                    <Button>Buy</Button>
                    <Button>Add to cart</Button>
                </div>
            </main>
        </Modal>
    );
};

export default Detail;
