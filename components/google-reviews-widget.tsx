import { Star, ExternalLink } from 'lucide-react';

interface GoogleReviewsWidgetProps {
  dict: any
}

export default function GoogleReviewsWidget({ dict }: GoogleReviewsWidgetProps) {
  const reviews = [
    {
      name: 'Sarah M.',
      rating: 5,
      text: 'Exceptional work on our home renovation! Meshack and his team were professional, punctual, and delivered beyond our expectations. Highly recommend!',
      date: '2 weeks ago',
    },
    {
      name: 'John K.',
      rating: 5,
      text: 'Outstanding paving work. The attention to detail was impressive and the project was completed on time. Will definitely use Sinqobile Construction again.',
      date: '1 month ago',
    },
    {
      name: 'Linda T.',
      rating: 5,
      text: 'Professional service from start to finish. Our bathroom renovation looks amazing! Great communication and quality workmanship throughout.',
      date: '3 weeks ago',
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating
                ? 'fill-[#FFD600] text-[#FFD600]'
                : 'fill-gray-300 text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {dict.googleReviews.title}
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-5xl font-bold text-gray-900">4.9</span>
                <div>
                  {renderStars(5)}
                  <p className="text-sm text-gray-600 mt-1">127 {dict.googleReviews.reviews}</p>
                </div>
              </div>
            </div>
            <a
              href="https://www.google.com/maps?cid=12743093499437970359"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#FFD600] text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-[#FFD600]/90 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <span>{dict.googleReviews.readAll}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Featured Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>

          {/* Google Badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-3 bg-gray-50 px-6 py-4 rounded-lg shadow-md">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-900">{dict.googleReviews.verifiedOn}</p>
                <p className="text-xs text-gray-600">{dict.googleReviews.trustedProfile}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}