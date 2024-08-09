import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav>
                <li><Link>Home</Link></li>
                <li><Link>About</Link></li>
                <li><Link>Product</Link></li>
                <li><Link>Blog</Link></li>
                <li><Link>Contact</Link></li>
            </nav>
        </div>
    )
}
