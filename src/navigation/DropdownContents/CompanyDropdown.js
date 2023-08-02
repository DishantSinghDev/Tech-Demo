import React from "react"
import styled from "styled-components"
import {
  Heading,
  DropdownSection
} from "./Components"
import {
  bank,
  ecommercei,
  education,
  healthcare, hotel, logistic,
  social, travel
} from "../../assets";
import { Link } from "react-router-dom";

const CompanyDropdownEl = styled.div`
  width: 18.5rem;
`

const Logo = styled.div`
  width: 34px;
  height: 34px;
  margin-right: 10px;
  border-radius: 100%;
  opacity: 0.8;
  display: flex;
  background-color: ${({ color }) => `var(--${color})`};
`

const SubProductsList = styled.ul`
  li {
    display: flex;
    margin-bottom: 0.6rem;
    margin-left: 2.7rem;
  }
  h3 {
    margin-right: 0.5rem;
    width: 3.2rem;
    display: block; 
  }
  div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  a {
    color: var(--dark-grey);
  }
`

const ProductsSection = styled.ul`
  li {
    display: flex;
    align-items: center;
  }
`

const WorksWithStripe = styled.div`
 border-top: 2px solid #fff;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-top: var(--spacer);
  padding-top: var(--spacer);
}
h3 {
  margin-bottom: 0;
}
`

const CompanyDropdown = () => {
  return (
    <CompanyDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ProductsSection>
          <li>
            <a className="flex flex-1 items-center" href='/'>
              <Logo color="white">
                <img
                    src={healthcare}
                    alt="menu"
                    className="w-[20px] h-[20px] m-auto object-contain"
                />
              </Logo>
              <div>
                <Heading color="theme">Healthcare</Heading>
              </div>
            </a>
          </li>
          <li>
            <a className="flex flex-1 items-center" href='/'>
              <Logo color="white">
                <img
                    src={education}
                    alt="menu"
                    className="w-[20px] h-[20px] m-auto object-contain"
                />
              </Logo>
              <div>
                <Heading color="theme">Education</Heading>
              </div>
            </a>
          </li>
          <li>
            <a className="flex flex-1 items-center" href='/'>
              <Logo color="white">
                <img
                    src={ecommercei}
                    alt="menu"
                    className="w-[20px] h-[20px] m-auto object-contain"
                />
              </Logo>
              <div>
                <Heading color="theme">eCommerce</Heading>
              </div>
            </a>
          </li>
          <li>
            <a className="flex flex-1 items-center" href='/'>
              <Logo color="white">
                <img
                    src={hotel}
                    alt="menu"
                    className="w-[20px] h-[20px] m-auto object-contain"
                />
              </Logo>
              <div>
                <Heading color="theme">Hotel & Industries</Heading>
              </div>
            </a>
          </li>
          <li>
            <a className="flex flex-1 items-center" href='/'>
              <Logo color="white">
                <img
                    src={travel}
                    alt="menu"
                    className="w-[20px] h-[20px] m-auto object-contain"
                />
              </Logo>
              <div>
                <Heading color="theme">Travel & Tourism</Heading>
              </div>
            </a>
          </li>
          <li>
            <a className="flex flex-1 items-center" href='/'>
              <Logo color="white">
                <img
                    src={bank}
                    alt="menu"
                    className="w-[20px] h-[20px] m-auto object-contain"
                />
              </Logo>
              <div>
                <Heading color="theme">Banking & Finance</Heading>
              </div>
            </a>
          </li>
          <li>
            <Link className="flex flex-1 items-center" to='/logistic-software-development'>
              <Logo color="white">
                <img
                    src={logistic}
                    alt="menu"
                    className="w-[20px] h-[20px] m-auto object-contain"
                />
              </Logo>
              <div>
                <Heading color="theme">Logistic & Shipping</Heading>
              </div>
            </Link>
          </li>
          <li>
            <a className="flex flex-1 items-center" href='/'>
              <Logo color="white">
                <img
                    src={social}
                    alt="menu"
                    className="w-[20px] h-[20px] m-auto object-contain"
                />
              </Logo>
              <div>
                <Heading color="theme">Social Networking</Heading>
              </div>
            </a>
          </li>
        </ProductsSection>
      </DropdownSection>
      {/*<DropdownSection>*/}
      {/*  <a className="flex flex-1 items-center mb-10" href='/'>*/}
      {/*    <Logo color="transperant">*/}
      {/*      <img*/}
      {/*          src={blog}*/}
      {/*          alt="menu"*/}
      {/*          className="w-[20px] h-[20px] m-auto object-contain"*/}
      {/*      />*/}
      {/*    </Logo>*/}
      {/*    <div>*/}
      {/*      <Heading color="theme">Latest News</Heading>*/}
      {/*    </div>*/}
      {/*  </a>*/}
      {/*  <SubProductsList>*/}
      {/*    <li>*/}
      {/*      <div>*/}
      {/*        <a href='/'> &rsaquo; The best way to start an internet business.</a>*/}
      {/*      </div>*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      <div><a href='/'> &rsaquo; The best way to start an internet business.</a></div>*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      <div><a href='/'> &rsaquo; The best way to start an internet business.</a></div>*/}
      {/*    </li>*/}
      {/*  </SubProductsList>*/}
      {/*</DropdownSection>*/}
    </CompanyDropdownEl>
  )
}

export default CompanyDropdown
