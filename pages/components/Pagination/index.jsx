import React from 'react'
import { Button } from 'rsuite'

export default function Pagination({count,currentPage,pageSize, onNext, onPrevious}) {
  return (
    <div className="pagination-container">
        <p>Viewing <b>{(currentPage*pageSize) + 1} to {Math.min(((currentPage+1)*pageSize),count)}</b> of <b>{count}</b> results</p>
        <div>
            <Button disabled={!Boolean(currentPage)} onClick={onPrevious}>Previous</Button>
            <Button disabled={(((currentPage+1)*pageSize)>=count)} onClick={onNext}>Next</Button>
        </div>
    </div>
  )
}
