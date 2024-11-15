export function Footer() {

  return (

    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Info */}

          <div className="col-span-1 md:col-span-1">

            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">

              Project Oasis

            </h3>

            <p className="text-gray-600 dark:text-gray-400">

              Reimagining personal finance for the modern world.

            </p>

          </div>



          {/* Quick Links */}

          <div>

            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">

              Quick Links

            </h3>

            <ul className="space-y-2">

              <li>

                <a 

                  href="/#features" 

                  className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-500"

                >

                  Features

                </a>

              </li>

              <li>

                <a 

                  href="/#how-it-works" 

                  className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-500"

                >

                  How It Works

                </a>

              </li>

              <li>

                <a 

                  href="/#pricing" 

                  className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-500"

                >

                  Pricing

                </a>

              </li>

              <li>

                <a 

                  href="/#faq" 

                  className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-500"

                >

                  FAQ

                </a>

              </li>

            </ul>

          </div>



          {/* Legal */}

          <div>

            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">

              Legal

            </h3>

            <ul className="space-y-2">

              <li>

                <a 

                  href="/privacy" 

                  className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-500"

                >

                  Privacy Policy

                </a>

              </li>

              <li>

                <a 

                  href="/terms" 

                  className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-500"

                >

                  Terms of Service

                </a>

              </li>

            </ul>

          </div>



          {/* Social */}

          <div>

            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">

              Connect

            </h3>

            <div className="flex space-x-4">

              <a

                href="https://twitter.com"

                target="_blank"

                rel="noopener noreferrer"

                className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-500"

              >

                <span className="sr-only">Twitter</span>

                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">

                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />

                </svg>

              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>

  );

} 
