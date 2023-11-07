import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../functions/features/common/headerSlice'
import Services from '../../functions/features/services'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Service Management"}))
      }, [])


    return(
        <Services />
    )
}

export default InternalPage