import Image from 'next/image'
import Link from 'next/link'
import { Award, Linkedin, MapPin, ShieldCheck } from 'lucide-react'

interface AuthorBioProps {
  name?: string
  jobTitle?: string
  bio?: string
  image?: string
  expertise?: string[]
  linkedinUrl?: string
  lang?: string
  className?: string
}

/**
 * E-E-A-T author bio card rendered below blog posts and on key service pages.
 *
 * Visible expertise signals matter to both Google (per Dec 2025 E-E-A-T update)
 * and to AI search engines deciding whether to cite the content.
 */
export function AuthorBio({
  name = 'Dingwayo Reason Ndlovu',
  jobTitle = 'Founder & NHBRC Registered Builder',
  bio = 'NHBRC registered builder with 15+ years of hands-on construction experience across Gauteng. Founded Sinqobile Construction in 2010 and has delivered 500+ projects spanning new home builds, renovations, plastering, paving, roofing, and home extensions across Johannesburg, Sandton, Pretoria, and Centurion.',
  image = '/images/dingwayo-ndlovu.jpg',
  expertise = [
    'NHBRC Compliance',
    'SANS 10400 Building Regulations',
    'Residential Construction',
    'Home Renovations',
    'Project Management',
    'Construction Cost Estimation',
  ],
  linkedinUrl,
  lang = 'en',
  className = '',
}: AuthorBioProps) {
  return (
    <aside
      className={`relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 md:p-8 shadow-sm ${className}`}
      aria-label="About the author"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="flex items-start gap-3 mb-5">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100">
          <ShieldCheck className="w-5 h-5 text-yellow-700" aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            About the Author
          </p>
          <p className="text-sm text-gray-700">Written and verified by:</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="shrink-0">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
            <Image
              src={image}
              alt={`${name} – ${jobTitle}, Sinqobile Construction`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 96px, 128px"
              itemProp="image"
            />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight" itemProp="name">
            <Link
              href={`/${lang}/about`}
              className="hover:text-yellow-600 transition-colors"
              itemProp="url"
            >
              {name}
            </Link>
          </h3>
          <p className="mt-1 text-sm md:text-base font-medium text-gray-700" itemProp="jobTitle">
            {jobTitle}
          </p>
          <p className="mt-1 text-sm text-gray-500 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Sandton, Gauteng — serving the Greater Johannesburg metro</span>
          </p>

          <p className="mt-3 text-sm md:text-base text-gray-700 leading-relaxed" itemProp="description">
            {bio}
          </p>

          {expertise.length > 0 && (
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1">
                <Award className="w-3.5 h-3.5" aria-hidden="true" />
                Expertise & Credentials
              </p>
              <ul className="flex flex-wrap gap-2" itemProp="knowsAbout">
                {expertise.map((tag) => (
                  <li
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 border border-gray-200"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={`/${lang}/about`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-yellow-700 hover:text-yellow-800 hover:underline"
            >
              Read full bio →
            </Link>
            {linkedinUrl && (
              <Link
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline"
                itemProp="sameAs"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
                LinkedIn
              </Link>
            )}
          </div>
        </div>
      </div>

      <link itemProp="worksFor" href="https://www.sinqobileconstruction.co.za/#organization" />
    </aside>
  )
}

export default AuthorBio
