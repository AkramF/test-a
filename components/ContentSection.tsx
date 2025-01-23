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
  // ... (component implementation)
}

