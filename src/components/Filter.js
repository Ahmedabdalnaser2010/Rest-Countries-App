import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { allData } from './Data'
import './Body.css'

function Filter({ setRegion, isDark }) {

    const choice = Array.from(new Set(allData.map((country) => country.region)))

    const handleChooseCountry = (e) => { setRegion(e.target.textContent) }

    const darkBackgroundColor = "hsl(207, 26%, 17%)"
    const lightBackgroundColor = "hsl(0, 0%, 98%)"
    const darkTextColor = "hsl(0, 0%, 100%)"
    const lightTextColor = "hsl(200, 15%, 8%)"
    const darkElementColor = "hsl(209, 23%, 22%)"
    const lightElementColor = "hsl(0, 0%, 100%)"

    const filter = choice.map((country) => <Dropdown.Item className={isDark ? "" : "activ"} key={country} style={{ color: isDark ? darkTextColor : lightTextColor, minWidth: "180px" }} onClick={handleChooseCountry}> {country} </Dropdown.Item >)



    return (

        <Dropdown style={{ paddingTop: "2.5em", color: isDark ? darkTextColor : lightTextColor }}>

            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: isDark ? darkElementColor : lightElementColor, borderColor: "transparent", minWidth: "180px", color: isDark ? darkTextColor : lightTextColor, borderColor: isDark ? "black" : "#d9d9d9", boxShadow: isDark ? "0 0 5px rgba(0, 0, 0, .25) " : "0px 0px 2px #909090" }}>
                Filter by Region
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ backgroundColor: isDark ? darkElementColor : lightElementColor, color: isDark ? darkTextColor : lightTextColor }}>

                {filter}

            </Dropdown.Menu>

        </Dropdown >

    )
}

export default Filter
