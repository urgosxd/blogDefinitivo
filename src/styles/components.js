import styled, { css } from "styled-components"

export const TocDiv = styled.aside`
  background: #2a1510;
  padding: 0.7em 1.2em;
  margin: 1em 0;
  border-radius: 0.5em;
  box-shadow: 0 0 1em 3px #996161;
  height: max-content;
  max-height: 80vh;
  z-index: 3;
  line-height: 2.2em;
  right: 1em;
  max-width: 20em;
  overscroll-behavior: none;
  grid-row: span 10;
  nav {
    max-height: 78vh;
    overflow-y: scroll;
  }
  @media (min-width: 700px) {
    position: fixed;
    bottom: 1em;
    left: 1em;
    ${props => !props.open && `height: 0;`};
    visibility: ${props => (props.open ? `visible` : `hidden`)};
    opacity: ${props => (props.open ? 1 : 0)};
    transition: 0.3s;
  }
  @media (min-width: 700px) {
    font-size: 0.85em;
    grid-column: 4 / -1;
    position: sticky;
    top: 7em;
  }
`
export const Title = styled.div`
  margin: 0;
  padding-bottom: 0.5em;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: auto auto 1fr;
  color: gray;
`
export const TocLink = styled.a`
  cursor: pointer;
  color: ${p => (p.active ? `#E49090` : `gray`)};
  font-weight: ${props => props.active && `bold`};
  display: block;
  margin-left: ${props => props.depth + `em`};
`
export const TocIcon = styled.div`
  width: 1em;
  margin-right: 0.2em;
`
const openerCss = css`
  position: fixed;
  bottom: calc(1vh + 4em);
  @media (min-width: 700px) {
    bottom: calc(1vh + 1em);
  }
  left: 0;
  padding: 0.5em 0.6em 0.5em 0.3em;
  background: black;
  border: 2px solid #fff;
  border-radius: 0 50% 50% 0;
  transform: translate(${props => (props.open ? `-100%` : 0)});
`
export const Toggle = styled.button.attrs(props => ({
  size: props.size || `1.6em`,
}))`
  z-index: 2;
  transition: 0.3s;
  justify-self: end;
  :hover {
    transform: scale(1.1);
  }
  @media (min-width: 700px) {
    display: none;
  }
  ${props => props.opener && openerCss};
`
