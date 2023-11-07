import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../src/functions/features/common/headerSlice'
import EditCustomerProfile from '../../../src/functions/features/settings/editcustomerprofile'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Customer Profile Settings"}))
      }, [])


    return(
        <EditCustomerProfile />
    )
}

export default InternalPage