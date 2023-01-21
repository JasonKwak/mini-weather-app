import styled from "styled-components";
import styles from '@/styles/Home.module.css'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { weatherData } from "../data/data";
import { motion } from "framer-motion"

const Wrapper = styled.div`
width:40rem;
display:flex;
flex-direction:row;
padding: 0% 10%;
background: linear-gradient(to bottom right, #3cc0fe 20%, #0066ff);
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
border-radius:8px;
position:relative;
`

const SubBg = styled.div`
opacity:.5;
background: radial-gradient(circle at 0%, #FFFFFF, 10%, #FFFFFF, #00b8ff 55%, #0090ff 65%);
position:absolute;
width:100%;
height:100%;
right:0;
border-radius:8px;
z-index:0;
transform:rotate(180deg)
`

const Cont = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
text-align:left;
z-index:1;
padding: 6% 4%;
margin:5%;
width:100%;
`

const Row = styled.div`
display:flex;
flex-direction:row;
width:100%;
font-family:'Lato';
`

const Info = styled.div`
color:#FAF9F6;
`

const AnimCont = styled.div`
display:flex;
justify-content:center;
align-items:center;
`

export default function Card({
    city="sample",
    desc="sample",
    main="sample",
    temp="sample",
    feels="sample",
    icon="",
    id="",
    gust="Unavailable"
    })

    {
        const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
        }
    };
    
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };

    const visible = { opacity: 1, y: 0, transition: { duration: 1 } };
    
    return (
        <motion.ul
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
        >
            <Wrapper className={styles.cardwrap}>
                <SubBg/>
                <Cont className={styles.cardcont}>
                <motion.div
                variants={{
                hidden: { opacity: 0, y: -10 },
                visible
                }}
                >
                    <Info className={styles.city}>
                        {city}
                    </Info>

                    <Info className={styles.temp}>
                        {temp} °C
                    </Info>

                    
                    <hr className={styles.line}></hr>

                    <Row className={styles.row}>
                        <Info style={{marginRight:'5%'}}>
                            {main}
                        </Info>
                        <Info style={{opacity:'0.6'}}>
                            {desc}
                        </Info>
                    </Row>

                    <Info className={styles.feelslike}>
                        Feels like: {feels} °C
                    </Info>
                    <Info className={styles.feelslike}>
                        Wind Gust: {gust} 
                    </Info>
                </motion.div>
                    
                </Cont>
                
                    <motion.div
                    variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible
                    }}
                    transition={{ delay: 2.5 }}
                    style={{display:'flex',justifyContent:'center',alignItems:'center'}}
                    >
                        <AnimCont>
                            <Player 
                            className={styles.animation}
                            autoplay
                            loop
                            src={icon}
                            />
                        </AnimCont>
                    </motion.div>

            </Wrapper>  
        </motion.ul>
    )
}