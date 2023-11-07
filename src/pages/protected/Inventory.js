import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../src/functions/features/common/headerSlice'
import Inventory from '../../../src/functions/features/inventory'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Inventory"}))
      }, [])


    return(
        <Inventory />
    )
}

export default InternalPage