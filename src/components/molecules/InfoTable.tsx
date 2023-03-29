import { memo, useMemo } from 'react'

import Table from '../atoms/Table'

interface RowAttrs {
  title: string
  date: string
  duration: string
  guid: string
}
interface InfoTableProps {
  rows?: RowAttrs[]
  onItemClick?: (guid: string) => void
}

const InfoTable = memo(function _({
  rows,
  onItemClick = guid => {}
}: InfoTableProps): React.ReactElement {
  const mockDataTableMemo = useMemo(
    () =>
      ['0', '1', '2', '3', '4'].map(key => (
        <tr key={key}>
          <td className='w-full max-w-[15rem] overflow-x-hidden text-ellipsis text-center lg:max-w-xs'>
            <span className='loading btn-ghost btn-sm btn transition-all'></span>
          </td>
          <td className='text-center '>
            <span className='loading btn-ghost btn-sm btn transition-all'></span>
          </td>
          <td className='text-center '>
            <span className='loading btn-ghost btn-sm btn  transition-all'></span>
          </td>
        </tr>
      )),
    []
  )

  return (
    <Table headers={['Title', 'Date', 'Duration']}>
      <tbody>
        {rows != null
          ? rows.map(({ title, date, duration, guid }) => (
              <tr
                key={title}
                title={title}
                className='cursor-pointer'
                onClick={() => {
                  onItemClick(guid)
                }}
              >
                <td className='max-w-[15rem] overflow-x-hidden text-ellipsis lg:max-w-xs'>
                  {title}
                </td>
                <td>{date}</td>
                <td>{duration}</td>
              </tr>
            ))
          : mockDataTableMemo}
      </tbody>
    </Table>
  )
})

export default InfoTable
