'use client'
import { useRouter } from 'next/navigation'

export default function CategoryCard({ thumbnail, category, route }) {
  const router = useRouter()
  return (
    <div className='w-80 h-52 relative shadow-2xl   '>
      <div className="image w-full h-full absolute -z-10 top-0 left-0">
        <img className='w-full h-full rounded-lg' src={thumbnail} alt="category image" />
      </div>
      <div className="w-full h-full flex justify-center items-center flex-col gap-3 bg-black/40 rounded-lg">
        <span className='text-4xl text-white font-bold font-mono'>{category}</span>
        <button onClick={() => router.push(route)} className='py-2 px-6 border border-white rounded-full font-bold text-sm text-white hover:bg-white hover:text-black cursor-pointer transition-all duration-300 ease-in-out '>Explore</button>
      </div>
    </div>
  )
}
