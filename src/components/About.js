import aboutImg from '../about.jpg';

const About = () => {
    return (
        <div className="about">
            <h2>About this Project</h2>
            <div className="aboutContent">
                <div className="aboutImage">
                    <img src={aboutImg} alt="a place in Japan that resembles an scene on the movie Kimi no na Wa" />
                </div>
                <div className="aboutText">
                    <p>Hi my name is Roberto and I created this web application as my project #3 during my boot-camp at Juno College. This site called AnimeScout will populate a list of popular anime shows and allow user to search a specific anime by taking a query input to make an axios call and get data back from the API. </p>
                </div>
            </div>
        </div>
    )
}

export default About;