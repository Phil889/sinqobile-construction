import { Star } from 'lucide-react'
import SchemaMarkup from '@/components/schema-markup'
import { Locale } from '@/i18n.config'

export interface ReviewItem {
  author: string
  rating: number
  date: string
  text: string
  serviceType?: string
  location?: string
}

interface ReviewWallProps {
  reviews: ReviewItem[]
  serviceName?: string
  lang?: Locale
  showSchema?: boolean
  className?: string
}

/**
 * Display individual reviews with Review schema for each.
 *
 * Pairs with AggregateRating already in LocalBusiness schema. Individual
 * Review schemas help Google show star ratings AND specific quotes in SERPs.
 */
export function ReviewWall({
  reviews,
  serviceName,
  lang = 'en' as Locale,
  showSchema = true,
  className = '',
}: ReviewWallProps) {
  return (
    <section className={`my-12 ${className}`} aria-label="Customer reviews">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review, index) => (
          <ReviewCard
            key={`${review.author}-${index}`}
            review={review}
            serviceName={serviceName}
            lang={lang}
            showSchema={showSchema}
          />
        ))}
      </div>
    </section>
  )
}

function ReviewCard({
  review,
  serviceName,
  lang,
  showSchema,
}: {
  review: ReviewItem
  serviceName?: string
  lang: Locale
  showSchema: boolean
}) {
  return (
    <article
      className="relative p-5 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
      itemScope
      itemType="https://schema.org/Review"
    >
      {showSchema && (
        <SchemaMarkup
          type="review"
          lang={lang}
          data={{
            author: review.author,
            rating: review.rating,
            date: review.date,
            text: review.text,
            serviceType: serviceName ? 'Service' : undefined,
            serviceName,
          }}
        />
      )}

      <div className="flex items-center gap-1 mb-2" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
            aria-hidden="true"
          />
        ))}
        <meta itemProp="ratingValue" content={String(review.rating)} />
        <meta itemProp="bestRating" content="5" />
        <meta itemProp="worstRating" content="1" />
      </div>

      <blockquote className="text-sm md:text-base text-gray-800 leading-relaxed" itemProp="reviewBody">
        &ldquo;{review.text}&rdquo;
      </blockquote>

      <footer className="mt-3 flex flex-col gap-0.5">
        <p className="text-sm font-semibold text-gray-900" itemProp="author" itemScope itemType="https://schema.org/Person">
          <span itemProp="name">{review.author}</span>
        </p>
        {(review.location || review.serviceType) && (
          <p className="text-xs text-gray-500">
            {[review.serviceType, review.location].filter(Boolean).join(' • ')}
          </p>
        )}
        <time className="text-xs text-gray-400" dateTime={review.date} itemProp="datePublished">
          {new Date(review.date).toLocaleDateString(lang === 'af' ? 'af-ZA' : 'en-ZA', {
            year: 'numeric',
            month: 'long',
          })}
        </time>
      </footer>
    </article>
  )
}

export default ReviewWall
