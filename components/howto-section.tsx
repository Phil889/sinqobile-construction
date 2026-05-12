import SchemaMarkup from '@/components/schema-markup'
import { Clock, DollarSign } from 'lucide-react'

interface HowToStep {
  name: string
  text: string
  image?: string
}

interface HowToSectionProps {
  title: string
  description?: string
  totalTime?: string // ISO 8601 duration e.g. "PT2H"
  totalTimeLabel?: string // human-friendly e.g. "About 2 hours"
  estimatedCost?: number // ZAR
  supplies?: string[]
  tools?: string[]
  steps: HowToStep[]
  image?: string
  lang?: string
}

/**
 * Renders a HowTo block with full HowTo schema for rich snippets.
 *
 * Use inside blog posts with step-by-step content. Drives Google's "How to"
 * carousel and matches voice queries like "How do I plaster a wall?"
 */
export function HowToSection({
  title,
  description,
  totalTime,
  totalTimeLabel,
  estimatedCost,
  supplies = [],
  tools = [],
  steps,
  image,
  lang = 'en',
}: HowToSectionProps) {
  return (
    <section
      className="my-12 p-6 md:p-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-yellow-50/50 to-white"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      <SchemaMarkup
        type="howto"
        lang={lang as any}
        data={{
          name: title,
          description,
          image,
          totalTime,
          estimatedCost,
          supplies,
          tools,
          steps,
        }}
      />

      <header className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-yellow-700 mb-2">
          Step-by-step guide
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900" itemProp="name">
          {title}
        </h2>
        {description && (
          <p className="mt-2 text-gray-700 leading-relaxed" itemProp="description">
            {description}
          </p>
        )}

        {(totalTimeLabel || estimatedCost) && (
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            {totalTimeLabel && (
              <div className="inline-flex items-center gap-1.5 text-gray-700">
                <Clock className="w-4 h-4 text-yellow-600" aria-hidden="true" />
                <span>
                  <strong>Time:</strong> {totalTimeLabel}
                </span>
              </div>
            )}
            {estimatedCost && (
              <div className="inline-flex items-center gap-1.5 text-gray-700">
                <DollarSign className="w-4 h-4 text-yellow-600" aria-hidden="true" />
                <span>
                  <strong>Cost:</strong> R{estimatedCost.toLocaleString('en-ZA')}
                </span>
              </div>
            )}
          </div>
        )}
      </header>

      {(supplies.length > 0 || tools.length > 0) && (
        <div className="grid sm:grid-cols-2 gap-4 mb-6 p-4 rounded-lg bg-white border border-gray-100">
          {supplies.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Supplies needed</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                {supplies.map((s) => (
                  <li key={s} className="flex items-start gap-2" itemProp="supply" itemScope itemType="https://schema.org/HowToSupply">
                    <span className="text-yellow-600">•</span>
                    <span itemProp="name">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {tools.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Tools required</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                {tools.map((t) => (
                  <li key={t} className="flex items-start gap-2" itemProp="tool" itemScope itemType="https://schema.org/HowToTool">
                    <span className="text-yellow-600">•</span>
                    <span itemProp="name">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <ol className="space-y-6 counter-reset-step">
        {steps.map((step, index) => (
          <li
            key={`${step.name}-${index}`}
            className="relative pl-12"
            itemProp="step"
            itemScope
            itemType="https://schema.org/HowToStep"
          >
            <span
              className="absolute left-0 top-0 flex items-center justify-center w-9 h-9 rounded-full bg-yellow-500 text-gray-900 font-bold text-base shadow-md"
              aria-hidden="true"
            >
              {index + 1}
            </span>
            <meta itemProp="position" content={String(index + 1)} />
            <h3 className="text-lg font-bold text-gray-900" itemProp="name">
              {step.name}
            </h3>
            <p className="mt-1.5 text-gray-700 leading-relaxed" itemProp="text">
              {step.text}
            </p>
            {step.image && (
              <img
                src={step.image}
                alt={step.name}
                className="mt-3 rounded-lg w-full max-w-md"
                loading="lazy"
                itemProp="image"
              />
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}

export default HowToSection
