import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch'

const NavBar = () => {
  return (
    <nav >
      <ul>
        <li>
          <Link href="/">
          <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
          <a>About</a>
          </Link>
        </li>
      </ul>
      <ThemeSwitch/>
      <style jsx>
          {`
          nav {
            display:flex;
            justify-content: space-between;
          }
            ul {
              list-style-type: none;
              padding: 0;
            }
             li{
              display: inline-block;
            
            }
            
            li:not(:first-child){
              margin-left: 0.75em;
            }
            `
          }
      </style>
    </nav>
  )
}

export default NavBar
