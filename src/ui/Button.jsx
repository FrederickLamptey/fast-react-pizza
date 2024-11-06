import { Link } from "react-router-dom"

function Button({ children, disabled, to, type}) {
   
    const base = "bg-yellow-400 uppercase tracking-wide font-semibold text-stone-800  inline-block rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";
    
    const styles = {
        primary: base + " py-3 px-4 md:px-6 md:py-4",
        small: base + ' py-2 px-4 md:px-5 md:py-2.5 text-xs'
    }
    
    if (to) return <Link to={to} className={styles[type]}>{ children}</Link>

    return (
        <button className={styles[type]} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button
