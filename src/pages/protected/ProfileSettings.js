import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../src/functions/features/common/headerSlice'
import ProfileSettings from '../../../src/functions/features/settings/profilesettings'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "View Admin Account"}))
      }, [])


    return(
        <ProfileSettings />
    )
}

export default InternalPage