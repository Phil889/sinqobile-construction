'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface HomeFAQProps {
  dict: any
}

export default function HomeFAQ({ dict }: HomeFAQProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  // Get first 5 FAQ items from the FAQ page data
  const faqItems: FAQItem[] = dict.pages.faq.categories
    .flatMap((category: any) => category.items)
    .slice(0, 5)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-lightBackground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
              {dict.pages.faq.title}
            </h2>
            <p className="text-secondary text-lg">
              {dict.pages.faq.subtitle}
            </p>
          </div>

          <div 
            itemScope 
            itemType="https://schema.org/FAQPage"
            className="space-y-4"
          >
            {faqItems.map((item, index) => (
              <div
                key={index}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <h3
                    itemProp="name"
                    className="font-semibold text-lg text-secondary pr-4"
                  >
                    {item.question}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`flex-shrink-0 text-accent transition-transform duration-300 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openIndex === index && (
                  <div
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                    className="px-6 pb-4"
                  >
                    <p 
                      itemProp="text"
                      className="text-secondary leading-relaxed"
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href={`/faq`}
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {dict.pages.faq.stillHaveQuestions.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}