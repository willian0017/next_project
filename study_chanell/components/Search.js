import styles from '../styles/Search.module.css'

const Search = () => {
    window.addEventListener('DOMContentLoaded', () => {
        const search = document.getElementById('search');
        
        search.addEventListener('click', (e) => {
            const {value} = e.target
            
            const countryName = document.querySelectorAll('.country-name')

            countryName.forEach((name) => {
                if(name.innerText.toLowerCase().includes(value.toLowerCase)) {
                    name.parentElement.parentElement.style.display = 'block'
                } else {
                    name.parentElement.parentElement.style.display = 'none'
                }
            })
        })
    })

    return(
        <>
            <div>
                <input type="search" name="search" className={styles.search} id="search" placeholder="Search for country name.."/>
            </div>
        </>
    )
    
}

export default Search