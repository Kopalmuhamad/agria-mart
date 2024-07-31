import React from 'react'
import Link from 'next/link'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, } from '../ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import Container from '../container'

const Navbar = () => {


    return (
        <nav className='fixed top-0 left-0 z-50 h-[60px] w-full bg-background/60 backdrop-blur-md drop-shadow-2xl shadow-xl'>
            <Container className='flex items-center justify-between h-full'>
                <Link href='/' className='text-lg font-medium text-accent-primary'>Matrix</Link>
                <NavigationMenu className='hidden sm:block'>
                    <NavigationMenuList className=''>
                        <NavigationMenuItem>
                            <Link href={'/popular'} className='text-base font-medium hover:text-accent-primary transition-colors duration-300'>Popular</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem >
                            <NavigationMenuTrigger className='text-base font-medium'>Category</NavigationMenuTrigger>
                            <NavigationMenuContent className='flex flex-col items-start justify-start gap-2 p-2 min-w-[200px] bg-background/60 text-background-foreground'>
                                <Link href={'/men'} className='text-base font-medium hover:text-accent-primary transition-colors duration-300'>Men</Link>
                                <Link href={'/women'} className='text-base font-medium hover:text-accent-primary transition-colors duration-300'>Women</Link>
                                <Link href={'/shoes'} className='text-base font-medium hover:text-accent-primary transition-colors duration-300'>Shoes</Link>
                                <Link href={'/pants'} className='text-base font-medium hover:text-accent-primary transition-colors duration-300'>Pants</Link>
                                <Link href={'/shirt'} className='text-base font-medium hover:text-accent-primary transition-colors duration-300'>Shirt</Link>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href={'/about'} className='text-base font-medium hover:text-accent-primary transition-colors duration-300'>About</Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <Sheet>
                    <SheetTrigger className='group relative w-full h-[16px] hover:bg-transparent block sm:hidden'>
                        <div className='bg-accent absolute top-0 right-0 w-[24px] h-[2px] rounded-full group-hover:rotate-45 group-hover:top-1/2 transition-transform duration-300'></div>
                        <div className='bg-accent absolute top-1/2 right-0 w-[12px] h-[2px] rounded-full group-hover:opacity-0 group-hover:right-1/2 group-hover:translate-x-1/2'></div>
                        <div className='bg-accent absolute top-full right-0 w-[24px] h-[2px] rounded-full group-hover:-rotate-45 group-hover:top-1/2 transition-transform duration-300'></div>
                    </SheetTrigger>
                    <SheetContent className='pt-16'>
                        <NavigationMenu>
                            <NavigationMenuList className='flex flex-col items-start gap-2'>
                                <Link href={'/popular'} className='text-base font-medium hover:text-accent-primary transition-colors duration-300'>Popular</Link>
                                <Link href={'/men'} className='text-base font-medium hover:text-accent-primary transition-colors duration-300'>Men</Link>
                                <Link href={'/women'} className='text-base font-medium hover:text-accent-primary transition-colors duration-300'>Women</Link>
                                <Link href={'/shoes'} className='text-base font-medium hover:text-accent-primary transition-colors duration-300'>Shoes</Link>
                                <Link href={'/pants'} className='text-base font-medium hover:text-accent-primary transition-colors duration-300'>Pants</Link>
                                <Link href={'/shirt'} className='text-base font-medium hover:text-accent-primary transition-colors duration-300'>Shirt</Link>
                                <Link href={'/about'} className='text-base font-medium hover:text-accent-primary transition-colors duration-300'>About</Link>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </SheetContent>
                </Sheet>

            </Container>
        </nav>
    )
}

export default Navbar