import React from 'react'
import Cards from './Components/Cards'




const App = () => {


  const jobOpenings = [
    {
      brandLogo: "https://cdn.simpleicons.org/google",
      companyName: "Google",
      datePosted: "2 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Mountain View, USA"
    },

    {
      brandLogo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Redmond, USA"
    },

    {
      brandLogo: "https://cdn.simpleicons.org/apple",
      companyName: "Apple",
      datePosted: "1 day ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hour",
      location: "Cupertino, USA"
    },

    {
      brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
      companyName: "Amazon",
      datePosted: "3 days ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$60/hour",
      location: "Seattle, USA"
    },

    {
      brandLogo: "https://cdn.simpleicons.org/meta",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$75/hour",
      location: "Menlo Park, USA"
    },

    {
      brandLogo: "https://cdn.simpleicons.org/netflix",
      companyName: "Netflix",
      datePosted: "2 days ago",
      post: "UI/UX Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hour",
      location: "Los Gatos, USA"
    },

    {
      brandLogo: "https://cdn.simpleicons.org/nvidia",
      companyName: "NVIDIA",
      datePosted: "6 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$90/hour",
      location: "Santa Clara, USA"
    },

    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNJuEqZtXOkbUB_wch8KNdNiJ4KqzZ6w1oUtxeSPm2akOwdozRA8ytGFc&s=10",
      companyName: "Adobe",
      datePosted: "3 days ago",
      post: "Frontend Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$55/hour",
      location: "San Jose, USA"
    }
  ];

  return (
    <div className='parent'>
      {jobOpenings.map((elem, idx) => (
        <div key={idx} id={idx}>
          <Cards brandLogo={elem.brandLogo} companyName={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
        </div>
      ))}
    </div>
  );
};

export default App;