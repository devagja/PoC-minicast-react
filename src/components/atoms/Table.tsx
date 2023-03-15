import { memo, useMemo } from 'react'

interface InfoTableProps {
  headers: string[]
  children: React.ReactNode
}

function _Table({ headers, children }: InfoTableProps): React.ReactElement {
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
    <div className='overflow-x-auto'>
      <table className='table-zebra table w-full'>
        <thead>{HeadersMemo}</thead>
        {children}
      </table>
    </div>
  )
}

const Table = memo(_Table)
export default Table
