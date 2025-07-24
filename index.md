---
layout: home
title: Gabriel Nixon Raj
---

# Gabriel Nixon Raj

Welcome to my academic and professional portfolio. I’m a data scientist and researcher interested in reinforcement learning, belief modeling under uncertainty, and optimization as system design. I use machine learning and mathematical modeling to explore how agents make decisions in dynamic environments.

## Research Highlights

- **ICAIF 2025 (UnderReview):** Reinforcement learning for portfolio optimization with regime-awareness, Sharpe ratio validation, and trust-based adaptation.
- **CMStatistics 2025 (Speaker):** Info-metric modeling under epistemic fragility.
- **Berkeley Lab (Ongoing):** Agent-based summarization systems for real-time system state inference and monitoring.

## Publications

- "Leveraging CNN and IoT for Effective E-Waste Management" – I-SMAC 2023
- "A Smart Healthcare Companion with Tesseract OCR and KNN Integration" – TEAH 2025
- "Automated Energy Billing with Blockchain and the Prophet Forecasting Model" – IEEE MRT 2024
- Financial modeling paper on Nifty50 pivot points (tested in live market conditions)

## Projects

- **Portfolio Simulation Framework:** Integrated PCA, Sharpe normalization, Bayesian belief updates, Monte Carlo crisis stress-testing, and bootstrapped confidence intervals for financial regime adaptation.
- **Info-Metrics for Fragile Trust:** KL-regularized portfolio optimization using entropy-constrained priors and trust decay modeling.
- **Hangman Solver:** Designed with positional letter frequency, KL divergence for belief skew, and full-word transitions under low entropy conditions.
- **Spark Benchmarking Project (HPC):** Evaluated performance of Parquet vs CSV using 100M-row datasets under multiple filters and aggregation workloads.
- **MovieLens Capstone:** Customer segmentation via MinHash and hybrid recommender system using ALS and latent class models.

## Teaching and Mentorship

- Led tutorials for 60+ undergraduates in probability, optimization, and machine learning
- Graded advanced coursework and mentored project teams on applied AI pipelines

## Professional Experience

- **Impact Global Digital (Intern):** Built neural search engine and custom NLP pipeline for medical data retrieval
- **Berkeley Lab (Ongoing):** Built a multi-source summarization agent with NLP pipelines and automated GPU usage reports via SLURM + Kafka
- **Independent Retail Venture:** Founded an apparel business, managed supply chains, CRO strategies, and GST filings at age 19

## Blog

Here are some of my recent blog posts. I write about law, data, policy, and decision theory:

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%B %-d, %Y" }}
{% endfor %}

## Contact

- GitHub: [github.com/GabrielNixon](https://github.com/GabrielNixon)
- Email: gr2513@nyu.edu
- CV: [View Full CV (PDF)](./GabrielNixon_CV.pdf)
