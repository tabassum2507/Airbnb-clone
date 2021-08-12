import Image from "next/image"

function SmallCard({ img, location, distance }) {
    return (
        <div>
            <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-200 hover:scale-105 transition transform duration-200 ease-out">
      {/* left */}
            <div className="relative h-16 w-16">
            <Image src={img} layout="fill" className="rounded-lg" />
            </div>
      {/* left */}
            <div>
                <h2>{location}</h2>
                <h3 className="text-gray-600">{distance}</h3>
            </div>
            </div>
            
        </div>
    )
}

export default SmallCard
