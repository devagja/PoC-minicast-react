import { forwardRef, useMemo } from 'react'
import XmarkIcon from '../icons/XmarkIcon'

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onReset?: () => void
}

const SearchInput = forwardRef(function _(
  { onReset, ...props }: SearchInputProps,
  ref: React.ForwardedRef<HTMLInputElement>
): React.ReactElement {
  const ResetButtonMemo = useMemo(
    () => (
      <button
        onClick={onReset}
        className='btn-primary btn-ghost absolute right-0 top-2/4 flex h-5 min-h-0 w-5 -translate-y-2/4 -translate-x-2/4 items-center justify-center rounded-md p-0'
      >
        <XmarkIcon />
      </button>
    ),
    [onReset]
  )

  const InputMemo = useMemo(
    () => (
      <input
        {...props}
        ref={ref}
        type='text'
        className='input-bordered input-primary input h-full w-full rounded-md py-0 px-3'
      />
    ),
    [props, ref]
  )

  return (
    <div className='relative h-10 w-full max-w-[291px]'>
      {InputMemo}
      {ResetButtonMemo}
    </div>
  )
})

export default SearchInput
