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
    <div className='max-w-[291px] w-full h-10 relative'>
      <input
        {...props}
        ref={ref}
        type='text'
        className='input input-bordered rounded-md input-primary w-full py-0 px-3 h-full'
      />
      <button
        onClick={onReset}
        className='rounded-md flex justify-center items-center min-h-0 h-5 w-5 p-0 right-0 top-2/4 -translate-y-2/4 -translate-x-2/4 btn-ghost btn-primary absolute'
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
