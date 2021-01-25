import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    contentWrapper: {
        // height:"813px",
        flexGrow:1,
        background: `linear-gradient(57deg, ${theme.palette.info.main} , ${theme.palette.info.dark})`,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%)",

        [theme.breakpoints.down("sm")]:{
            clipPath:"none",
        },
    },
    content:{
        marginTop:theme.spacing(20),
        display:"flex",
        justifyContent:"space-around",
        
        [theme.breakpoints.down("sm")]:{
            flexDirection:"column",
            justifyContent:"center",
            marginTop:theme.spacing(0),
        },
        
    },
    leftSide:{
                
        "& img":{
            width:"100%",
            height:"auto",
            [theme.breakpoints.only("sm")]:{
                objectFit:"contain",
                width:"100%",
                height:"400px"
            },
            [theme.breakpoints.only("xs")]:{
                objectFit:"contain",
                width:"100%",
                height:"300px"
            }
        },
    },
    rightSide:{
        width:"30%",

        [theme.breakpoints.down("sm")]:{
            width:"100%",
        },

        "& p":{
            fontSize:"40px",
            textAlign:"center",
            [theme.breakpoints.only("xs")]:{
                width:"100%",
                textAlign:"center",
                fontSize:"7vw",
            },
        },
        "& button":{
            fontSize:"17px",
            display:"block",
            margin:theme.spacing(12,"auto"),
            fontWeight:"bold",
            textTransform: "uppercase",
            background: `linear-gradient(57deg, ${theme.palette.info.dark},${theme.palette.info.main})`,
            border:"1px solid #64B5F7",  
            borderRadius: theme.spacing(1),
            outline:"none",
            padding: theme.spacing(2.5,4),
            
            "&:hover": {
                cursor: "pointer",
                background: `linear-gradient(57deg, ${theme.palette.info.main} , ${theme.palette.info.dark})`, 
            },
            
            [theme.breakpoints.only("xs")]:{
                marginTop:25,
                marginBottom:0,
                padding:theme.spacing(1.5,2),            
            },
        },
    }
  }));

const Index = () => {
    const {contentWrapper, content, leftSide, rightSide} = useStyles();
    const navigate = useNavigate();
    return (
        <div className={contentWrapper}>
            <section className={content}>
                <div className={leftSide}>
                    <img src="/images/home/image4.png" alt=""/>
                </div>
                <div className={rightSide}>
                    <p><q>Whoeverrrr said that money can’t buy happiness simply didn’t know where to go shopping</q></p>
                    <button onClick={() => navigate("/shop")}>Shop now</button>
                </div>
            </section>   
        </div>
    )
}

export default Index;
