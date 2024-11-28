import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link, useParams } from 'react-router'
import { allData } from './Data'
import BorderCountry from './BorderCountry'
import "./Body.css"





function Country({ isDark }) {

    const darkBackgroundColor = "hsl(207, 26%, 17%)"
    const lightBackgroundColor = "hsl(0, 0%, 98%)"
    const darkTextColor = "hsl(0, 0%, 100%)"
    const lightTextColor = "hsl(200, 15%, 8%)"
    const darkElementColor = "hsl(209, 23%, 22%)"
    const lightElementColor = "hsl(0, 0%, 100%)"


    const containerStyle = {

        minHeight: "100vh ",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

    }

    const { name } = useParams()


    const borderOtherCountry = allData.find(elem => elem.name.official.trim().toLowerCase() === name.trim().toLowerCase())

    const borderCountry = (e) => allData.find(co => co.cca3 === e).name.official


    console.log(allData.find(elem => elem.name.common.trim().toLowerCase() === name.trim().toLowerCase()))


    console.log(borderOtherCountry)
    return (
        <>

            <div style={{ backgroundColor: isDark ? darkBackgroundColor : lightBackgroundColor }}>

                <Container className={"country-container"} style={containerStyle}>

                    <Link to="/" style={{ textDecoration: "none" }}>

                        <Button variant="primary" style={{

                            position: "absolute", top: "50px", backgroundColor: isDark ? darkBackgroundColor : lightBackgroundColor, padding: "0.35em 0.75em", color: isDark ? darkTextColor : lightTextColor, borderColor: isDark ? "black" : "#d9d9d9", boxShadow: isDark ? "0 0 5px rgba(0, 0, 0, .25) " : "0px 0px 2px #909090", marginTop: "2.5em"

                        }}><i class="fa-solid fa-arrow-left-long" style={{ fontSize: "14px" }}></i><span style={{ fontSize: "16px", marginLeft: "16px" }}> Back</span>

                        </Button>
                    </Link>





                    <div className='main-data' style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>

                        <div className='flag' style={{ width: "45%" }}>

                            <img src={borderOtherCountry.flags?.png} alt={borderOtherCountry.flags?.alt} style={{ width: "75%" }} />


                        </div>

                        <div className='info' style={{
                            color: isDark ? darkTextColor : lightTextColor,
                            width: " 55%",
                            display: "flex",
                            alignItems: "flex - start",
                            flexWrap: "wrap",
                            justifyContent: " space-between"
                        }}>
                            <div style={{ fontSize: "1.7em", fontWeight: "800", letterSpacing: "0.1em" }}>{borderOtherCountry.name?.common}</div>
                            <div className='data' style={{ display: "flex", width: "100%", flexWrap: "wrap", flexDirection: "column", minHeight: "160px", maxHeight: "180px", margin: "1em 0", fontSize: "0.97em", fontWeight: "450" }}>
                                <span><b>Official Name</b> : {borderOtherCountry.name?.official}</span>
                                <span><b>Population</b> : {borderOtherCountry.population?.toLocaleString()}</span>
                                <span><b>Region</b> : {borderOtherCountry.region}</span>
                                <span><b>Sub Region</b> : {borderOtherCountry.subregion}</span>
                                <span><b>Capital</b> : {borderOtherCountry.capital}</span>
                                <span><b>Top Level Domain</b> : {borderOtherCountry.tld[0]}</span>
                                <span><b>Currency</b> : {Object.values(borderOtherCountry.currencies).map(cou => cou.name).join(", ")}</span>
                                <span><b>Language</b> :  {Object.values(borderOtherCountry.languages).join(", ")}</span>

                            </div>
                            <div className='border-country' style={{ border: "none", dispaly: "flex" }}><b>Border Countries</b> : {borderOtherCountry.borders?.map((el) => <BorderCountry isDark={isDark} style={{ color: isDark ? darkTextColor : lightTextColor }} key={el} name={borderCountry(el)} />)}</div>
                        </div>

                    </div>


                </Container >


            </div >

        </>
    )
}

export default Country
