import Link from 'next/link'
import styled from 'styled-components'

export default function Header() {
  return (
    <HeadR>
      <div className="container">
        <div className="logo">
          <Link href="/">
            <a>ISY</a>
          </Link>
        </div>
        <nav>
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
        </nav>
      </div>
    </HeadR>
  )
}

const HeadR = styled.header`

  .container {
    display: flex;
    justify-content: space-between;
  }

  nav ul {
    width: 100%;
    display: flex;
    margin: 0;

    li {
      list-style-type: none;
      margin-left: 1rem;
    }
  }

  height: 70px;
  line-height: 70px;

  .logo {
    font-size: 2rem;
    font-weight: 700;
  }
`