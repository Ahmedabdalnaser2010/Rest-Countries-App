import React, { useEffect, useState } from "react"




function TopArrowButton({ isDark }) {

    const [visibility, setVisibility] = useState(false)

    useEffect(() => {

        window.addEventListener("scroll", () => setVisibility(window.scrollY >= 600))

    }, [])



    const clickbutton = () => {
        window.scrollTo({
            left: 0,
            top: 0,
            behaviour: "smooth"
        })

    }

    const darkBackgroundColor = "hsl(207, 26%, 17%)"
    const lightBackgroundColor = "hsl(0, 0%, 98%)"
    const darkTextColor = "hsl(0, 0%, 100%)"
    const lightTextColor = "hsl(200, 15%, 8%)"
    const darkElementColor = "hsl(209, 23%, 22%)"
    const lightElementColor = "hsl(0, 0%, 100%)"

    let arrowStyle = {
        scale: "1.8",
        fill: isDark ? lightElementColor : darkElementColor,
        position: "fixed",
        right: "30px",
        bottom: "60px",
        display: visibility ? "block" : "none",
        cursor: "pointer"

    }

    return (
        <div className='Arrow' onClick={clickbutton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16" style={arrowStyle} >
                <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
            </svg>
        </div >
    )
}

export default TopArrowButton
