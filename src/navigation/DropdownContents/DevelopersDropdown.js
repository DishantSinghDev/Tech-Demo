import React from "react"
import styled from "styled-components"
import {
  Icon,
  DropdownSection,
  Heading,
  HeadingLink,
  LinkList
} from "./Components"
import {
  ios,
  android,
  reactnative,
  confidentiality,
  engagementmodel,
  ourstory,
  ourvalue,
  process,
  flutter,
  windowsapp,
  wearable,
  saas,
  customapp,
  nodejs,
  angularjs,
  reactjs,
  php,
  laravel,
  dotnet,
  python,
  ci,
  ecommerce,
  wordpress,
  pwa,
  asp,
  iot,
  blockchain,
  webrtc,
  asterisk,
  cloud,
  arvr,
  aiml,
  softwaredevelopment,
  mvp,
  devops,
  rass
} from "../../assets";

const DevelopersDropdownEl = styled.div`
  width: 55rem;
`

const Logo = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 100%;
  opacity: 0.8;
  display: flex;
  background-color: ${({ color }) => `var(--${color})`};
`
const Title = styled.h4`
  color: var(--theme);
  font-size: 18px;
  font-weight: 600;
  -webkit-font-smoothing: auto;
  font-feature-settings: normal;
  font-optical-sizing: auto;
  font-variant: petite-caps;
  font-variant-east-asian: proportional-width;
  padding-bottom: 10px;
  width: min-content;
  &::after{
    content: "";
    width: auto;
    height: 3px;
    position: absolute;
    display: block;
    padding: 0rem 1.5rem;
    background: #fff;
    transition: 0.5s transform ease;
    transform: scale3d(1,1,1);
    transform-origin: 0 50%;
  }
  &::after{
    background: var(--theme);
    transform-origin: 0% 50%;
  }
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
const Flex = styled.div`
  display: flex;
  > div {
    margin-right: 48px;
  }
  > div:last-child {
    margin-right: 0px;
  }
`

