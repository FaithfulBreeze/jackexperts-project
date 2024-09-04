import { NavLink } from "react-router-dom"
import { StyledHeader } from "./style"
import { PropsWithChildren } from "react"

type LinkType = {
    href: string,
    title: string
}

interface HeaderProps{
    links: LinkType[]
}

function Header(props: PropsWithChildren<HeaderProps>){

    const headerLinks = props.links.map((link: LinkType, i: number) => {
        return <li key={i}><NavLink to={link.href}>{link.title}</NavLink></li>
    })

    return (
        <StyledHeader>
            <h1>To Do Manager</h1>
            <nav>
                <ul>
                    {headerLinks}
                </ul>
            </nav>
        </StyledHeader>
    )
}

export default Header