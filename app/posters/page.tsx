import Menu from '../components/menu'

import Image from 'next/image';



const staticProducts = [
    {
        id: 1,
        name: 'austellung',
        href: '#',
        price: '€20',
        description: '3 sizes available',
        imageSrc: '/austellung/IMG_5993.jpg',
        imageAlt: 'austellung poster'
    },
    {
        id: 2,
        name: 'wtf',
        href: '#',
        price: '€20',
        description: '3 sizes available',
        imageSrc: '/wtf/1.jpg',
        imageAlt: 'wtf poster'
    },
    {
        id: 3,
        name: 'booookkk',
        href: '#',
        price: '€20',
        description: '3 sizes available',
        imageSrc: '/boooookkkkk/boooookkkkk Page 17.jpg',
        imageAlt: 'booookkk poster'
    },
    {
        id: 4,
        name: 'www1',
        href: '#',
        price: '€20',
        description: '3 sizes available',
        imageSrc: '/www1/18.jpg' ,
        imageAlt: 'www1 poster'
    },
]

export default function Home() {

  return (
    <>
        <div className='bg-black'>
            <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
                <h2 id="products-heading" className='sr-only '>Products</h2>
                <div className='grid grid-cols-1 gap-y-10 font-victor-mono gap-x-6 xl:gap-x-8'>
                    {staticProducts.map((product) => (
                        <a key={product.id} href={product.href} className='group'>
                            <div className='flex flex-col items-center'>
                              <div className='w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3'>
                                <img
                                  src={product.imageSrc}
                                  alt={product.imageAlt}
                                  className='mx-auto my-auto w-2/5 h-full object-center object-cover group-hover:opacity-75'
                                />
                              </div>
                              <div className="mt-4 text-center">
                                <h3 className="text-white text-base font-medium line-through">{product.name}</h3>
                                <p className="text-white line-through">{product.price}</p>
                                <p>coming soon</p>
                              </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            
        </div>
        <Menu />

    </>
  );
}