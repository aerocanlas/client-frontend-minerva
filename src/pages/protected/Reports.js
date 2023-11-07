import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../src/functions/features/common/headerSlice'
import Reports from '../../../src/functions/features/reports'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Reports"}))
      }, [])


    return(
        <Reports />
    )
}

export default InternalPage