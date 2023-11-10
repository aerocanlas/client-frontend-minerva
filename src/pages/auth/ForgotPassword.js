import {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import ForgotPassword from '../../functions/features/user/ForgotPassword'
import Login from '../../functions/features/user/Login'

function ExternalPage(){


    return(
        <div className="">
                <ForgotPassword />
        </div>
    )
}

export default ExternalPage