
const currentYear = new Date().getFullYear();
const githubUrl = "https://github.com/Samuel-H-Dev"

export default function Footer(){


    return(

        <footer>
        <p>&copy; {currentYear} </p>
        <p><a href={githubUrl} target="_blank" rel="noreferrer">see code in Github</a></p>
        </footer>
    )
};