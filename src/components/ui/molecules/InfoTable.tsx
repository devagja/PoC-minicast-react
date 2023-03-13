import type { ReactNode, ReactElement } from 'react'

interface InfoTableProps {
  headers: string[]
  children: ReactNode
}

function InfoTable({ headers, children }: InfoTableProps): ReactElement {
  return (
    <div className='overflow-x-auto'>
      <table className='table-zebra table w-full'>
        <thead>
          <tr>
            {headers.map(head => (
              <th key={head}>{head}</th>
            ))}
          </tr>
        </thead>
        {children}
      </table>
    </div>
  )
}

export default InfoTable
