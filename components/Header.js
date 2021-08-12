import Image from "next/image";
import {
    SearchIcon,
    GlobeAltIcon,
    UserCircleIcon,
    MenuIcon,
    UsersIcon,
    MenuAlt1Icon,
  } from "@heroicons/react/solid";

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            <div className="relative h-10 flex items-center cursor-pointer my-auto">
            <Image
                src="https://links.papareact.com/qd3"
                layout="fill"
                objectFit="contain"
                objectPosition="left" 
            />

            </div>

            <div className="flex items-center border-2 rounded-full py-2">
            <input
               
                type="text"
                placeholder="Start your search"
                className="pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 flex-grow pr-5"
            />
                 <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />


            </div>

            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="cursor-pointer hidden md:inline">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer"/>
           

                 <div className="flex items-center space-x-2 border-2 p-2 rounded-full hover:bg-gray-200">
                    <MenuIcon className="h-6 cursor-pointer" />
                    <UserCircleIcon className="h-6 cursor-pointer" />
                </div>

            </div>

            

            
        </header>
    )
}

export default Header
