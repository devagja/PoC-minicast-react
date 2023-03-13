import {
  type ForwardedRef,
  forwardRef,
  type InputHTMLAttributes,
  type ReactElement
} from 'react'

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
export interface SearchInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  onReset: () => void
  [x: string]: any
}

const SearchInput = forwardRef(function SearchInput(
  { onReset, ...props }: SearchInputProps,
  ref: ForwardedRef<HTMLInputElement>
): ReactElement {
  return (
    <div className='relative h-10 w-full max-w-[291px]'>
      <input
        {...props}
        ref={ref}
        type='text'
        className='input-bordered input-primary input h-full w-full rounded-md py-0 px-3'
      />
      <button
        onClick={onReset}
        className='btn-primary btn-ghost absolute right-0 top-2/4 flex h-5 min-h-0 w-5 -translate-y-2/4 -translate-x-2/4 items-center justify-center rounded-md p-0'
      >
        <svg
          className='h-4 w-4'
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          viewBox='0 0 512 512'
        >
          <polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
        </svg>
      </button>
    </div>
  )
})

export default SearchInput
