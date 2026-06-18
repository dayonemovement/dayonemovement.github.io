import { Routes, Route } from 'react-router-dom'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


import Home from './pages/Home'
const NotFound = lazy(() => import('./pages/NotFound'))
const Media = lazy(() => import('./pages/Media'))
const Events = lazy(() => import('./pages/Events'))
const Resources = lazy(() => import('./pages/Resources'))

import PageSkeleton from './components/PageSkeleton'
import { lazy, Suspense } from 'react'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />

      <Suspense
        fallback={<PageSkeleton />}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/media" element={<Media />} />
          <Route path="/events" element={<Events />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </Suspense>
      <Footer />
    </>

  )
}