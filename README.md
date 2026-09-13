# Job Market Intelligence & Skills Analytics

## Project Overview

An end-to-end data analytics project that analyzes job listings to uncover hiring trends, salary insights, job locations, and in-demand technical skills.

The project collects job-market data through a REST API, cleans and analyzes the data using Python, stores it in PostgreSQL, exposes insights through a Node.js API, and presents findings in Power BI.

## Objectives

* Analyze current job-market demand.
* Identify the most common job locations.
* Understand salary ranges across job listings.
* Find the most in-demand technical skills.
* Categorize skills into broader technology groups.
* Build a reusable API for accessing job-market insights.
* Create an interactive Power BI dashboard.

## Tools & Technologies

* **Python** — data collection, cleaning, analysis, and skill extraction
* **Jupyter Notebook** — exploratory analysis and data pipeline
* **REST API** — job listing data collection
* **PostgreSQL** — relational data storage and SQL analysis
* **SQL** — job, salary, location, and skill analysis
* **Node.js & Express.js** — backend REST API
* **Power BI** — dashboard and data visualization
* **Git & GitHub** — version control and project sharing

## Data Source

Job listings were collected using the Adzuna Jobs API.

The dataset contains job listing information such as:

* Job title
* Company
* Location
* Country
* City
* Job category
* Contract type
* Contract time
* Salary range
* Job description
* Posting date
* Job URL

> The API provides short job-description snippets. Skill extraction was performed using a rule-based keyword-matching approach.

## Project Workflow

1. Collect job listings through the REST API.
2. Normalize and clean the raw data.
3. Remove duplicate job listings.
4. Extract technical skills using a predefined skill dictionary.
5. Categorize skills into technology groups.
6. Save processed datasets as CSV files.
7. Load job and skill data into PostgreSQL.
8. Perform SQL-based analysis.
9. Build a Node.js API for analytical results.
10. Create a Power BI dashboard.
11. Publish the complete project to GitHub.

## Key Analysis Areas

### Job Market Analysis

* Total number of job listings
* Job distribution by city
* Job distribution by category
* Contract type and contract time analysis

### Salary Analysis

* Average minimum salary
* Average maximum salary
* Minimum and maximum salary ranges
* Jobs with available salary information

### Skills Analysis

* Most in-demand technical skills
* Skill demand by category
* Technology and programming skill trends

## Project Structure

```text
job-market-intelligence-analytics/
│
├── dashboard/
│   └── Project 10 - Job Market Intelligence Dashboard.pbix
│
├── data/
│   ├── raw/
│   └── processed/
│       ├── jobs_analysis.csv
│       ├── skill_demand.csv
│       └── skill_category_demand.csv
│
├── notebooks/
│   └── 01_api_data_collection.ipynb
│
├── sql/
│   └── 01_job_market_analysis.sql
│
├── src/
│   └── api/
│       ├── db.js
│       └── server.js
│
├── requirements.txt
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## PostgreSQL Tables

### `jobs`

Stores cleaned job listing information.

### `job_skills`

Stores the technical skills extracted from job descriptions.

## API Endpoints

```text
GET /
GET /api/jobs
GET /api/summary
GET /api/cities
GET /api/categories
```

## Dashboard

The Power BI dashboard includes:

* Total Jobs
* Average Minimum Salary
* Top Job Locations
* Most In-Demand Skills

## Skills Demonstrated

* API data collection
* Data cleaning and preprocessing
* Exploratory data analysis
* Rule-based NLP
* Skill extraction
* SQL querying
* PostgreSQL database management
* REST API development
* Data visualization
* Power BI dashboard development
* Git and GitHub workflow

## Disclaimer

This project is intended for educational and portfolio purposes. Job listings and salary information may change over time and should not be treated as guaranteed employment or compensation data.