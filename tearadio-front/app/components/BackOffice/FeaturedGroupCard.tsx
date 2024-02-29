import React from 'react'
import Image from 'next/image'
const FeaturedGroupCard = () => {
  return (
    <div className="my-6">
    <div className="flex overflow-x-auto gap-4">
      {/* Card 1 */}
      <div className="card bg-blue-500 text-primary-content shadow-xl min-w-max">
        <div className="card-body">
          {/* eslint-disable-next-line @next/next/no-img-element */}

            <Image width={400} height={400} src="https://images.unsplash.com/photo-1682685794761-c8e7b2347702?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Group 1" className="mx-auto h-40 w-full object-cover" />
            <h2 className="card-title">RADIO MINERVA</h2>
            <p>Why You Should Sleep 16 Hours a Day</p>
            <div className="card-actions justify-between">
            <div>
                <button className="btn btn-secondary btn-sm mr-2">Play</button>
                <button className="btn btn-secondary btn-sm">Download</button>
            </div>
            <button className="btn btn-secondary btn-sm">11m</button>
            </div>
        </div>
    </div>


      {/* Card 2 */}
      <div className="card bg-red-500 text-primary-content min-w-max">
        <div className="card-body">
          {/* eslint-disable-next-line @next/next/no-img-element */}

          <Image width={400} height={400} src="https://images.unsplash.com/photo-1682685794761-c8e7b2347702?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Group 2" className="mx-auto h-40 w-full object-cover" />
          <h2 className="card-title">Cette Vie Française</h2>
          <p>How to Cook Macarons</p>
          <div className="card-actions justify-between">
            <div>
                <button className="btn btn-secondary btn-sm mr-2">Play</button>
                <button className="btn btn-secondary btn-sm">Download</button>
            </div>
            <button className="btn btn-secondary btn-sm">11m</button>
            </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card bg-green-500 text-primary-content min-w-max">
        <div className="card-body">
          {/* eslint-disable-next-line @next/next/no-img-element */}

          <Image width={400} height={400} src="https://images.unsplash.com/photo-1682685794761-c8e7b2347702?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Group 3" className="mx-auto h-40 w-full object-cover" />
          <h2 className="card-title">Adventure Club</h2>
          <p>Exploring the World's Hidden Wonders</p>
          <div className="card-actions justify-between">
            <div>
                <button className="btn btn-secondary btn-sm mr-2">Play</button>
                <button className="btn btn-secondary btn-sm">Download</button>
            </div>
            <button className="btn btn-secondary btn-sm">11m</button>
            </div>
        </div>
      </div>
      <div className="card bg-green-500 text-primary-content min-w-max">
        <div className="card-body">
          {/* eslint-disable-next-line @next/next/no-img-element */}

          <Image width={400} height={400} src="https://images.unsplash.com/photo-1682685794761-c8e7b2347702?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Group 3" className="mx-auto h-40 w-full object-cover" />
          <h2 className="card-title">Adventure Club</h2>
          <p>Exploring the World's Hidden Wonders</p>
          <div className="card-actions justify-between">
            <div>
                <button className="btn btn-secondary btn-sm mr-2">Play</button>
                <button className="btn btn-secondary btn-sm">Download</button>
            </div>
            <button className="btn btn-secondary btn-sm">11m</button>
            </div>
        </div>
      </div>
      <div className="card bg-green-500 text-primary-content min-w-max">
        <div className="card-body">
          {/* eslint-disable-next-line @next/next/no-img-element */}

          <Image width={400} height={400} src="https://images.unsplash.com/photo-1682685794761-c8e7b2347702?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Group 3" className="mx-auto h-40 w-full object-cover" />
          <h2 className="card-title">Adventure Club</h2>
          <p>Exploring the World's Hidden Wonders</p>
          <div className="card-actions justify-between">
            <div>
                <button className="btn btn-secondary btn-sm mr-2">Play</button>
                <button className="btn btn-secondary btn-sm">Download</button>
            </div>
            <button className="btn btn-secondary btn-sm">11m</button>
            </div>
        </div>
      </div>
      
    </div>
  </div>
  )
}

export default FeaturedGroupCard
