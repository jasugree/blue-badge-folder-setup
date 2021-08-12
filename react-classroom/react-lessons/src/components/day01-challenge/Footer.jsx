function Footer(props){
    let today = new Date();
    return (
        <div>
            © Copyright EFA, {today.getFullYear()} 

        </div>

    )
}

export default Footer;