import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../src/functions/features/common/headerSlice'
import EditProductDetails from '../../../src/functions/features/settings/editproductdetails'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Edit Product Details"}))
      }, [])


    return(
        <EditProductDetails />
    )
}

export default InternalPage