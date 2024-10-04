import { NavLink } from "react-router-dom"
import { StyledHeader } from "./style"
import { PropsWithChildren, useState } from "react"

type LinkType = {
    href: string,
    title: string
}

interface HeaderProps{
    links: LinkType[]
}

function Header(props: PropsWithChildren<HeaderProps>){

    const [mobileMenu, setMobileMenu] = useState(false)

    const headerLinks = props.links.map((link: LinkType, i: number) => {
        return <li key={i}><NavLink to={link.href}>{link.title}</NavLink></li>
    })

    return (
        <StyledHeader>
            <div style={{display: mobileMenu == false ? 'none' : 'block'}} id="mobile-menu">
                <nav>
                    <ul>
                        {headerLinks}
                    </ul>
                </nav>
            </div>
            <h1>To Do Manager</h1>
            <nav id="desktop">
                <ul>
                    {headerLinks}
                </ul>
            </nav>
            <button style={{zIndex: mobileMenu ? 2 : 0}} onClick={() => setMobileMenu(!mobileMenu)}>
                {mobileMenu ? <>🗙</> : <><p></p><p></p><p></p></>}
            </button>
        </StyledHeader>
    )
}

export default Header