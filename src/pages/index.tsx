import clsx from 'classnames'
import { IconFacebook } from 'components/icons/components/IconFacebook'
import { IconGithub } from 'components/icons/components/IconGithub'
import { IconLinkedin } from 'components/icons/components/IconLinkedin'
import { IconTwitter } from 'components/icons/components/IconTwitter'
import { SwitchButton } from 'components/SwitchButton'
import { useState } from 'react'

export const MainPage = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <section
      className={clsx(
        'flex flex-col justify-center items-center space-y-6 h-screen text-center relative',
        darkMode ? 'bg-black' : 'bg-[#f8f5fa]',
      )}
    >
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
        Enthusiastic | Creative | Minimalist | Web Developer 👨🏻‍💻
      </h2>
      <div className="flex items-center space-x-6">
        <a href="https://github.com/namtrhg" target="_blank" rel="noreferrer">
          <IconGithub
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
          href="https://linkedin.com/in/namtrhg"
          target="_blank"
          rel="noreferrer"
        >
          <IconLinkedin
            className={clsx('h-9 w-9', darkMode ? 'text-white' : 'text-black')}
          />
        </a>
      </div>
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-20 text-sm">
        <div
          className={clsx(
            'text-left space-y-2',
            darkMode ? 'text-white' : 'text-black',
          )}
        >
          <p className="font-bold">Projects that I have worked</p>
          <ul className="list-disc text-left ml-5 space-y-2">
            <li>
              <a
                className="underline"
                href="https://www.gravitylabs.co/"
                target="_blank"
                rel="noreferrer"
              >
                Gravity
              </a>{' '}
              - Frontend Developer
            </li>
            <li>
              <a
                className="underline"
                href="https://mstation.io/"
                target="_blank"
                rel="noreferrer"
              >
                Mstation
              </a>{' '}
              - Frontend Developer
            </li>
            <li>
              <a
                className="underline"
                href="https://legendfantasywar.com/"
                target="_blank"
                rel="noreferrer"
              >
                Legend Fantasy War
              </a>{' '}
              - Frontend Developer
            </li>
            <li>
              <a
                className="underline"
                href="https://kd.newatlantic.vn/"
                target="_blank"
                rel="noreferrer"
              >
                Newatlantic ERP Software
              </a>{' '}
              - Fullstack Developer
            </li>
          </ul>
        </div>
        <div
          className={clsx(
            'text-left space-y-2',
            darkMode ? 'text-white' : 'text-black',
          )}
        >
          <p className="font-bold">Technologies that I used</p>
          <ul className="list-disc text-left ml-5 space-y-2">
            <li>NextJS</li>
            <li>TailwindCSS</li>
            <li>MySQL</li>
            <li>SequelizeJS</li>
            <li>NodeJS</li>
          </ul>
        </div>
      </div>
      <SwitchButton
        labelStyle={clsx('!mt-2', darkMode ? '!text-white' : '!text-black')}
        label="Dark Mode"
        value={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
      <p
        className={clsx(
          'absolute bottom-3 text-sm font-semibold',
          darkMode ? 'text-white' : 'text-black',
        )}
      >
        Contact me at{' '}
        <a
          className="underline text-[#40e0d0]"
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
