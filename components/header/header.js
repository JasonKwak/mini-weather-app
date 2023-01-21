import styled from "styled-components";
import Image from "next/image";
import Logo2 from "@/public/Logo2.png"

const Wrapper = styled.div`
width: 100vw;
height:100px;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`

const Box = styled.div`
height:100%;
display:flex;
align-items:center;
padding-left:10%;
`

export default function Header(){
    return (
        <Wrapper>
            <Box>
                <Image src={Logo2} width={135} height={40}></Image>
            </Box>
        </Wrapper>
    )
}