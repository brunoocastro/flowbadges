import Link from 'next/link'

const FooterCP: React.FC = () => (
  <footer className="relative bg-base-white bg-blend-soft-light pt-8 pb-6">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap text-left lg:text-left">
        <div className="w-full lg:w-6/12 px-4">
          <h4 className="text-3xl fonat-semibold text-blueGray-700">
            Let's keep in touch!
          </h4>
          <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
            Find us on any of these platforms, we respond 1-2 business days.
          </h5>
          <div className="mt-6 lg:mb-0 mb-6">
            <button
              className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i className="fab fa-twitter"></i>
            </button>
            <button
              className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i className="fab fa-facebook-square"></i>
            </button>
            <button
              className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i className="fab fa-dribbble"></i>
            </button>
            <button
              className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i className="fab fa-github"></i>
            </button>
          </div>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <div className="flex flex-wrap items-top mb-6">
            <div className="w-full lg:w-4/12 px-4 ml-auto">
              <ul className="list-unstyled">
                <li>
                  <Link href="/about">
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                      Sobre o projeto
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contributors">
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                      Quem que fez?
                    </a>
                  </Link>
                </li>
                <li>
                  <a
                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://www.github.com/brunoocastro/flowbadges"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://www.twitch.tv/tonelive"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    Twitch
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-4/12 px-4 ml-auto">
              <ul className="list-unstyled">
                <li>
                  <Link href="/">
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/ranking">
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                      Ranking
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-blueGray-500 font-semibold py-1">
            Projeto
            <a
              href="https://discord.gg/eFFuZecjqR"
              className="text-blueGray-500 hover:text-gray-800"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              Flow Badges -
            </a>{' '}
            <a
              href="https://github.com/brunoocastro/flowbadges"
              className="text-blueGray-500 hover:text-blueGray-800"
              target="_blank"
              rel="noreferrer"
            >
              OpenSource <span id="get-current-year">2021</span> Flowers
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default FooterCP
