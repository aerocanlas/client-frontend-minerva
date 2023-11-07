import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { showNotification } from "../common/headerSlice"
import TitleCard from "../../../../src/components/adminComponents/Cards/TitleCard"
import { RECENT_TRANSACTIONS } from "../../../../src/utils/dummyData"
import { RECENT_TYPE } from "../../../../src/utils/dummyData"
import FunnelIcon from '@heroicons/react/24/outline/FunnelIcon'
import ChevronDownIcon from '@heroicons/react/24/outline/ChevronDownIcon'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'
import SearchBar from "../../../../src/components/adminComponents/Input/SearchBar"
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import PencilSquareIcon from '@heroicons/react/24/outline/PencilSquareIcon'
import InputText from '../../../../src/components/adminComponents/Input/InputText'


const TopSideButtons = ({removeFilter, applyFilter, applySearch}) => {

    const [filterParam, setFilterParam] = useState("")
    const [searchText, setSearchText] = useState("")
    const productFilters = ["Daily", "Weekly", "Monthly"]

    const showFiltersAndApply = (params) => {
        applyFilter(params)
        setFilterParam(params)
    }

    const removeAppliedFilter = () => {
        removeFilter()
        setFilterParam("")
        setSearchText("")
    }

    useEffect(() => {
        if(searchText == ""){
            removeAppliedFilter()
        }else{
            applySearch(searchText)
        }
    }, [searchText])

    return(
        <div className="inline-block float-right">

            <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} className="btn btn-sm btn-outline"><FunnelIcon className="w-5 mr-2"/>Filter</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 text-sm shadow bg-base-100 rounded-box w-52">
                    {
                        productFilters.map((l, k) => {
                            return  <li key={k}><a onClick={() => showFiltersAndApply(l)}>{l}</a></li>
                        })
                    }
                    <div className="divider mt-0 mb-0"></div>
                    <li><a onClick={() => removeAppliedFilter()}>Remove Filter</a></li>
                </ul>
            </div>
        </div>
    )
}


function Transactions(){

    const [filterParam, setFilterParam] = useState("")
    const [searchText, setSearchText] = useState("")
    const typeFilters = ["Order Summary"]

    const showFiltersAndApply = (params) => {
        applyFilter(params)
        setFilterParam(params)
    }

    const removeAppliedFilter = () => {
        removeFilter()
        setFilterParam("")
        setSearchText("")
    }

    const [trans, setTrans] = useState(RECENT_TYPE)

    const removeFilter = () => {
        setTrans(RECENT_TYPE)
    }

    const applyFilter = (params) => {
        let filteredType = RECENT_TYPE.filter((t) => {return t.category == params})
        setTrans(filteredType)
    }

    // Search according to name
    const applySearch = (value) => {
        let filteredType = RECENT_TYPE.filter((t) => {return t.email.toLowerCase().includes(value.toLowerCase()) ||  t.email.toLowerCase().includes(value.toLowerCase())})
        setTrans(filteredType)
    }

    const updateFormValue = ({updateType, value}) => {
        console.log(updateType)
    }

    return(
        <>
            
            <TitleCard title="Generate Reports" topMargin="mt-2" TopSideButtons={<TopSideButtons applySearch={applySearch} applyFilter={applyFilter} removeFilter={removeFilter}/>}>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="pl-3 pb-6">
                        Order Type <br></br> 

                    <div className="dropdown dropdown-bottom dropdown-end pt-3">
                        <label tabIndex={0} className="btn btn-sm btn-outline">Choose Order Type<ChevronDownIcon className="pl-2 w-4 mr-1"/></label>
                        <ul tabIndex={0} className="dropdown-content menu p-1 text-sm shadow bg-base-100 rounded-box w-52">
                    {
                        typeFilters.map((l, k) => {
                            return  <li key={k}><a onClick={() => showFiltersAndApply(l)}>{l}</a></li>
                        })
                    }
                    <div className="divider mt-0 mb-0"></div>
                    <li><a onClick={() => removeAppliedFilter()}>Remove Filter</a></li>
                </ul>
            </div>


                    </div>

                    
                    <InputText labelTitle="Middle Name" defaultValue="Reyes" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Last Name" defaultValue="Dela Cruz" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Email Address" defaultValue="juandelacruz@gmail.com" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Shipping Address" defaultValue="Espana Blvd., Sampaloc, Manila, Philippines 1008." updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Mobile Number" defaultValue="09123456789" updateFormValue={updateFormValue}/>
                </div>
                <div className="divider" ></div>


                {/* Team Member list in table format loaded constant
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Status</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            trans.map((l, k) => {
                                return(
                                    <tr key={k}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-circle w-12 h-12">
                                                    <img src={l.avatar} alt="Avatar" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{l.productID}</td>
                                    <td>{l.productName}</td>
                                    <td>{l.productStatus}</td>
                                    <td>{l.category}</td>
                                    <td>{l.price}</td>
                                    <td>
                                        <button className="btn btn-square btn-ghost" ><PencilSquareIcon className="w-5"/></button>
                                        <button className="btn btn-square btn-ghost" ><TrashIcon className="w-5"/></button>
                                    </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div> */}
            </TitleCard>
        </>
    )
}


export default Transactions