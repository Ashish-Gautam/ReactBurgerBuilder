import React from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import styleClasses from './Layout.module.css'

const Layout=(props)=>{
    return(
        <Auxiliary>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main className={styleClasses.Content}>
        {props.children}
        </main>
        </Auxiliary>
    )
}

export default Layout

