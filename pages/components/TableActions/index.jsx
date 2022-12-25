import React from 'react'
import Export from './Export'
import Filter from './Filter'
import Search from './Search'

export default function TableActions({search,onSearchChange, onSearch, onStatusChange, status, onExport}) {
  return (
    <div className='filter-container'>
      <div>
        <Search placeholder="Search..." search={search} onChange={onSearchChange} onSearch={onSearch} />
      </div>
      <div>
        <Filter onChange={onStatusChange} value={status}/>
        <Export onExport={onExport}/>
      </div>
    </div>
  )
}
