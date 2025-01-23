import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-light text-white mb-8">basalte</h1>
        <Link
          href="/discover"
          className="inline-block border border-white text-white px-8 py-3 text-lg font-light hover:bg-white hover:text-black transition-colors"
        >
          découvrir
        </Link>
      </div>
    </div>
  )
}

