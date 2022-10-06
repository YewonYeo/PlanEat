/*
영양제 검색 페이지 > 검색 결과(제품명)
@author 전상현
@since 2022.09.22
*/
import React from "react";
import CardNutrient from "components/common/CardNutrient";
import { Grid } from "@mui/material";
import Header from 'components/nav/Header';
import SideBar from "components/common/SideBar";
import {Link} from 'react-router-dom';


function NameResult() {
  const data = {
    img: "",
    nutrient_name: "락토핏 생유산균 화이버",
    company: "종근당",
    category_tag: ["장건강"],
    ingredient_name: ["차전자피식이섬유"],
  }

  const section = { marginTop:'80px' }
  const section1 = { marginTop:'25vh', textAlign:'center'}
  const section2 = { marginTop:'5vh', textAlign:'center'}
  const section3 = { marginTop:'10vh' }
  const card = { textAlign:'left' }

  return (
      <div style={section}>
        <Header />
          <Grid container> 
            <Grid item xs={1.5} style={section1}>
              <SideBar />
            </Grid>

            <Grid item xs={10.5} style={section2}>
              <Grid container>
                <Grid item xs={3}>

                </Grid>
                
                <Grid item xs={4}>
                  <p>(검색단어)에 대한 검색 결과 n건</p>
                </Grid>
                <Grid item xs={5}>
                  
                </Grid>
              </Grid>
              
              <div style={section3}>
                
              </div>
              
              <Grid container> 
                <Grid item xs={1}>

                </Grid>
                <Grid item xs={8}>
                  <Grid container style={card}>
                    <Link to='/searchdetail' style={{textDecoration:'none'}}>
                      <CardNutrient pill={data}/>
                    </Link>
                    <CardNutrient pill={data}/>
                    <CardNutrient pill={data}/>
                    <CardNutrient pill={data}/>
                    <CardNutrient pill={data}/>
                    <CardNutrient pill={data}/>
                    <CardNutrient pill={data}/>
                    <CardNutrient pill={data}/>
                    <CardNutrient pill={data}/>
                    <CardNutrient pill={data}/>
                    <CardNutrient pill={data}/>
                    <CardNutrient pill={data}/>
                  </Grid>
                </Grid>
                <Grid item xs={3}>

                </Grid>  
              </Grid>

            </Grid>
          </Grid>
      </div>
  );
}

export default NameResult;