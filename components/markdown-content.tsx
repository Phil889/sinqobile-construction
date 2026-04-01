'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'

export default function MarkdownContent({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        // Headings
        h1: ({ children }) => (
          <h2 className="font-heading text-3xl font-bold text-primary mt-10 mb-4">
            {children}
          </h2>
        ),
        h2: ({ children }) => (
          <h2 className="font-heading text-2xl font-bold text-primary mt-8 mb-3">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="font-heading text-xl font-bold text-primary mt-6 mb-2">
            {children}
          </h3>
        ),
        h4: ({ children }) => (
          <h4 className="font-heading text-lg font-semibold text-primary mt-4 mb-2">
            {children}
          </h4>
        ),

        // Paragraphs
        p: ({ children }) => (
          <p className="text-secondary mb-4 leading-relaxed">{children}</p>
        ),

        // Links — use Next.js Link for internal, regular <a> for external
        a: ({ href, children }) => {
          if (href && href.startsWith('/')) {
            return (
              <Link
                href={href}
                className="text-primary underline decoration-accent/40 underline-offset-2 hover:text-accent hover:decoration-accent transition-colors"
              >
                {children}
              </Link>
            )
          }
          return (
            <a
              href={href}
              className="text-primary underline decoration-accent/40 underline-offset-2 hover:text-accent hover:decoration-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          )
        },

        // Bold / Strong
        strong: ({ children }) => (
          <strong className="font-semibold text-primary">{children}</strong>
        ),

        // Italic / Emphasis
        em: ({ children }) => (
          <em className="italic text-secondary">{children}</em>
        ),

        // Unordered lists
        ul: ({ children }) => (
          <ul className="list-disc list-outside ml-6 mb-4 space-y-1 text-secondary">
            {children}
          </ul>
        ),

        // Ordered lists
        ol: ({ children }) => (
          <ol className="list-decimal list-outside ml-6 mb-4 space-y-1 text-secondary">
            {children}
          </ol>
        ),

        // List items
        li: ({ children }) => (
          <li className="leading-relaxed">{children}</li>
        ),

        // Tables
        table: ({ children }) => (
          <div className="overflow-x-auto mb-6 rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              {children}
            </table>
          </div>
        ),
        thead: ({ children }) => (
          <thead className="bg-primary/5">{children}</thead>
        ),
        tbody: ({ children }) => (
          <tbody className="divide-y divide-gray-100 bg-white">{children}</tbody>
        ),
        tr: ({ children }) => (
          <tr className="hover:bg-gray-50 transition-colors">{children}</tr>
        ),
        th: ({ children }) => (
          <th className="px-4 py-3 text-left text-xs font-bold text-primary uppercase tracking-wider">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="px-4 py-3 text-secondary whitespace-normal">{children}</td>
        ),

        // Blockquote
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-accent pl-4 my-4 italic text-secondary/80">
            {children}
          </blockquote>
        ),

        // Horizontal rule
        hr: () => <hr className="my-8 border-t border-gray-200" />,

        // Code (inline)
        code: ({ children }) => (
          <code className="bg-gray-100 text-primary px-1.5 py-0.5 rounded text-sm font-mono">
            {children}
          </code>
        ),

        // Code block (pre)
        pre: ({ children }) => (
          <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm">
            {children}
          </pre>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
