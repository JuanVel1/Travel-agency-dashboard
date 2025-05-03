import React from 'react'
import {Link, NavLink} from "react-router";
import {sidebarItems} from "~/constants";
import {cn} from "../lib/utils";

const Navitems = ({handleClick}: { handleClick?: () => void }) => {

    const user = {
        name:'Adrian',
        email:'contact@co',
        imageUrl:'/assets/images/david.webp'
    }

    return (
        <div className="nav-items">
            <Link to="/" className="link-logo"/>
            <img src="/assets/icons/logo.svg" alt="logo"
            className="size-[30px]"/>
            <h1>Tourvisto</h1>

            <div className="container">
                <nav>
                    {sidebarItems.map(({id, href, icon,label}) => (
                        <NavLink to={href} key={id} className="nav-link">
                            {({isActive})=>(
                                <div className={cn('group nav-item active',
                                    {'bg-primary-100 !text-white': isActive},
                                    onclick={
                                        handleClick
                                }
                                )}>
                                    <img
                                    src={icon}
                                    alt={label}
                                    className={`group-hover:brightness-0 size-0 group-hover:invert ${isActive ? 'brightness-0 invert' : 'text-dark-200'}`}
                                    />

                                    {label}
                                </div>
                            )}
                        </NavLink>
                    ))}
                </nav>

                <footer className="nav-footer">
                    <img src={user?.imageUrl || '/assets/images/david.webp'} alt="profile photo"/>
                    <article>
                        <h2>{user?.name}</h2>
                        <p>{user?.email}</p>
                    </article>

                    <button className="cursor-pointer" onClick={()=>(
                        console.log("logout")
                    )
                    }>
                        <img src="/assets/icons/logout.svg" alt="logoout"/>
                    </button>
                </footer>
            </div>
        </div>
    )
}
export default Navitems
