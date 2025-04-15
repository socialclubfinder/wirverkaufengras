import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} wirverkaufengras.de - Ihr Verzeichnis für medizinisches Cannabis
          </p>
          <div className="flex items-center space-x-6">
            <Link
              href="/impressum"
              className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Impressum
            </Link>
            <a
              href="https://t.me/wirverkaufengras"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Telegram
            </a>
          </div>
        </div>
        <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400">
          Alle gelisteten Anbieter sind offiziell in Deutschland zugelassen. 
          Konsultieren Sie immer einen Arzt für medizinische Beratung.
        </p>
      </div>
    </footer>
  );
}