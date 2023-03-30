import { memo, useMemo } from 'react'

interface InfoTableProps extends React.HTMLAttributes<HTMLDivElement> {
  headers: string[]
  children: React.ReactElement | React.ReactElement[]
}

const Table = memo(function _({
  headers,
  children,
  ...props
}: InfoTableProps): React.ReactElement {
  const HeadersMemo = useMemo(
    () => (
      <tr>
        {headers.map(head => (
          <th key={head}>{head}</th>
        ))}
      </tr>
    ),
    [headers]
  )

  return (
    <div {...props} className='overflow-x-auto'>
      <table className='table-zebra table w-full'>
        <thead>{HeadersMemo}</thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
})

export default Table
