'use client'
import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import data from '@/app/data/managerdashboard.json'

export default function Page() {
  const [artists, setArtists] = useState(data);

  const handleDelete = (index) => {
    const choice = confirm("Do you really want to delete?");
    if (choice) {
      const updatedArtists = artists.filter((_, i) => i !== index);
      setArtists(updatedArtists);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Manager Dashboard</h2>

      {(!artists.length) ? (
        <p className="text-center text-gray-600">No artist submissions found.</p>
      ) : (
        
        <div className="overflow-x-auto">
          <table className="min-w-[600px] w-full border text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Name</th>
                <th className="border p-2">Category</th>
                <th className="border p-2">City</th>
                <th className="border p-2">Fee</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {artists.map((artist, index) => (
                <tr key={index} className="text-center">
                  <td className="border p-2">{artist.name}</td>
                  <td className="border p-2">{artist.category.join(", ")}</td>
                  <td className="border p-2">{artist.city}</td>
                  <td className="border p-2">{artist.feeRange}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex justify-center items-center gap-2"
                    >
                      Delete
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
