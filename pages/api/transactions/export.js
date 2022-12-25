import { filterTransaction } from "."
import ExcelJS from 'exceljs'
import { Stream } from "stream"
export default async function handler(req, res) {
    const {search, status} = req.query
    let statusArray = ['authorized','initiated','successful','returned','canceled']
    let searchString = ""
    if(search && search.trim()){
        searchString = search.trim() 
    }
    if(status && status.trim()){
        statusArray = status.split(',').map(st=>st.trim().toLowerCase())
    }

    
    const transactionData = filterTransaction(searchString.toLowerCase(), statusArray) 

    const newTxn = transactionData.map(txn=>{
        txn.grossAmount = `$${txn.grossAmount/100}`
        
        return txn;
      })


    const workBook = new ExcelJS.Workbook()
    const workSheet = workBook.addWorksheet('Transactions')
    workSheet.columns = [
        {header: 'DATE', key:'date', width:30},
        {header: 'GROSS AMOUNT', key:'grossAmount', width:30},
        {header: 'STATUS', key:'status', width:30},
        {header: 'CUSTOMER', key:'user', width:30},
        {header: 'SWIFTER ID', key:'userId', width:30},
        {header: 'EXTERNAL ID', key:'externalId', width:30},
        {header: 'SOURCE', key:'source', width:30}
    ]

    workSheet.getRow(1).eachCell(cell=>{
        cell.font={bold:true}
        cell.alignment={horizontal:"center", vertical:"middle"}
    })

    newTxn.forEach(transaction=>{
        const row = workSheet.addRow(transaction)
        row.eachCell(cell=>{
            cell.alignment={horizontal:"center"}
        })
    })

    const stream = new Stream.PassThrough();
    await workBook.xlsx.write(stream);



    res.setHeader(
        "Content-Disposition",
        "attachment; filename=transaction.xlsx"
      );
      res.setHeader(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      );
   stream.pipe(res)
  }






