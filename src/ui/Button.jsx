import { Link } from "react-router-dom"

function Button({ children, disabled, to, type}) {
   
    const base = "bg-yellow-400 uppercase tracking-wide font-semibold text-stone-800  inline-block rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";
    
    const styles = {
        primary: base + " py-3 px-4 md:px-6 md:py-4",
        small: base + ' py-2 px-4 md:px-5 md:py-2.5 text-xs',
        secondary: "uppercase tracking-wide border-2 border-stone-300 font-semibold text-stone-400  inline-block rounded-full hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300 focus:bg-yellow-300 focus:hover:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed py-2.5 px-4 md:px-6 md:py-3.5"
    }
    
    if (to) return <Link to={to} className={styles[type]}>{ children}</Link>

    return (
        <button className={styles[type]} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button
