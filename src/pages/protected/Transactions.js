import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../src/functions/features/common/headerSlice'
import Transactions from '../../../src/functions/features/products'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Product Management"}))
      }, [])


    return(
        <Transactions />
    )
}

export default InternalPage