import { Link } from "react-router-dom"

export default function ImproveSkills() {
    const list = [
        "Learn new recipies",
        "Experiment with food",
        "Write your own recipies",
        "Know nutrition facts",
        "Get cooking tips",
        "Get ranked"
    ]

    return(
        <div className="section improve-skills">
        <div className="col img">
            <img src="/img/img_10.jpg" alt=""/>
        </div>
        <div className="col typography">
            <h1 className="title">Improve your Culinary skill</h1>
            { list.map((item, index) => (
                <p className="skill-item" key={index}>{item}</p>
            )) }
            <Link to="/signup" className="btn">Sign Up Now</Link>
            {/* <button className="btn" onClick={() => }>signup now</button> */}
        </div>
    </div>
    )
}
 