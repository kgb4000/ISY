import styled from "styled-components";

export default function Footer() {
  return (
    <footer>
      <FooterP>ISY  &copy; {new Date().getFullYear()}</FooterP>
    </footer>
  )
}

const FooterP = styled.footer`

  text-align: center;
  margin: 1rem 0;
  color: #fff;

`