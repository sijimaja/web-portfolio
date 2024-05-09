import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
    {
      id: 2,
      name: "Spam Email Detector",
      image: ImageOne,
      link: "https://github.com/sijimaja/Spam-email-detector",
    },
    {
      id: 3,
      name: "React Web Application",
      link: "https://github.com/sijimaja/Portfolio",
      image: ImageTwo,
    },

    {
      id: 2,
      name: "Malicious URL Detector",
      image: ImageFour,
      link: "https://github.com/sijimaja/Malicious_URL_Detector",
    },
    {
      id: 2,
      name: "URL Machine Learning",
      image: ImageThree,
      link: "",
    },
    
    {
      id: 3,
      name: "Course Booking App",
      image: ImageFive,
      link: "https://github.com/sijimaja/seg2105-project",
    },
  ];
  
  const filterData = [
    {
      filterId: 1,
      label: "All",
    },
    {
      filterId: 2,
      label: "Development",
    },
    {
      filterId: 3,
      label: "Design",
    },
  ];

  const Portfolio = () => {
    const [filteredvalue, setFilteredValue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null);
  
    function handleFilter(currentId) {
      setFilteredValue(currentId);
    }
  
    function handleHover(index) {
      setHoveredValue(index);
    }
  
    console.log("====================================");
    console.log(hoveredValue);
    console.log("====================================");
  
    const filteredItems =
      filteredvalue === 1
        ? portfolioData
        : portfolioData.filter((item) => item.id === filteredvalue);
  
    console.log(filteredItems);
  
    return (
      <section id="portfolio" className="portfolio">
        <PageHeaderContent
          headerText="My Portfolio"
          icon={<BsInfoCircleFill size={40} />}
        />
        <div className="portfolio__content">
          <ul className="portfolio__content__filter">
            {filterData.map((item) => (
              <li
                className={item.filterId === filteredvalue ? "active" : ""}
                onClick={() => handleFilter(item.filterId)}
                key={item.filterId}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <div className="portfolio__content__cards">
            {filteredItems.map((item, index) => (
              <div
                className="portfolio__content__cards__item"
                key={`cardItem${item.name.trim()}`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
              >
                <div className="portfolio__content__cards__item__img-wrapper">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    
                    <img alt="dummy data" src={item.image} />
                  </a>
                </div>
                <div className="overlay">
                  {index === hoveredValue && (
                    <div>
                      <p>{item.name}</p>
                      <button onClick={() => window.location.href = item.link}>Visit</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  export default Portfolio;