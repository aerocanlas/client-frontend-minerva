import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../src/functions/features/common/headerSlice'
import Orders from '../../../src/functions/features/orders'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Orders"}))
      }, [])


    return(
        <Orders />
    )
}

export default InternalPage