import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    background:#1b1b1b;
    font-family:"Inter",sans-serif;
}
button{
    font-weight:bold;
    font-size:1.1rem;
    cursor:pointer;
    padding:0.75rem 1.5rem;
    border:3px solid #23d997;
    background:transparent;
    color:white;
    transition:all 0.5s ease;
    font-family:"Inter",sans-serif;
    &:hover{
        background:#23d997;
        color:white;
    }
}
h2{
font-weight:lighter;
font-size:3rem;
}
h3{
color:white;
}
h4{
font-weight:bold;
}
span{
font-weight:bold;
color:#23d997;
}
a{
font-size:1.1rem;
}
p{
padding:3rem 0;
color:gray;
font-size:1.2rem;
line-height:150%
}
`;
export default GlobalStyles;
