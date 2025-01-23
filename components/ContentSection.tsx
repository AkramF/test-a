import Image from "next/image"
import Link from "next/link"

interface ContentSectionProps {
  title: string
  description: string
  imageUrl: string
  linkText: string
  linkHref: string
  imageLeft?: boolean
}

export default function ContentSection({
  title,
  description,
  imageUrl,
  linkText,
  linkHref,
  imageLeft = false,
}: ContentSectionProps) {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${imageLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}>
          <div className="md:w-1/2">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            <p className="text-lg text-gray-600">{description}</p>
            <Link
              href={linkHref}
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-900"
            >
              {linkText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

