// @ts-nocheck
import React from 'react'
import {Link} from "react-router";
import {SidebarComponent} from "@syncfusion/ej2-react-navigations";

const MobileSidebar = () => {
    let sidebar : SidebarComponent

    const toggleSidebar = () => {
        sidebar.toggle()
    }

    return (
        <div className="mobile-sidebar wrapper">
            <header>
                <Link to="/">
                    <img src="/assets/icons/logo.svg" alt="logo"
                    className="size-[30px]"/>
                    <h1>Tourvisto</h1>
                </Link>

                <button onClick={()=>(
                    toggleSidebar()
                )}>
                    <img src="/assets/icons/menu.svg" alt="menu"
                    className="size-7"/>
                </button>
            </header>
            <SidebarComponent
                width={278}
                //@ts-ignore
                ref={(Sidebar)=> sidebar = Sidebar}
                created={()=>sidebar.hide()}
                closeOnDocumentClick={true}
                type="over"
            >
                <Navitems handleClick={}/>
            </SidebarComponent>
        </div>
    )
}
export default MobileSidebar
