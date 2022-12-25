import { useState, useEffect } from 'react';
import Heading from '../components/Heading';

import Layout from '../components/Layout';
import Pagination from '../components/Pagination';
import SubHeading from '../components/SubHeading';
import TableActions from '../components/TableActions';
import TransactionTable from '../components/TransactionTable';

function TransactionDashboard(){
    const [transactions, setTransactions] = useState([]);
    const [search, setSearch] = useState("")
    const [status, setStatus] = useState([])
    const [page,setPage] = useState(0)
    const [count,setCount] = useState(0)
    const [size,setSize] = useState(15)

    useEffect(() => {
        getTransactions()
      }, []);

    useEffect(()=>{
        getTransactions(search,status.join(","), page, size)
    },[page])

      async function getTransactions(txnSearch="", txnStatus="", txnPage=0, txnSize=15){

        const response = await fetch(`/api/transactions?search=${txnSearch}&status=${txnStatus}&page=${txnPage}&size=${txnSize}`)
        const data = await response.json()
        setTransactions(data.transactions)
        setCount(data.count)
      }
      function handleSearch(){
        setPage(0)
        getTransactions(search,status.join(","), 0,size)
      }

      function handleStatusChange(filterStatus){
        let filtersStat=[]
        if(filterStatus){
            filtersStat=filterStatus
        }
        setStatus(filtersStat)
        setPage(0)
        getTransactions(search,filtersStat.join(","), 0, size)
      }
      function handlePreviousClick(){
        setPage(prevPage=>prevPage-1)
      }

      function handleNextClick(){
        setPage(prevPage=>prevPage+1)
      }

      return (
        <Layout>
            <Heading>Transactions</Heading>
            <SubHeading>View summary and detail of your transaction here</SubHeading>
            <TableActions 
            search={search} 
            onSearchChange = {setSearch} 
            onSearch={handleSearch} 
            onStatusChange={handleStatusChange}
            status = {status}

            />
            <TransactionTable transactions={transactions}/>
            <Pagination 
            pageSize={size} 
            count ={count} 
            currentPage={page}
            onPrevious ={handlePreviousClick}
            onNext={handleNextClick}
            />
        </Layout>
      )

}


export default TransactionDashboard