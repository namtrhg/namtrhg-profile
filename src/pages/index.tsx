import clsx from 'classnames'
import { IconFacebook } from 'components/icons/components/IconFacebook'
import { IconGithub } from 'components/icons/components/IconGithub'
import { IconLinkedin } from 'components/icons/components/IconLinkedin'
import { IconTwitter } from 'components/icons/components/IconTwitter'
import { IconYoutube } from 'components/icons/components/IconYoutube'
import { ImgWithFallback } from 'components/ImgWithFallback'
import { SwitchButton } from 'components/SwitchButton'
import { useState } from 'react'

export const MainPage = () => {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <section
      className={clsx(
        'flex flex-col justify-center items-center space-y-3 lg:space-y-6 h-screen text-center px-4',
        darkMode ? 'bg-black' : 'bg-white',
      )}
    >
      <div className="h-40 w-40 overflow-hidden rounded-full border-2 border-emerald-700">
        <ImgWithFallback
          width={160}
          height={160}
          src="/img/profile.webp"
          fallbackSrc="/img/profile.png"
          alt="profile-img"
        />
      </div>
      <h1
        className={clsx(
          'text-4xl lg:text-7xl font-bold',
          darkMode ? 'text-white' : 'text-black',
        )}
      >
        Hi there, I'm Nam!
      </h1>
      <h2
        className={clsx(
          'text-xl lg:text-4xl font-semibold',
          darkMode ? 'text-white' : 'text-black',
        )}
      >
        Enthusiastic | Creative | Web Developer 👨🏻‍💻
      </h2>
      <div className="flex items-center space-x-6">
        <a href="https://github.com/namtrhg" target="_blank" rel="noreferrer">
          <IconGithub
            className={clsx('h-9 w-9', darkMode ? 'text-white' : 'text-black')}
          />
        </a>
        <a
          href="https://linkedin.com/in/namtrhg"
          target="_blank"
          rel="noreferrer"
        >
          <IconLinkedin
            className={clsx('h-9 w-9', darkMode ? 'text-white' : 'text-black')}
          />
        </a>
        <a
          href="https://www.facebook.com/nam.tranhoang.94651"
          target="_blank"
          rel="noreferrer"
        >
          <IconFacebook
            className={clsx('h-9 w-9', darkMode ? 'text-white' : 'text-black')}
          />
        </a>
        <a
          href="https://twitter.com/NamTrnH84134954"
          target="_blank"
          rel="noreferrer"
        >
          <IconTwitter
            className={clsx('h-9 w-9', darkMode ? 'text-white' : 'text-black')}
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCXlQV_TdO07JIx5WiDZBYmA"
          target="_blank"
          rel="noreferrer"
        >
          <IconYoutube
            className={clsx('h-9 w-9', darkMode ? 'text-white' : 'text-black')}
          />
        </a>
      </div>
      <div className="flex justify-evenly space-x-10 lg:space-x-20 text-sm">
        <div
          className={clsx(
            'text-left space-y-2',
            darkMode ? 'text-white' : 'text-black',
          )}
        >
          <p className="font-bold">My projects</p>
          <ul className="list-disc text-left ml-5 space-y-2">
            <li>
              <a
                className="underline"
                href="https://www.gravitylabs.co/"
                target="_blank"
                rel="noreferrer"
              >
                Gravity
              </a>
            </li>
            <li>
              <a
                className="underline"
                href="https://mstation.io/"
                target="_blank"
                rel="noreferrer"
              >
                Mstation
              </a>
            </li>
            <li>
              <a
                className="underline"
                href="https://legendfantasywar.com/"
                target="_blank"
                rel="noreferrer"
              >
                Legend Fantasy War
              </a>
            </li>
            <li>
              <a
                className="underline"
                href="https://kd.newatlantic.vn/"
                target="_blank"
                rel="noreferrer"
              >
                NAIT ERP Software
              </a>
            </li>
          </ul>
        </div>
        <div
          className={clsx(
            'text-left space-y-2',
            darkMode ? 'text-white' : 'text-black',
          )}
        >
          <p className="font-bold">Technologies</p>
          <ul className="list-disc text-left ml-5 space-y-2">
            <li>ReactJS</li>
            <li>TailwindCSS</li>
            <li>NodeJS</li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>
      <SwitchButton
        size="md"
        labelStyle={clsx('!mt-1', darkMode ? '!text-white' : '!text-black')}
        label="Dark Mode"
        value={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
      <p
        className={clsx(
          'text-sm font-semibold',
          darkMode ? 'text-white' : 'text-black',
        )}
      >
        Contact me at{' '}
        <a
          className="underline text-emerald-600"
          href="mailto:namtrhg@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          namtrhg@gmail.com
        </a>
      </p>
    </section>
  )
}

export default MainPage
