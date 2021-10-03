import Link from 'next/link'
import styled from 'styled-components'

export default function Header() {
  return (
    <HeadR>
      <div className="container">
          <Link href="/">
            <img src="logo.jpeg" className="logo"/>
          </Link>
        <ul className="nav">
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </HeadR>
  )
}

const HeadR = styled.header`

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      max-width: 6rem;
      cursor: pointer;
    }
  }

  ul.nav {
    display: flex;
    margin: 0;

    li {
      list-style-type: none;
      margin-left: 1rem;
    }

    a {
      color: inherit;
    }
  }

  padding: 1rem 0;

`