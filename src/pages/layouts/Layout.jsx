import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <nav>
            <ul>
                <li>Home</li>
                <li>Books</li>
                <li>Commission</li>
            </ul>
        </nav>

        {/* dynamic route changes */}
        <Outlet/>
    </div>
  )
}
