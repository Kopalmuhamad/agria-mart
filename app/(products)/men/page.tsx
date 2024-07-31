import Container from '@/components/container';
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const MenSection = async () => {


    return (
        <div className='pt-[60px]'>
            <Container>
                <header className='py-10 text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground'>Women</header>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pb-20'>
                    <Link href={``}>
                        <Card>
                            <CardContent className="p-0">
                                <Image src={''} alt="" width={200} height={200} className="w-full" />
                                <h1 className="text-foreground text-base font-semibold py-2 pl-2">Title</h1>
                                <h3 className="pl-2">Rp. Price</h3>
                            </CardContent>
                        </Card>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default MenSection