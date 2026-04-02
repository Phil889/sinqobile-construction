import Link from 'next/link'
import { Home, ArrowLeft, Phone, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-8xl font-bold text-yellow-500 mb-4">404</h1>
            <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
            <p className="text-lg text-gray-600 mb-8">
              Sorry, the page you are looking for does not exist or has been moved.
              Let us help you find what you need.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Link
                href="/en"
                className="flex items-center justify-center space-x-2 bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
              >
                <Home size={20} />
                <span>Go to Homepage</span>
              </Link>
              <Link
                href="/en/services"
                className="flex items-center justify-center space-x-2 border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors"
              >
                <Search size={20} />
                <span>View Services</span>
              </Link>
              <Link
                href="/en/contact"
                className="flex items-center justify-center space-x-2 border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
                <span>Contact Us</span>
              </Link>
              <a
                href="tel:+27828688396"
                className="flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                <Phone size={20} />
                <span>Call: +27 82 868 8396</span>
              </a>
            </div>

            <p className="text-sm text-gray-400">
              Sinqobile Construction — Professional Building Services in Johannesburg &amp; Gauteng
            </p>
          </div>
        </div>
      </body>
    </html>
  )
}
