import React from "react"
import styled from "styled-components"

const Footer = styled.footer`
  background: black;
  padding: 10px 20px;
  text-align: right;
  font-size: 80%;
  line-height: 1.25em;

  &,
  a {
    color: #ccc;
  }

  a:hover {
    color: white;
  }

  & > * {
    margin-left: 30px;
  }
`

export default () => (
  <Footer>
    <span>&copy; Hulina ry.</span>
    <a href="https://drive.google.com/drive/folders/1CeRYPLyyH8U4qJxUGgJxOFM-kLhy4qi0?usp=sharing">
      Yhdistyksen tiedot ja aineistot
    </a>
  </Footer>
)
