import { isSSR } from '@dwarvesf/react-utils'
import clsx from 'classnames'
import { IconFacebook } from 'components/icons/components/IconFacebook'
import { IconGithub } from 'components/icons/components/IconGithub'
import { IconLinkedin } from 'components/icons/components/IconLinkedin'
import { IconTwitter } from 'components/icons/components/IconTwitter'
import { SwitchButton } from 'components/SwitchButton'
import { useState } from 'react'

const DARK_MODE = 'darkMode'

export const MainPage = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (isSSR()) {
      return false
    }
    return Boolean(window.localStorage.getItem(DARK_MODE))
  })

  return (
    <section
      className={clsx(
        'flex flex-col justify-center items-center space-y-6 h-screen text-center relative',
        darkMode ? 'bg-black' : 'bg-[#f8f5fa]',
      )}
    >
      <p>{String(darkMode)}</p>
      <h1
        className={clsx(
          'text-7xl font-bold',
          darkMode ? 'text-white' : 'text-black',
        )}
      >
        Hi there, I'm Nam!
      </h1>
      <h2
        className={clsx(
          'text-4xl font-semibold',
          darkMode ? 'text-white' : 'text-black',
        )}
      >
        Enthusiastic | Creative | Minimalist | Frontend developer 👨🏻‍💻
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
      <SwitchButton
        labelStyle={clsx('!mt-2', darkMode ? '!text-white' : '!text-black')}
        label="Dark Mode"
        value={darkMode as boolean}
        onChange={(value) => {
          if (value) {
            setDarkMode(true)
            window.localStorage.setItem(DARK_MODE, '1')
          } else {
            setDarkMode(false)
            window.localStorage.removeItem(DARK_MODE)
          }
        }}
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
