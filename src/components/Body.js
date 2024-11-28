import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Filter from './Filter'
import "./Body.css"
import Cards from './Cards'
// import { allData } from './Data'



function Body({ isDark }) {

    const containerStyle = {
        minHeight: "calc(100vh - (120px + 4em))",
        marginTop: "4em",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
    }

    const [region, setRegion] = useState("")
    const [countries, setCountries] = useState([])
    const [searchInput, setSearchInput] = useState({ input: "" })
    // const [isDarkTheme, setIsDarkTheme] = useState(false)


    const getCountriesByRegion = async () => {

        const fetchData = await fetch(`https://restcountries.com/v3.1/all`)

        const response = await fetchData.json()

        setCountries(response)
    }

    useEffect(() => {

        getCountriesByRegion();

    }, [region])

    // console.log(isDarkTheme)



    // console.log(handleCountry)

    const allCountries = countries.map((country) => <Cards isDark={isDark} key={country.ccn3} flag={country.flags.png} name={country.name.official} population={country.population.toLocaleString()} region={country.region} capital={country.capital} />)

    const specificCountries = countries.filter(country => country.region.trim().toLowerCase() === region.trim().toLowerCase()).map((country) => <Cards isDark={isDark} key={country.ccn3} flag={country.flags.png} name={country.name.official} population={country.population.toLocaleString()} region={country.region} capital={country.capital} />)

    const searchingCountryByCommonName = countries.filter(country => country.name.common.trim().toLowerCase() === searchInput.input.trim().toLowerCase()).map((country) => <Cards isDark={isDark} key={country.ccn3} flag={country.flags.png} name={country.name.official} population={country.population.toLocaleString()} region={country.region} capital={country.capital} />)

    // const searchingCountryByOfficialName = countries.filter(country => country.name.official.trim().toLowerCase() === searchInput.input.trim().toLowerCase()).map((country) => <Cards key={country.ccn3} flag={country.flags.png} name={country.name.official} population={country.population.toLocaleString()} region={country.region} capital={country.capital} />)

    // console.log(searchingCountryByOfficialName)

    const getCountries = () => {

        if (searchInput.input) {

            return searchingCountryByCommonName

        } else if (region) {

            return specificCountries

        } else {
            return allCountries
        }
    }

    // searching Input

    const handleSearchingInput = (e) => { setSearchInput({ input: e.target.value }) }

    // console.log(searchInput.input)

    const darkBackgroundColor = "hsl(207, 26%, 17%)"
    const lightBackgroundColor = "hsl(0, 0%, 98%)"
    const darkTextColor = "hsl(0, 0%, 100%)"
    const lightTextColor = "hsl(200, 15%, 8%)"
    const darkElementColor = "hsl(209, 23%, 22%)"
    const lightElementColor = "hsl(0, 0%, 100%)"


    return (

        <div style={{ backgroundColor: isDark ? darkBackgroundColor : lightBackgroundColor, marginTop: "3em" }}>
            <Container style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }} >
                <div className='search' style={{ paddingTop: "2.5em" }}>
                    <form style={{ backgroundColor: isDark ? darkElementColor : lightElementColor, width: "350px", padding: "0 0.5em", borderRadius: "5px", borderColor: isDark ? "black" : "#d9d9d9", boxShadow: isDark ? "0 0 5px rgba(0, 0, 0, .25) " : "0px 0px 2px #909090" }} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" style={{ fill: isDark ? darkTextColor : lightTextColor }}>
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg><input value={searchInput.input} onChange={handleSearchingInput} autoFocus placeholder='Search for a country...' style={{ color: isDark ? darkTextColor : lightTextColor, caretColor: "#fff", backgroundColor: isDark ? darkElementColor : lightElementColor, padding: "0.5em", marginLeft: "0.5em", outline: "none", border: "none", width: "90%" }} /></form>
                </div>

                <Filter setRegion={setRegion} isDark={isDark} />

            </Container>

            <Container className='cards-container' style={containerStyle} >

                {getCountries()}

            </Container >

        </div >
    )
}

export default Body
