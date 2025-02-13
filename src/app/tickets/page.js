'use client'
import React, { useEffect, useState, useRef } from 'react'
import EventTicket from '@/components/Ticket'
import { toPng } from 'html-to-image'

const TicketsPage = () => {
  const [tickets, setTickets] = useState([])
  const [filteredTickets, setFilteredTickets] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [downloadingTickets, setDownloadingTickets] = useState({})
  const [searchQuery, setSearchQuery] = useState('')
  const ticketRefs = useRef({})

  useEffect(() => {
    const loadTickets = async () => {
      setIsLoading(true)
      const savedTickets = JSON.parse(localStorage.getItem('myTickets') || '[]').reverse()
      setTickets(savedTickets)
      setFilteredTickets(savedTickets)
      await new Promise(resolve => setTimeout(resolve, 500))
      setIsLoading(false)
    }
    loadTickets()
  }, [])

  useEffect(() => {
    const filtered = tickets.filter(ticket => {
      const query = searchQuery.toLowerCase()
      return ticket.name.toLowerCase().includes(query) || ticket.email.toLowerCase().includes(query)
    })
    setFilteredTickets(filtered)
  }, [searchQuery, tickets])

  const downloadTicket = async (index) => {
    try {
      setDownloadingTickets(prev => ({ ...prev, [index]: true }))
      const element = ticketRefs.current[index]
      if (!element) throw new Error('Ticket element not found')
      const clone = element.cloneNode(true)
      document.body.appendChild(clone)
      const dataUrl = await toPng(clone, { quality: 1.0, pixelRatio: 2, skipAutoScale: true })
      document.body.removeChild(clone)
      const link = document.createElement('a')
      link.download = `ticket-${filteredTickets[index].eventName || 'event'}.png`
      link.href = dataUrl
      link.click()
    } catch (err) {
      console.error('Error downloading ticket:', err.message || err)
    } finally {
      setDownloadingTickets(prev => ({ ...prev, [index]: false }))
    }
  }

  const TicketSkeleton = () => (
    <div className="animate-pulse">{/* Skeleton content */}</div>
  )

  return (
    <div className="w-full max-w-7xl mx-auto px-4 relative z-20">
      <h1 className="text-4xl md:text-5xl font-roadrage text-center mb-12">My Tickets</h1>
      <div className="mb-12 p-6 bg-greenfour rounded-[32px] border border-greenthree">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-lg bg-greentwo border border-greenthree focus:border-greenone focus:outline-none text-darkgrey placeholder-lightgrey transition-colors"
        />
      </div>
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[...Array(4)].map((_, i) => <TicketSkeleton key={i} />)}
        </div>
      ) : filteredTickets.length === 0 ? (
        <div className="text-center font-roboto text-lightgrey"><p className="text-xl">No tickets found</p><p className="mt-2">Book some tickets to see them here!</p></div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredTickets.map((ticket, index) => (
            <div key={index} className="group relative">
              <div ref={el => { if (el) ticketRefs.current[index] = el }} className="transform group-hover:scale-[1.02] transition-all duration-300">
                <EventTicket ticketDetails={ticket} />
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[20px] flex items-center justify-center">
                <button onClick={() => downloadTicket(index)} disabled={downloadingTickets[index]} className="flex items-center gap-2 bg-borderone hover:bg-bordertwo text-white font-roboto py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {downloadingTickets[index] ? 'Downloading...' : 'Download Ticket'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TicketsPage
