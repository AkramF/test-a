import Link from "next/link"
import { Instagram, Linkedin, Facebook, Youtube, PinIcon, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-16 px-8 md:px-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="md:col-span-3">
            <Link href="/" className="inline-block mb-8">
              <span className="text-3xl font-light">basalte</span>
            </Link>
            <div className="space-y-1 text-sm font-light text-gray-400">
              <p>fraterstraat 37b</p>
              <p>9820 merelbeke, belgique</p>
              <p className="mt-4">+32 9 385 78 38</p>
              <p>info@basalte.be</p>
            </div>
          </div>

          {/* Middle Columns */}
          <div className="md:col-span-3">
            <h3 className="text-[#B5A482] font-light mb-4">produits</h3>
            <ul className="space-y-2 text-sm font-light text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  commandes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  interphones
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  musique
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  supports iPad
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  prises et lumières
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  détecteurs de mouvement
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  serveurs Core
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[#B5A482] font-light mb-4">Basalte Home</h3>
            <ul className="space-y-2 text-sm font-light text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  lumières et stores
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  climat
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  musique
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  sécurité
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="md:col-span-3">
            <ul className="space-y-2 text-sm font-light text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  basalte home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  produits
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  explorez
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  notre histoire
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  emplois
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  réalisations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  support
                </Link>
              </li>
              <li className="pt-2">
                <Link href="#" className="hover:text-white transition-colors">
                  basalte <span className="text-[#B5A482]">world</span>
                </Link>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-6">
              <a href="#" className="text-white hover:text-[#B5A482] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-[#B5A482] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-[#B5A482] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-[#B5A482] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-[#B5A482] transition-colors">
                <PinIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-[#B5A482] transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-gray-400 font-light">
          <div className="flex items-center gap-1 mb-4 md:mb-0">
            <span>fabriqué à la main avec</span>
            <span className="text-white">♡</span>
            <span>en Belgique</span>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <div className="flex gap-4">
              <span>©2025 Basalte bv - BE 0896.833.789</span>
              <Link href="#" className="hover:text-white transition-colors">
                politique de confidentialité
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                cookies
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                conditions générales
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <span>Site web créé par</span>
              <Link href="https://eekairis.be" className="hover:text-white transition-colors">
                eekairis.be
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

