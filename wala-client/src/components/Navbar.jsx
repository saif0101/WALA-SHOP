import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { mobile } from "../responsive";
import {useSelector} from "react-redux"
import { Link } from "react-router-dom";



const Container = styled.div`
   height : 80px;
   ${mobile({ height:"70px"})}
  
`;
const Wrapper = styled.div`
   padding : 5px 20px;
   display : flex;
   align-items : center;
   justify-content : space-between;
   ${mobile({padding:"10px 0px"})}
`;
const Left = styled.div`
 flex :1;
 display :flex;
 align-items : center;
`;
const SearchContainer = styled.div`
  border : 0.5px solid lightgray;
  display :flex;
  align-items : center;
  margin-left : 15px;
  padding: 5px;
  `;
const Input = styled.input`
  border: none; 
  ${mobile({width:"50px"})}
`;

const Languages = styled.span`
font-size :14px;
cursor : pointer;
${mobile({ display: "none" })}
`;

const Center = styled.div`
 flex :1;
 text-align: center;
`;
const Logo = styled.h1`
font-weight : bold;
${mobile({fontSize:"24px",marginLeft:"1px"})}
`;

const Right = styled.div`
  flex :1;
  display : flex;
  align-items: center;
  justify-content : flex-end;
  ${mobile({flex:1.8, justifyContent:"center"})}
`;
const MenuItem = styled.div`
 font-size : 14px;
 cursor : pointer;
 margin-left : 25px;
 ${mobile({fontSize:"12px",marginLeft:"10px"})}
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Languages>EN</Languages>
          <SearchContainer>
            <Input placeholder="Search"/>
            <Search style ={{ color:'gray',fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>
        <Link  to="/home" style={{textDecoration:"none",color:"inherit"}}>
          <Logo> W A L A.</Logo>
          </Link>
        </Center>
        <Right>
        <Link style={{textDecoration:"none",color:"inherit"}} to="/register">
          <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link style={{textDecoration:"none",color:"inherit"}} to="/login">
          <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>

    </Container>
  )
}

export default Navbar