import React from 'react'
import './NotFound.css'
import { ReactComponent as NotFounde } from '../../assets/NotFounde.svg'

function NotFound() {
    return (
        <div className='notFound'>
            <NotFounde/>
            <h1>PAGE NOT FOUND <br/>404</h1>
        </div>
    )
}

export default NotFound