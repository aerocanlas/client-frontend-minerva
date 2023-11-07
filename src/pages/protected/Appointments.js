import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../src/functions/features/common/headerSlice'
import Appointments from '../../../src/functions/features/appointments'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Appointments"}))
      }, [])


    return(
        <Appointments />
    )
}

export default InternalPage