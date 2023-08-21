import React, {useState} from "react";
import { Search } from "../../Assets/SearchLine/Search";
import Input from "../Input";
import { InputTypes } from "../Input/Input";
import { CheckPicker } from "rsuite";
import "./rsuite.css";
import styles from "./SearchLine.module.css";
import classNames from "classnames";
import {FilterBurger} from "../../Assets/SearchLine/FilterBurger";
import {FilterBurgerActiveIcon} from "../../Assets/SearchLine/FilterBurgerActiveIcon";
import FilterMobile from "./FilterMobile";


export const byIndustry = [
  "AI and Machine Learning",
  "Augmented Reality",
  "Blockchain",
  "CRM software",
  "Cybersecurity",
  "Data Science",
  "Digital design",
  "E-commerce, Education, Health and Fitness",
  "Lifestyle",
  "Ecommerce",
  "eLearning",
  "ERP software",
  "eWallet Platform Provider",
  "Fintech",
  "Game Development",
  "HR Software",
  "Live Chat software",
  "Logistics",
  "Marketplaces",
  "Martech (Marketing Tech)",
  "Mobile Development",
  "NFT Marketplace",
  "Payment Gateway Provider",
  "Point of sale software",
  "Project Management software",
  "Real Estate",
  "SaaS",
  "Sport Activity",
  "Telecom",
  "Video (Face) recognition",
  "Voice recognition",
  "Webinar software"
].map((item) => ({ label: item, value: item }));

export const byStackCode = [
  ".NET3",
  ".Net Core",
  "Adobe After Effect",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Ajax",
  "Android",
  "Angular",
  "Apache",
  "ArgoCD",
  "Autoencoders",
  "AWS",
  "Backend development",
  "Blackbox testing",
  "Blockchain",
  "Bootstrap",
  "C / C++ / Embedded",
  "Chai",
  "CI/CD - Github",
  "CNN",
  "Coldfusion",
  "Data Science",
  "DevOps / Sysadmin",
  "Django",
  "DNN",
  "Docker",
  "Drone CI",
  "ELK",
  "Express.js",
  "Facebook SDK",
  "Figma",
  "Firebase",
  "Flask",
  "Flutter",
  "Flux",
  "Front-end / JavaScript",
  "Frontend development",
  "Full Stack Development",
  "Gamedev / Unity / AS3",
  "GAN",
  "Gitlab",
  "Grafana",
  "Invision",
  "ionic",
  "iOS",
  "IT Consulting",
  "J2EE",
  "Java",
  "Javascript",
  "Jenkins",
  "Jira",
  "jQuery",
  "Koa 2",
  "Kotlin",
  "Kubernetes",
  "Laravel",
  "LSTM",
  "Magento",
  "Marvel",
  "Meteor.js",
  "MongoDB",
  "MS Azure services",
  "MySQL",
  "Next.js",
  "Node.js",
  "Nuxt.js",
  "Objective-C",
  "Opencart",
  "PHP",
  "PostgreSQL",
  "Prometheus",
  "Python",
  "Pytorch",
  "QA Automation",
  "R",
  "React Native",
  "Redis",
  "Redux",
  "Redux-Saga",
  "Reselect",
  "ROR",
  "Ruby / Rails",
  "Rust",
  "Scala",
  "Shopify",
  "Smoke testing",
  "solidity",
  "Substrate",
  "Swagger",
  "Swift",
  "TensorFlow",
  "Unity",
  "UX / Design",
  "vue.js",
  "Web3",
  "Woocommerce",
  "WordPress",
  "Zend",
].map((item) => ({ label: item, value: item }));

export const byServiceCategory = [
  "Customizer",
  "Ecosystem provider",
  "Outsourcing software development",
  "Product company",
  "R&amp;D Center",
  "SaaS",
  "Startup",
].map((item) => ({ label: item, value: item }));

const SearchLine = () => {
  const [isOpenedFilter,setIsOpenedFilter]=useState(false)

  const onFilterClick = () => {
    setIsOpenedFilter(!isOpenedFilter)
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.searchContainer}>
          <Input
            value={""}
            onChange={() => {}}
            placeholder={"Search"}
            type={InputTypes.SearchType}
            className={classNames(styles.tabletInput,styles.mobileInput)}
          />
          <div className={styles.searchIcon} onClick={() => {}}>
            <Search />
          </div>
        </div>
        <div className={classNames(styles.filtersBurger,{[styles.blueColor]:isOpenedFilter})} onClick={onFilterClick}>
          {isOpenedFilter ? <FilterBurgerActiveIcon/> : <FilterBurger/>}
        </div>

        <div className={classNames(styles.filterContainer,styles.hideFilters)}>
          <CheckPicker
              data={byIndustry}
              searchable={false}
              className={styles.checkPicker}
              placeholder={"By Industry"}
              menuClassName={styles.dropdownMenu}
          />

          <CheckPicker
              data={byStackCode}
              searchable={false}
              className={styles.checkPicker}
              placeholder={"By Stack/Code"}
              menuClassName={styles.dropdownMenu}
          />

          <CheckPicker
              data={byServiceCategory}
              searchable={false}
              className={styles.checkPicker}
              placeholder={"By Service Category"}
              menuClassName={styles.dropdownMenu}
          />
        </div>
      </div>
      <FilterMobile opened={isOpenedFilter}/>
    </div>
  );
};

export default SearchLine;