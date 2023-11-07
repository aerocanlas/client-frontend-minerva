import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../../src/components/adminComponents/Cards/TitleCard"
import { showNotification } from '../common/headerSlice'
import { deleteLead, getLeadsContent } from "./leadSlice"
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../../../src/utils/globalConstantUtil'
import PencilSquareIcon from '@heroicons/react/24/outline/PencilSquareIcon'
import { openModal } from "../common/modalSlice"


const BILLS = [
    {invoiceNo : "#4567", amount : "23,989", description : "Product Usages", status : "Pending", generatedOn : moment(new Date()).add(-30*1, 'days').format("DD MMM YYYY"),  paidOn : "-"},

    {invoiceNo : "#4523", amount : "34,989", description : "Product usages", status : "Pending", generatedOn : moment(new Date()).add(-30*2, 'days').format("DD MMM YYYY"), paidOn : "-"},

    {invoiceNo : "#4453", amount : "39,989", description : "Product usages", status : "Paid", generatedOn : moment(new Date()).add(-30*3, 'days').format("DD MMM YYYY"), paidOn : moment(new Date()).add(-24*2, 'days').format("DD MMM YYYY")},

    {invoiceNo : "#4359", amount : "28,927", description : "Product usages", status : "Paid", generatedOn : moment(new Date()).add(-30*4, 'days').format("DD MMM YYYY"), paidOn : moment(new Date()).add(-24*3, 'days').format("DD MMM YYYY")},

    {invoiceNo : "#3359", amount : "28,927", description : "Product usages", status : "Paid", generatedOn : moment(new Date()).add(-30*5, 'days').format("DD MMM YYYY"), paidOn : moment(new Date()).add(-24*4, 'days').format("DD MMM YYYY")},

    {invoiceNo : "#3367", amount : "28,927", description : "Product usages", status : "Paid", generatedOn : moment(new Date()).add(-30*6, 'days').format("DD MMM YYYY"), paidOn : moment(new Date()).add(-24*5, 'days').format("DD MMM YYYY")},

    {invoiceNo : "#3359", amount : "28,927", description : "Product usages", status : "Paid", generatedOn : moment(new Date()).add(-30*7, 'days').format("DD MMM YYYY"), paidOn : moment(new Date()).add(-24*6, 'days').format("DD MMM YYYY")},

    {invoiceNo : "#2359", amount : "28,927", description : "Product usages", status : "Paid", generatedOn : moment(new Date()).add(-30*8, 'days').format("DD MMM YYYY"), paidOn : moment(new Date()).add(-24*7, 'days').format("DD MMM YYYY")},


]

function Billing(){

    const dispatch = useDispatch()

    const deleteOrder = (index) => {
        dispatch(openModal({title : "Confirmation", bodyType : MODAL_BODY_TYPES.CONFIRMATION, 
        extraObject : { message : `Are you sure you want to delete this order?`, type : CONFIRMATION_MODAL_CLOSE_TYPES.ORDER_DELETE, index}}))
    }

    const [bills, setBills] = useState(BILLS)

    const getPaymentStatus = (status) => {
        if(status  === "Paid")return <div className="badge badge-success">{status}</div>
        if(status  === "Pending")return <div className="badge badge-primary">{status}</div>
        else return <div className="badge badge-ghost">{status}</div>
    }

    return(
        <>
            
            <TitleCard title="Order List" topMargin="mt-2">

                {/* Invoice list in table format loaded constant */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Date Ordered</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>Order Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            bills.map((l, k) => {
                                return(
                                    <tr key={k}>
                                    <td>{l.invoiceNo}</td>
                                    <td>Juan Dela Cruz</td>
                                    <td>{l.generatedOn}</td>
                                    <td>PHP {l.amount}.00</td>
                                    <td>GCash</td>
                                    <td>{getPaymentStatus(l.status)}</td>

                                    <td>
                                        <button className="btn btn-square btn-ghost"><PencilSquareIcon className="w-5"/></button>
                                        <button className="btn btn-square btn-ghost" onClick={() => deleteOrder(k)}><TrashIcon className="w-5"/></button>
                                    </td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </TitleCard>
        </>
    )
}


export default Billing