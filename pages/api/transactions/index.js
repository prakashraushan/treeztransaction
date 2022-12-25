import { transactions } from "../resources/data/transactionData"
export default function handler(req, res) {
    const {search, status, page, size} = req.query
    let statusArray = ['authorized','initiated','successful','returned','canceled']
    let searchString = ""
    let pageNum = 0
    let pageSize = 15
    if(search && search.trim()){
        searchString = search.trim() 
    }
    if(status && status.trim()){
        statusArray = status.split(',').map(st=>st.trim().toLowerCase())
    }

    if(page && !Number.isNaN(Number(page))){
        pageNum = Number(page)
    }
    if(size && !Number.isNaN(Number(size))){
        pageSize = Number(size)
    }

    const transactionData = filterTransaction(searchString.toLowerCase(), statusArray) 
    const paginatedTransaction = paginateTransaction(transactionData, pageNum, pageSize)

    res.status(200).json({transactions:paginatedTransaction,count:transactionData.length})
  }

  function filterTransaction(search, status){
    return transactions.filter(transaction=>(transaction.user.toLowerCase().includes(search) && status.includes(transaction.status.toLowerCase())))
  }
  
  function paginateTransaction(txns, pageNum, size=15){
    return txns.slice(pageNum*size, (pageNum*size) + size)
  }