import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../src/functions/features/common/headerSlice'
import EditServiceDetails from '../../../src/functions/features/settings/editservicedetails'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Service Details"}))
      }, [])


    return(
        <EditServiceDetails />
    )
}

export default InternalPage