const DevelopersDropdown = () => {
  return (
    <DevelopersDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <div>
          <Flex>
            <div>
              <Title>Application Development</Title>
              <LinkList>
                <DropdownSection className="paddingTL-10" data-first-dropdown-section>
                  <ProductsSection>
                    <li>
                      <a className="flex flex-1 items-center" href='/'>
                        <Logo color="white">
                          <img
                              src={ios}
                              alt="menu"
                              className="w-[20px] h-[20px] m-auto object-contain"
                          />
                        </Logo>
                        <div>
                          <Heading color="theme">iOS Development</Heading>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="flex flex-1 items-center" href='/'>
                        <Logo color="white">
                          <img
                              src={android}
                              alt="menu"
                              className="w-[20px] h-[20px] m-auto object-contain"
                          />
                        </Logo>
                        <div>
                          <Heading color="theme">Android Development</Heading>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="flex flex-1 items-center" href='/'>
                        <Logo color="white">
                          <img
                              src={reactnative}
                              alt="menu"
                              className="w-[20px] h-[20px] m-auto object-contain"
                          />
                        </Logo>
                        <div>
                          <Heading color="theme"> React Native App Development </Heading>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="flex flex-1 items-center" href='/'>
                        <Logo color="white">
                          <img
                              src={flutter}
                              alt="menu"
                              className="w-[20px] h-[20px] m-auto object-contain"
                          />
                        </Logo>
                        <div>
                          <Heading color="theme">Flutter App Development</Heading>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="flex flex-1 items-center" href='/'>
                        <Logo color="white">
                          <img
                              src={windowsapp}
                              alt="menu"
                              className="w-[20px] h-[20px] m-auto object-contain"
                          />
                        </Logo>
                        <div>
                          <Heading color="theme"> Windows App Development </Heading>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="flex flex-1 items-center" href='/'>
                        <Logo color="white">
                          <img
                              src={wearable}
                              alt="menu"
                              className="w-[20px] h-[20px] m-auto object-contain"
                          />
                        </Logo>
                        <div>
                          <Heading color="theme"> Wearable App Development </Heading>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="flex flex-1 items-center" href='/'>
                        <Logo color="white">
                          <img
                              src={saas}
                              alt="menu"
                              className="w-[20px] h-[20px] m-auto object-contain"
                          />
                        </Logo>
                        <div>
                          <Heading color="theme"> SaaS Application Development </Heading>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="flex flex-1 items-center" href='/'>
                        <Logo color="white">
                          <img
                              src={customapp}
                              alt="menu"
                              className="w-[20px] h-[20px] m-auto object-contain"
                          />
                        </Logo>
                        <div>
                          <Heading color="theme">  Custom App Development  </Heading>
                        </div>
                      </a>
                    </li>
                  </ProductsSection>
                </DropdownSection>
              </LinkList>
            </div>
            <div>
              <Title>Web Development</Title>
              <LinkList>
                <DropdownSection className="paddingTL-10" data-first-dropdown-section>
                  <ProductsSection>
                    <li>
                      <a className="flex flex-1 items-center" href='/'>
                        <Logo color="white">
                          <img
                              src={nodejs}
                              alt="menu"
                              className="w-[20px] h-[20px] m-auto object-contain"
                          />
                        </Logo>
                        <div>
                          <Heading color="theme"> NodeJS Development </Heading>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="flex flex-1 items-center" href='/'>
                        <Logo color="white">
                          <img
                              src={angularjs}
                              alt="menu"
                              className="w-[20px] h-[20px] m-auto object-contain"
                          />
                        </Logo>
                        <div>
                          <Heading color="theme"> Angular Development </Heading>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="flex flex-1 items-center" href='/'>
                        <Logo color="white">
                          <img
                              src={reactjs}
                              alt="menu"
                              className="w-[20px] h-[20px] m-auto object-contain"
                          />
                        </Logo>
                        <div>
                          <Heading color="theme"> ReactJS Development </Heading>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="flex flex-1 items-center" href='/'>
                        <Logo color="white">
                          <img
                              src={php}
                              alt="menu"
                              className="w-[20px] h-[20px] m-auto object-contain"
                          />
                        </Logo>
                        <div>
                          <Heading color="theme"> PHP Development </Heading>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="flex flex-1 items-center" href='/'>
                        <Logo color="white">
                          <img
                              src={laravel}
                              alt="menu"
                              className="w-[20px] h-[20px] m-auto object-contain"
                          />
                        </Logo>
                        <div>
                          <Heading color="theme"> Laravel Development </Heading>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="flex flex-1 items-center" href='/'>
                        <Logo color="white">
                          <img
                              src={dotnet}
                              alt="menu"
                              className="w-[20px] h-[20px] m-auto object-contain"
                          />
                        </Logo>
                        <div>
                          <Heading color="theme"> Dot Net Development </Heading>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="flex flex-1 items-center" href='/'>
                        <Logo color="white">
                          <img
                              src={python}
                              alt="menu"
                              className="w-[20px] h-[20px] m-auto object-contain"
                          />
                        </Logo>
                        <div>
                          <Heading color="theme"> Python Development </Heading>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="flex flex-1 items-center" href='/'>
                        <Logo color="white">
                          <img
                              src={ci}
                              alt="menu"
                              className="w-[20px] h-[20px] m-auto object-contain"
                          />
                        </Logo>
                        <div>
                          <Heading color="theme"> CodeIgnitor Development </Heading>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="flex flex-1 items-center" href='/'>
                        <Logo color="white">
                          <img
                              src={ecommerce}
                              alt="menu"
                              className="w-[20px] h-[20px] m-auto object-contain"
                          />
                        </Logo>
                        <div>
                          <Heading color="theme"> eCommerce Development </Heading>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="flex flex-1 items-center" href='/'>
                        <Logo color="white">
                          <img
                              src={wordpress}
                              alt="menu"
                              className="w-[20px] h-[20px] m-auto object-contain"
                          />
                        </Logo>
                        <div>
                          <Heading color="theme"> WordPress Development </Heading>
                        </div>
                      </a>
                    </li>
                    {/*<li>*/}
                    {/*  <a className="flex flex-1 items-center" href='/'>*/}
                    {/*    <Logo color="white">*/}
                    {/*      <img*/}
                    {/*          src={pwa}*/}
                    {/*          alt="menu"*/}
                    {/*          className="w-[20px] h-[20px] m-auto object-contain"*/}
                    {/*      />*/}
                    {/*    </Logo>*/}
                    {/*    <div>*/}
                    {/*      <Heading color="theme"> Progressive Web App development </Heading>*/}
                    {/*    </div>*/}
                    {/*  </a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*  <a className="flex flex-1 items-center" href='/'>*/}
                    {/*    <Logo color="white">*/}
                    {/*      <img*/}
                    {/*          src={asp}*/}
                    {/*          alt="menu"*/}
                    {/*          className="w-[20px] h-[20px] m-auto object-contain"*/}
                    {/*      />*/}
                    {/*    </Logo>*/}
                    {/*    <div>*/}
                    {/*      <Heading color="theme"> ASP.NET development </Heading>*/}
                    {/*    </div>*/}
                    {/*  </a>*/}
                    {/*</li>*/}
                  </ProductsSection>
                </DropdownSection>
              </LinkList>
            </div>
            <div>
              <Title>Digital Transformation</Title>
              <LinkList>
                <DropdownSection className="paddingTL-10" data-first-dropdown-section>
                  <ProductsSection>
                    <li>
                      <a className="flex flex-1 items-center" href='/'>
                        <Logo color="white">
                          <img
                              src={iot}
                              alt="menu"
                              className="w-[20px] h-[20px] m-auto object-contain"
                          />
                        </Logo>
                        <div>
                          <Heading color="theme"> IoT App Development </Heading>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="flex flex-1 items-center" href='/'>
                        <Logo color="white">
                          <img
                              src={blockchain}
                              alt="menu"
                              className="w-[20px] h-[20px] m-auto object-contain"
                          />
                        </Logo>
                        <div>
                          <Heading color="theme"> Blockchain Development </Heading>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="flex flex-1 items-center" href='/'>
                        <Logo color="white">
                          <img
                              src={webrtc}
                              alt="menu"
                              className="w-[20px] h-[20px] m-auto object-contain"
                          />
                        </Logo>
                        <div>
                          <Heading color="theme"> WebRTC Development </Heading>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="flex flex-1 items-center" href='/'>
                        <Logo color="white">
                          <img
                              src={asterisk}
                              alt="menu"
                              className="w-[20px] h-[20px] m-auto object-contain"
                          />
                        </Logo>
                        <div>
                          <Heading color="theme"> Asterisk Development </Heading>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="flex flex-1 items-center" href='/'>
                        <Logo color="white">
                          <img
                              src={cloud}
                              alt="menu"
                              className="w-[20px] h-[20px] m-auto object-contain"
                          />
                        </Logo>
                        <div>
                          <Heading color="theme"> Cloud App Development </Heading>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="flex flex-1 items-center" href='/'>
                        <Logo color="white">
                          <img
                              src={arvr}
                              alt="menu"
                              className="w-[20px] h-[20px] m-auto object-contain"
                          />
                        </Logo>
                        <div>
                          <Heading color="theme"> AR/VR Development </Heading>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="flex flex-1 items-center" href='/'>
                        <Logo color="white">
                          <img
                              src={aiml}
                              alt="menu"
                              className="w-[20px] h-[20px] m-auto object-contain"
                          />
                        </Logo>
                        <div>
                          <Heading color="theme"> AI/ML Development </Heading>
                        </div>
                      </a>
                    </li>
                  </ProductsSection>
                </DropdownSection>
              </LinkList>
            </div>
          </Flex>
        </div>
      </DropdownSection>
      <DropdownSection>
        <Flex>
          <ul className="mr-30 flex-1">
            <HeadingLink>
              <a className="flex items-center flex-1" href="/">
                <div>
                  <img
                      src={softwaredevelopment}
                      alt="menu"
                      className="w-[36px] h-[36px] mr-5 object-contain"
                  />
                </div>
                <div>
                  <Heading className="submenu" color="transperant">Software Development</Heading>
                  <p className="submenu-desc">Providing tailored software development services</p>
                </div>
              </a>
            </HeadingLink>
            <HeadingLink>
              <a className="flex items-center mt-4 flex-1" href="/">
                <div className="mr-5">
                  <img
                      src={mvp}
                      alt="menu"
                      className="w-[36px] h-[36px] mr-5 object-contain"
                  />
                </div>
                <div>
                  <Heading className="submenu" color="transperant">MVP Development</Heading>
                  <p className="submenu-desc">Unleash your business's potential with MVP development - start small, succeed big</p>
                </div>
              </a>
            </HeadingLink>
          </ul>
          <ul>
            <HeadingLink>
              <a className="flex items-center flex-1" href="/">
                <div>
                  <img
                      src={devops}
                      alt="menu"
                      className="w-[36px] h-[36px] mr-5 object-contain"
                  />
                </div>
                <div>
                  <Heading className="submenu" color="transperant">DevOps</Heading>
                  <p className="submenu-desc">Providing top-notch DevOps services tailored to your needs</p>
                </div>
              </a>
            </HeadingLink>
            <HeadingLink>
              <a className="flex items-center mt-4 flex-1" href="/">
                <div>
                  <img
                      src={rass}
                      alt="menu"
                      className="w-[36px] h-[36px] mr-5 object-contain"
                  />
                </div>
                <div>
                  <Heading className="submenu" color="transperant">Resource as a Service</Heading>
                  <p className="submenu-desc">Grow your software team with our experienced professionals</p>
                </div>
              </a>
            </HeadingLink>
          </ul>
        </Flex>
      </DropdownSection>
    </DevelopersDropdownEl>
  )
}

export default DevelopersDropdown
