import React from 'react'
// install loading-bar package before importing
// npm i react-top-loading-bar  -->   run this command in your terminal 
import LoadingBar from 'react-top-loading-bar'

export default function TopProgress(props) {
    return (
        <>
            <LoadingBar
                color='#f11946'
                progress={props.progra}
                height={3}
            />
        </>
    )
}
