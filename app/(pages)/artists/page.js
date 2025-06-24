'use client'
import React, { useState } from 'react'
import ArtistCard from '../../components/ArtistCard'
import data from "@/app/data/artistData.json"

export default function Page() {
  const [artists, setArtists] = useState(data);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  // options lists
  const categoryOptions = [...new Set(artists.map(artist => artist.category))]
  const locatioOptions = [...new Set(artists.map(artist => artist.location))]
  const priceRangeOptions = ["0 - 25000", "25000 - 50000", "50000 - 75000", "75000 - 100000"]

  // filter logic based on category location and price
  const filteredArtists = artists.filter((artist) => {
    const categoryMatch = categoryFilter ? artist.category === categoryFilter : true;
    const locationMatch = locationFilter ? artist.location === locationFilter : true;

    const priceMatch = priceFilter
      ? (() => {
        const [min, max] = artist.priceRange
          .replace(/₹|,/g, "")
          .split(" - ")
          .map(Number);
        const [fMin, fMax] = priceFilter.split("-").map(Number);
        return min >= fMin && max <= fMax;
      })()
      : true;

    return categoryMatch && locationMatch && priceMatch;
  });

  return (
    <>
      <div className="filter">
        <div className="flex mb-6 text-xs font-bold md:text-sm justify-end">
          {/* category dropdown */}
          <select onChange={(e) => setCategoryFilter(e.target.value)} className="p-1 border rounded">
            <option value="">All Categories</option>
            {categoryOptions.map((option, index) => {
              return <option key={index} value={option}>{option}</option>
            })}
          </select>
          {/* location dropdown */}
          <select onChange={(e) => setLocationFilter(e.target.value)} className="p-1 border rounded">
            <option value="">All Locations</option>
            {locatioOptions.map((option, index) => {
              return <option key={index} value={option}>{option}</option>
            })}
          </select>
          {/* price range dropdown */}
          <select onChange={(e) => setPriceFilter(e.target.value)} className="p-1 border rounded">
            <option value="">All Prices</option>
            {priceRangeOptions.map((option, index) => {
              return <option key={index} value={option}> ₹{option.replace("-", "- ₹")}</option>
            })}
          </select>
        </div>

      </div>

      {/* Artists list      */}
      <div className='grid gap-4 place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

        {filteredArtists.map((artist) => {
          return <ArtistCard key={artist.id} {...artist} />
        })}

      </div>
    </>
  )
}
