import type { Metadata } from 'next'
import '/style/layout.css'
import './globals.css'
import Sidebar from '@/components/layout/Sidebar'
import Searchbar from '@/components/layout/Searchbar'
import Followbar from '@/components/layout/Followbar'
import Tagtweet from '@/components/layout/Tagtweet'

export const metadata: Metadata = {
  title: 'Twitter.V2',
  description: 'Project HCRL',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <body>
      <div id='Container' className='container h-full'>
        <div id='DivGrid' className='grid grid-cols-4 h-full'>
          <div id='SD'>
            <Sidebar />
          </div>
          <div className='col-span-3 lg:col-span-2 border-x-[1px] border-neutral-120'>
            {children}
          </div>
          <div >
            <div>
              <Searchbar />
            </div>
            <div>
              <Tagtweet />
            </div>
            <div>
              <Followbar />
            </div>
          </div>
        </div>
      </div>
    </body>

  )
}
