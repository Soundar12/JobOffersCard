import './JobCard.css'
import logo from '../assets/mcdonald-logo.svg'
import applylink from '../assets/apply.svg'

function JobCard(props) {
    return (
        <div className='jobCard'>
            <div className='jobtype'>
                <p>{props.jobType}</p>
            </div>
            <header>
                <div className="logo">
                <img src={props.logo} alt="logo" />
            </div>
            <div className="content">
                <h3>{props.name}</h3>
                <h3>{props.role}</h3>
                <p>{props.location}</p>

            </div>
            </header>
            
            <div className="footer">
                <div className="salary">
                    <p>Job Offer</p>
                    <p style={{fontWeight:"bold"}}>Salary: {props.minSalary} LPA - {props.maxSalary} LPA</p>
                </div>
                <div className="apply">
                    <button><span>Apply</span>  <img src={applylink} alt="applylink" />  </button>
                     
                </div>
            </div>

        </div>

    )

}

export default JobCard;