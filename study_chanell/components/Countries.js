import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from '../styles/Countries.module.css'

const Countries = () => {
    const [countries, setCountries] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [name, setName] = useState(null)
    const [nameFromButtonClick, setNameFromButtonClick] = useState(null)

    const handleClick = () => {
        setNameFromButtonClick(name)
    }

    useEffect(() => {
        setLoading(true)
        if (name === null)
            fetch(`https://restcountries.com/v3.1/all`)
            .then((res) => res.json())
            .then((data) => {
                setCountries(data)
                setLoading(false)
            }) 
        else 
        fetch(`https://restcountries.com/v3.1/name/${nameFromButtonClick}`)
            .then((res) => res.json())
            .then((data) => {
                setCountries(data)
                setLoading(false)
            })
    }, [nameFromButtonClick])

    if (isLoading) return <p>Loading...</p>
    if (!countries) return <p>No profile data</p>

    return (
        <>
            {/* <h1 className={styles.title}>Countries</h1> */}
            <div className={styles.search}>
                <input type="search" name="search" value={name} onChange={e => setName(e.target.value)} className={styles.search} placeholder="Search for country name.."/>
                <button type='button' onClick={handleClick}> Buscar </button>
            </div>
            {/* <div>{countries.name}</div> */}
            {countries.map((country) => {
                const { numericCode, name, capital, region, flags } = country

                return (
                    <div key={numericCode} className={styles.countries}>
                        <ul>
                            <li>
                                <Image src={flags.svg} alt={name} width='150' height='100' />
                                <h4 className='country-name'>Country: <span> {name.common} </span></h4>
                                <h4>Capital: <span> {capital} </span></h4>
                                <h4>Region: <span> {region} </span></h4>
                            </li>
                        </ul>
                    </div>
                )
            })}
        </>
    )
}

export default Countries