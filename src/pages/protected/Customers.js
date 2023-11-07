import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../src/functions/features/common/headerSlice'
import Customers from '../../../src/functions/features/customers'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Customer Profile"}))
      }, [])


    return(
        <Customers />
    )
}

export default InternalPage