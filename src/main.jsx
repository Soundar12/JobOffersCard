import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import JobCard from './components/JobCard.jsx'
import mcdonald from '../public/assets/mcdonald-logo.svg'

const offers=[
  {
    "logo": mcdonald,
    "companyName": "Goldman Sachs",
    "role":"Associate-Software Engineer",
    "location":"Bengaluru",
    "minSalary" : 4,
    "maxSalary" : 8,
    "jobType":"In-Office Job",


  },
  {
    "logo": "../public/assets/instagram-2-1-logo-svgrepo-com.svg",
    "companyName": "Instagram",
    "role":"SDE - II",
    "location":"Mumbai",
    "minSalary" : 12,
    "maxSalary" : 16,
    "jobType":"Work from home",


  },
  {
    "logo": "/public/assets/android-logo-svgrepo-com.svg",
    "companyName": "Andriod",
    "role":"Machine Learning Engineer",
    "location":"Bengaluru",
    "minSalary" : 4,
    "maxSalary" : 7,
    "jobType":"In-Office Job",


  },
  {
    "logo": "../../public/assets/xbox-one-logo-svgrepo-com.svg",
    "companyName": "XBOX-ONE",
    "role":"Software Engineer",
    "location":"Bengaluru",
    "minSalary" : 8,
    "maxSalary" : 14,
    "jobType":"In-Office Job",


  },
  {
    "logo": "public/assets/amazon-icon-logo-svgrepo-com.svg",
    "companyName": "Amazon",
    "role":"Back-end Developer​",
    "location":"Chennai, Salem, Coimbatore",
    "minSalary" : 6,
    "maxSalary" : 9,
    "jobType":"Work from Home",


  },
  {
    "logo": "public/assets/bmw-logo-svgrepo-com.svg",
    "companyName": "BMW",
    "role":"Machine Learning Engineer",
    "location":"Gurgaon",
    "minSalary" : 8,
    "maxSalary" : 11,
    "jobType":"In-Office Job",


  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  

   <div className='cards'>
  {
  offers.map((item)=> {
  return (<JobCard logo={item.logo} name={item.companyName} role={item.role} location={item.location} jobType={item.jobType} minSalary={item.minSalary} maxSalary={item.maxSalary}>  </JobCard>)
})

  }
 </div> 
 
 
 

 
)