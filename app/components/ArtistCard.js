import Image from 'next/image'

export default function ArtistCard({ name, category, priceRange, location, image }) {
  return (
    <div>
      <div className="p-4 rounded-lg shadow-lg bg-white w-80">
        <Image src={image} height={300} width={400} alt="Artist" className="w-full h-48 object-cover rounded-md mb-4" />
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">Category: {category}</p>
        <p className="text-gray-600">Price Range: {priceRange}</p>
        <p className="text-gray-600">Location: {location}</p>
        <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Ask for Quote
        </button>
      </div>
    </div>
  )
}
