import React, { useEffect, useState } from 'react'
import axios from "axios";

const App = () => {
  const [userdata, setUserdata] = useState([])
  const [index, setIndex] = useState(1)

  const getdata = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    )
    setUserdata(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    getdata()
  }, [index])

  let printUserdata = (
    <div className="col-span-full min-h-[60vh] flex flex-col items-center justify-center">
      <div className="w-10 h-10 border-4 border-zinc-700 border-t-amber-400 rounded-full animate-spin"></div>

      <h3 className="text-zinc-400 mt-4 text-sm">
        Loading beautiful photos...
      </h3>
    </div>
  )

  if (userdata.length > 0) {
    printUserdata = userdata.map((elem, idx) => {
      return (
        <div
          key={idx}
          className="group bg-zinc-900/70 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300"
        >
          <a
            href={elem.url}
            target="_blank"
            rel="noreferrer"
          >
            {/* Image */}
            <div className="relative h-52 w-full overflow-hidden">
              <img
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                src={elem.download_url}
                alt={elem.author}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* View button */}
              <div className="absolute bottom-3 right-3 bg-white/90 text-black text-xs font-semibold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                View →
              </div>
            </div>

            {/* Card content */}
            <div className="p-4">
              <p className="text-xs text-zinc-500 mb-1">
                Photographer
              </p>

              <h2 className="text-white font-semibold truncate">
                {elem.author}
              </h2>

              <p className="text-xs text-zinc-500 mt-2">
                Photo #{idx + 1}
              </p>
            </div>
          </a>
        </div>
      )
    })
  }

  return (
    <div className="min-h-screen bg-[#09090b] text-white">

      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Snap<span className="text-amber-400">Gallery</span>
            </h1>

            <p className="text-xs text-zinc-500 mt-1">
              A simple React photo gallery
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full">
            <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-zinc-400">
              Picsum Photos
            </span>
          </div>

        </div>
      </header>


      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* Page heading */}
        <div className="mb-8">

          <div className="flex items-end justify-between">

            <div>
              <p className="text-amber-400 text-sm font-medium mb-2">
                EXPLORE
              </p>

              <h2 className="text-3xl md:text-4xl font-bold">
                Discover Photos
              </h2>

              <p className="text-zinc-500 text-sm mt-2">
                Browse through a collection of random photographs.
              </p>
            </div>

            <div className="hidden md:block text-right">
              <p className="text-2xl font-bold">
                {userdata.length}
              </p>
              <p className="text-xs text-zinc-500">
                Photos
              </p>
            </div>

          </div>

        </div>


        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {printUserdata}
        </div>


        {/* Pagination */}
        <div className="flex items-center justify-center mt-12">

          <div className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-2 shadow-xl">

            <button
              onClick={() => {
                setUserdata([])

                if (index > 1) {
                  setIndex(index - 1)
                }
              }}
              disabled={index === 1}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold
              bg-zinc-800 hover:bg-zinc-700
              disabled:opacity-30 disabled:cursor-not-allowed
              transition"
            >
              ← Prev
            </button>


            <div className="px-5 text-center min-w-[80px]">
              <p className="text-[10px] text-zinc-500 uppercase tracking-wider">
                Page
              </p>

              <p className="text-lg font-bold text-amber-400">
                {index}
              </p>
            </div>


            <button
              onClick={() => {
                setUserdata([])
                setIndex(index + 1)
              }}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold
              bg-amber-400 hover:bg-amber-300
              text-black transition"
            >
              Next →
            </button>

          </div>

        </div>

      </main>


      {/* Footer */}
      <footer className="border-t border-zinc-900 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center">
          <p className="text-xs text-zinc-600">
            Built with React + Axios + useEffect
          </p>
        </div>
      </footer>

    </div>
  )
}

export default App