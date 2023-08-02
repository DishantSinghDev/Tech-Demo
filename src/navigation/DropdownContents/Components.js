import styled from "styled-components"

export const Heading = styled.h3`
  text-transform: math-auto;
  font-weight: initial;
  font-size: 1.0rem;
  margin-top: 0;
  margin-bottom: 0;
  color: ${({ color }) => (color ? `var(--${color})` : "var(--blue)")};
  &h3:has(p){
    margin-bottom: ${props => (props.noMarginBottom ? 0 : "1rem")};
  }
  &h3:hover{
    color: var(--theme);
    font-size: 18px;
    font-weight: 500;
  }
`

export const HeadingLink = Heading.withComponent("li")

export const LinkList = styled.ul`
  li {
    margin-bottom: 1rem;
  }

  li:last-of-type {
    margin-bottom: 0;
  }
  
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)};
`

export const Icon = styled.div`
  width: 13px;
  height: 13px;
  margin-right: 13px;
  background-color: var(--blue);
  opacity: 0.8;
  display: inline-block;
`

export const DropdownSection = styled.div`
  padding: var(--spacer);
  position: relative;
  z-index: 1;
`
