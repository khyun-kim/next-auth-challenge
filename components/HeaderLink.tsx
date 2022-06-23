import type { SvgIconComponent } from '@mui/icons-material'
import { ReactNode } from 'react'

type HeaderLinkProps =
  | {
      Icon: SvgIconComponent
      text: string
      avatar?: false
      feed?: boolean
      active?: boolean
      hidden?: boolean
    }
  | {
      Icon: any
      text: string
      avatar?: true
      feed?: boolean
      active?: boolean
      hidden?: boolean
    }

function HeaderLink({
  Icon,
  text,
  avatar = false,
  feed = false,
  active = false,
  hidden = false,
}: HeaderLinkProps) {
  return (
    <div
      className={`${
        hidden && 'hidden md:inline-flex'
      } cursor-pointer flex flex-col justify-center items-center transition-colors ${
        feed
          ? 'text-black/60 hover:text-black dark:text-white/75 dark:hover:text-white lg:-mb-1.5 space-y-1'
          : 'text-gray-500 hover:text-gray-700'
      } ${active && '!text-black dark:!text-white'}`}
    >
      {avatar === true ? <Icon className="!h-7 !w-7 lg:!-mb-1" /> : <Icon />}
      <h4
        className={`text-sm ${
          feed && 'hidden lg:flex justify-center w-full mx-auto'
        }`}
      >
        {text}
      </h4>
      {active && (
        <span className="hidden lg:inline-flex h-0.5 w-[calc(100%+20px)] bg-black dark:bg-white rounded-t-full" />
      )}
    </div>
  )
}

export default HeaderLink
