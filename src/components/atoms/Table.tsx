import { memo, useMemo } from 'react'

interface InfoTableProps {
  headers: string[]
  children: React.ReactNode
}

function Table({ headers, children }: InfoTableProps): React.ReactElement {
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

export default memo(Table)
