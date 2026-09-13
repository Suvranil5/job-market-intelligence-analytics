-- Project 10: Job Market Intelligence & Skills Analytics

-- 1. Top in-demand skills
SELECT
    skill,
    COUNT(*) AS job_count
FROM job_skills
GROUP BY skill
ORDER BY job_count DESC, skill
LIMIT 15;


-- 2. Skills by job category
SELECT
    j.category,
    js.skill,
    COUNT(*) AS job_count
FROM jobs j
JOIN job_skills js
    ON j.id = js.job_id
GROUP BY j.category, js.skill
ORDER BY j.category, job_count DESC;


-- 3. Top job locations
SELECT
    city,
    COUNT(*) AS job_count
FROM jobs
GROUP BY city
ORDER BY job_count DESC
LIMIT 15;


-- 4. Salary analysis
SELECT
    COUNT(*) AS jobs_with_salary,
    ROUND(AVG(salary_min), 2) AS avg_salary_min,
    ROUND(AVG(salary_max), 2) AS avg_salary_max,
    MIN(salary_min) AS min_salary,
    MAX(salary_max) AS max_salary
FROM jobs
WHERE salary_min > 0
  AND salary_max > 0;
  CREATE DATABASE job_market_intelligence;
  -- Project 10: Job Market Intelligence & Skills Analytics

-- 1. Top in-demand skills
SELECT
    skill,
    COUNT(*) AS job_count
FROM job_skills
GROUP BY skill
ORDER BY job_count DESC, skill
LIMIT 15;


-- 2. Skills by job category
SELECT
    j.category,
    js.skill,
    COUNT(*) AS job_count
FROM jobs j
JOIN job_skills js
    ON j.id = js.job_id
GROUP BY j.category, js.skill
ORDER BY j.category, job_count DESC;


-- 3. Top job locations
SELECT
    city,
    COUNT(*) AS job_count
FROM jobs
GROUP BY city
ORDER BY job_count DESC
LIMIT 15;


-- 4. Salary analysis
SELECT
    COUNT(*) AS jobs_with_salary,
    ROUND(AVG(salary_min), 2) AS avg_salary_min,
    ROUND(AVG(salary_max), 2) AS avg_salary_max,
    MIN(salary_min) AS min_salary,
    MAX(salary_max) AS max_salary
FROM jobs
WHERE salary_min > 0
  AND salary_max > 0;
  SELECT
    current_database(),
    inet_server_addr(),
    inet_server_port(),
    current_user;
	SELECT datname
FROM pg_database
ORDER BY datname;