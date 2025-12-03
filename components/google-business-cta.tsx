interface GoogleBusinessCTAProps {
  dict: any
}

export default function GoogleBusinessCTA({ dict }: GoogleBusinessCTAProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
          {dict.googleBusinessCTA.title}
        </h2>
        <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
          {dict.googleBusinessCTA.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {dict.googleBusinessCTA.leaveReview}
          </a>
          <a
            href="https://www.google.com/maps/search/MD+Builders+Gauteng"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-secondary transition-colors"
          >
            {dict.googleBusinessCTA.findOnMaps}
          </a>
        </div>
      </div>
    </section>
  )
}