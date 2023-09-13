import Image from 'next/image';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="flex w-full justify-between bg-red-100 px-4 py-2">
      <div className="bg-red-900 flex text-amber-50">Learn US States</div>
      <div className="bg-orange-100 flex  justify-center items-center">
        <div >
        <Image
          src="assets/moon.svg"
          width={30}
          height={50}
          alt='dark mode switch'
        />
        </div>
        <Link href="/about" className='p-3'>
          <Image
            src="assets/question.svg"
            width={30}
            height={50}
            alt="link to how to play page"
          />
        </Link>    
       
      </div>
    </nav>
  )
}

export default Navigation;
