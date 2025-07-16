import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    return (
        <nav className="flex justify-between px-5 py-5 bg-gray-400">
            <div>
                <h1 className="text-black hover:font-bold">Home</h1>
            </div>
            <div className="flex gap-5">
                <h1 className="text-black hover:font-bold">
                    <Link href="./TrainerLogin" >Trainer Login</Link></h1>
                <h1 className="text-black hover:font-bold">Join Now</h1>
            </div>
        </nav>
    )
}

export default Navigation