import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router'

function BorderCountry({ name, isDark }) {

    const darkBackgroundColor = "hsl(207, 26%, 17%)"
    const lightBackgroundColor = "hsl(0, 0%, 98%)"
    const darkTextColor = "hsl(0, 0%, 100%)"
    const lightTextColor = "hsl(200, 15%, 8%)"
    const darkElementColor = "hsl(209, 23%, 22%)"
    const lightElementColor = "hsl(0, 0%, 100%)"

    return (
        <Link to={`/country/${name}`} >
            <Button variant="primary" style={{ Width: "80px", margin: "0.5em", fontSize: "0.75em", backgroundColor: isDark ? darkElementColor : lightElementColor, borderColor: "transparent", minWidth: "180px", color: isDark ? darkTextColor : lightTextColor, borderColor: isDark ? "black" : "#d9d9d9", boxShadow: isDark ? "0 0 5px rgba(0, 0, 0, .25) " : "0px 0px 2px #909090", border: "none", padding: "0.5em" }}>{name}</Button>

        </Link >
    )
}

export default BorderCountry
