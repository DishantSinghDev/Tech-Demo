import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {Icon} from "../DropdownContents/Components";
import { Link } from "react-router-dom";

const NavbarItemTitle = styled.button`
  background: transparent;
  border: 0;
  // font-weight: bold;
  font-family: inherit;
  // font-size: 18px;
  padding: 1.5rem 1.5rem 1.2rem 1.5rem;
  color: #ffffffb3;
  display: flex;
  justify-content: center;
  transition: opacity 250ms;
  /* position above the dropdown, otherwise the dropdown will cover up the bottom sliver of the buttons */
  position: relative;
  z-index: 2;
  &:hover, &:focus {
    opacity: 1;
    color: #FFFFFF;
  }
`

const NavbarItemATitle = styled.button`
  background: transparent;
  border: 0;
  // font-weight: bold;
  font-family: inherit;
  padding: 1.5rem 1.5rem 1.2rem 1.5rem;
  color: #ffffffb3;
  display: flex;
  justify-content: center;
  transition: opacity 250ms;
  /* position above the dropdown, otherwise the dropdown will cover up the bottom sliver of the buttons */
  position: relative;
  z-index: 2;
  &:hover, &:focus {
    opacity: 1;
    color: #FFFFFF;
  }
  &::before{
    content: "";
    width: auto;
    height: 3px;
    position: absolute;
    bottom: 0;
    padding: 0rem 1.5rem;
    background: #fff;
    transition: 0.5s transform ease;
    transform: scale3d(0,1,1);
    transform-origin: 0 50%;
  }
  &:hover::before{
    transform: scale3d(1,1,1);
  }
  &::before{
    background: #FFFFFF;
    transform-origin: 100% 50%;
  }
  &:hover::before{
    transform-origin: 0 50%;
  }
`

const NavbarItemEl = styled.li`
  position: relative;
`

const DropdownSlot = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  perspective: 1500px;
  z-index: 111;
`

export default class NavbarItem extends Component {
  static propTypes = {
    onMouseEnter: PropTypes.func.isRequired,
    titleLink: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    children: PropTypes.node
  }
  onMouseEnter = () => {
    this.props.onMouseEnter(this.props.index)
  }
  

  render() {
    const { titleLink, title, children, index } = this.props
    return (
      <NavbarItemEl onMouseEnter={this.onMouseEnter} onFocus={this.onMouseEnter}>
        {index <= 3 && <NavbarItemTitle className="text-xs lg:text-base xl:text-lg min-w-max md:text-xs" >{title}</NavbarItemTitle>}
        {index >3 && <Link to={titleLink}><NavbarItemATitle className="text-xs lg:text-base min-w-max xl:text-lg md:text-xs">{title}</NavbarItemATitle></Link>}
        <DropdownSlot>{children}</DropdownSlot>
      </NavbarItemEl>
    )
  }
}
