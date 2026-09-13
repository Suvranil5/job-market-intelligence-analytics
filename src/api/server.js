const express = require("express");
const pool = require("./db");

const app = express();

app.use(express.json());

/*
  Test route
*/
app.get("/", (req, res) => {
  res.json({
    message: "Job Market Intelligence API is running"
  });
});

/*
  Get job listings
*/
app.get("/api/jobs", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        id,
        title,
        company,
        location,
        country,
        city,
        category,
        contract_type,
        contract_time,
        salary_min,
        salary_max,
        salary_is_predicted,
        created,
        posting_year,
        posting_month,
        description,
        redirect_url
      FROM jobs
      ORDER BY created DESC
      LIMIT 100;
    `);

    res.json(result.rows);
  } catch (error) {
    console.error("Jobs error:", error.message);

    res.status(500).json({
      error: error.message
    });
  }
});

/*
  Get job-market summary
*/
app.get("/api/summary", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        COUNT(*) AS total_jobs,

        COUNT(*) FILTER (
          WHERE salary_min > 0
            AND salary_max > 0
        ) AS jobs_with_salary,

        ROUND(AVG(salary_min), 2) AS avg_salary_min,

        ROUND(AVG(salary_max), 2) AS avg_salary_max,

        MIN(salary_min) AS min_salary,

        MAX(salary_max) AS max_salary

      FROM jobs;
    `);

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Summary error:", error.message);

    res.status(500).json({
      error: error.message
    });
  }
});

/*
  Get job counts by city
*/
app.get("/api/cities", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        city,
        COUNT(*) AS job_count
      FROM jobs
      WHERE city IS NOT NULL
      GROUP BY city
      ORDER BY job_count DESC
      LIMIT 15;
    `);

    res.json(result.rows);
  } catch (error) {
    console.error("Cities error:", error.message);

    res.status(500).json({
      error: error.message
    });
  }
});

/*
  Get job counts by category
*/
app.get("/api/categories", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        category,
        COUNT(*) AS job_count
      FROM jobs
      WHERE category IS NOT NULL
      GROUP BY category
      ORDER BY job_count DESC;
    `);

    res.json(result.rows);
  } catch (error) {
    console.error("Categories error:", error.message);

    res.status(500).json({
      error: error.message
    });
  }
});

/*
  Start API server
*/
app.listen(5000, () => {
  console.log("API running at http://localhost:5000");
});