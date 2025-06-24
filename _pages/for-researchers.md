---
layout: page
title: For Researchers
permalink: /for-researchers/
---

# Why Researchers Should Support the UnlockGPU Campaign

*UnlockGPU is not about picking sides in a corporate battle. It's about fixing a broken part of the research infrastructure that holds back scientific progress. If you care about open science, reproducibility, and the ability to innovate without artificial barriers, you have every reason to get involved.*

---

## The Problem: A Bottleneck in Scientific Discovery

NVIDIA's dominance in GPU software—via CUDA—creates a chokepoint for research:

* Locks the scientific community into a single vendor's ecosystem
* Makes reproducibility and open science harder
* Forces researchers to adapt to a closed, proprietary stack
* Limits access for students and smaller labs due to high costs and hardware lock-in

AMD's hardware powers some of the world's fastest supercomputers, but most researchers can't use it productively. The ROCm stack, while improving, is still seen as complex, unstable, and poorly documented for real-world research. Many researchers want an alternative—but few believe it's ready for everyday science.

---

## The Research Risk: Unreliable Results Undermine Science

This isn't just about developer preference—it's about the integrity and pace of research:

* **Unreliable results:** Our sentiment report found that **25% of AI models failed accuracy tests on AMD hardware**—meaning that, even when code runs, the scientific results may be wrong or irreproducible. ([Source: TechPowerUp](https://www.techpowerup.com/330155/amds-pain-point-is-rocm-software-nvidias-cuda-software-is-still-superior-for-ai-development-report))
* **Complex, unstable installation**: Many researchers report spending days or weeks just getting ROCm to work, especially on consumer GPUs or non-standard Linux distros.
* **Limited support for consumer hardware**: Most students and labs can't afford data center cards, but ROCm's support for affordable Radeon GPUs is inconsistent and often unofficial.
* **Driver and stack instability**: Frequent crashes, performance regressions, and version mismatches disrupt research workflows.
* **Porting pain**: Moving code from CUDA to ROCm is rarely automatic—manual intervention is almost always required, and some features simply don't exist.
* **Documentation gaps**: Official docs are broad but lack depth for advanced or non-standard use cases, forcing researchers to rely on scattered community advice.

> "For most models, worse accuracy quality is observed on AMD compared to NVIDIA, with 25% of tested models failing accuracy tests on AMD."  
> — [TechPowerUp, "AMD's Pain Point is ROCm Software, NVIDIA's CUDA Software is Still Superior for AI Development"](https://www.techpowerup.com/330155/amds-pain-point-is-rocm-software-nvidias-cuda-software-is-still-superior-for-ai-development-report)

---

## Real-World Researcher Experiences: Evidence from the Field

Our [sentiment report](../reports/gemini/AMDGPUResearchSentimentReport.html) documents the challenges and successes of researchers using AMD GPUs for scientific computing. Key findings include:

| Challenge/Experience                | Example/Impact                                                                 |
|-------------------------------------|-------------------------------------------------------------------------------|
| **Installation hell**               | "I have been trying for literally the last 12 hours to get this to work..."     |
| **Consumer GPU fragmentation**      | "It's almost impossible to experiment with it using simple, entry-level hardware." |
| **Driver instability**              | "amdgpu kernel driver crashes with standard workloads."                       |
| **Porting difficulties**            | "Transitioning from CUDA to ROCm... is not a straightforward task."             |
| **Documentation gaps**              | "Shortcomings encompass documentation, tooling, stability, compatibility, and correctness." |
| **Cloud/rental scarcity**           | "Nvidia always wins on performance per dollar for short-term rentals."         |
| **Positive: Exascale wins**         | AMD powers El Capitan, Frontier, LUMI, and other top supercomputers           |
| **Positive: Open-source ROCm**      | ROCm's open nature appeals to those who value transparency and flexibility     |

*For detailed case studies and technical breakdowns, see the [full report](../reports/gemini/AMDGPUResearchSentimentReport.html).*

---

## The Hidden Costs of AMD Adoption in Academia

While AMD hardware is attractive on paper, the **hidden costs** for researchers are substantial:

- **Lost research time** spent on debugging, workarounds, and manual code porting
- **Project delays** due to software bugs, missing features, and unreliable drivers
- **Increased IT burden** for institutional support staff
- **Limited access**: Students and early-career researchers are often locked out due to lack of consumer GPU support
- **Cloud rental gap**: Fewer, more expensive AMD GPU instances make "try before you buy" nearly impossible

> "Every student with a standard computer and an NVIDIA card can easily run their small projects—a level of accessibility often not matched by AMD." — [Reddit, r/ROCm: ROCm feedback for AMD](https://www.reddit.com/r/ROCm/comments/1i5aatx/rocm_feedback_for_amd/)

---

## Why Researchers Should Care

### This Is a Shared Scientific Interest

If you work in:

* **Computational science** (physics, chemistry, biology, climate, etc.)
* **AI/ML research** (deep learning, NLP, computer vision)
* **Open-source scientific software** (LAMMPS, GROMACS, PyTorch, JAX, etc.)
* **Academic IT or HPC administration**

Then you already rely on GPU compute—and probably wish you had more options.

Support for AMD software maturity is **not charity**. It's an investment in open science, reproducibility, and the ability to innovate without artificial barriers.

---

### Researcher Leadership—Shaping the Ecosystem Together

Researchers have a long history of shaping the tools and standards that underpin scientific progress. By organizing and advocating for better software, you help ensure that all hardware vendors are responsive to the needs of the research community.

The campaign calls for:

* A real software budget ($200M/year ring-fenced for GPU software)
* Long-term support for consumer and academic GPUs (not just data center cards)
* Transparent roadmaps, open CI/CD, and regular progress reports
* User-friendly installation and robust documentation for advanced use cases

These are standard, reasonable expectations for any company that aspires to be a foundational part of the scientific computing ecosystem.

---

### Why User-Driven Innovation Matters in Science

The most important advances in scientific computing often come from researchers themselves—not from hardware vendors. Scientists and students who rely on these platforms have the deepest insight into which features are missing, which bugs block real research, and what it takes to make science work in practice.

By organizing as stakeholders and setting public technical priorities, we're not just asking AMD to listen—we're creating a system where researcher-driven innovation is systematically captured and acted upon. This approach accelerates progress, ensures that real needs are addressed, and makes the ecosystem better for everyone, faster.

---

## What Researchers Should Demand from AMD

Based on the evidence, researchers should push for:

1. **Robust, reliable ROCm software**: Prioritize stability, bug fixes, and comprehensive feature support (not just hardware specs)
2. **Full support for consumer and Windows GPUs**: Out-of-the-box compatibility for all modern AMD GPUs, not just select models
3. **Transparent roadmaps and open CI/CD**: Public progress reports, open CI results, and clear timelines for feature parity
4. **Deeper integration with scientific frameworks**: Ensure PyTorch, TensorFlow, GROMACS, LAMMPS, and others work as well as on NVIDIA
5. **Investment in documentation and developer experience**: Easy installation, reliable profilers/debuggers, and responsive support
6. **Evidence of real change**: Track reductions in project abandonment, debugging time, and user complaints

---

## Ways to Support (Quiet or Loud)

| Action                                                    | Public?           | Impact                   | Minimum Investment |
| --------------------------------------------------------- | ----------------- | ------------------------ | ------------------ |
| Buy AMD shares and vote on the 2026 resolution            | Private           | Strategic leverage       | - |
| Help file the resolution (if eligible)                    | Optional          | Legitimizes campaign     | SEC eligibility    |
| Endorse open GPU ecosystems publicly                      | Public            | Builds momentum          | None               |
| Offer technical feedback or roadmap suggestions           | Private or public | Improves ROCm stack      | None               |
| Contribute to open-source ROCm support/documentation      | Public            | Directly helps community | Time/effort        |
| Collaborate on open standards and interop (SYCL, OpenXLA) | Public            | Long-term systemic shift | Development time   |

---

## The Leverage Is Real

Even a **10–20% shareholder vote** can trigger internal change at AMD. This isn't a petition—it's corporate governance. The 2026 shareholder meeting is the moment to act.

You don't need a majority stake. You need conviction, credibility, and coordination. UnlockGPU is organizing that—and inviting researchers who share the goal.

**Historical precedent:** Small, organized groups have changed the direction of major companies by combining technical credibility with strategic activism.

---

## What You Can Do Now

### Immediate Actions:
* **Contact us** at [team@unlockgpu.com](mailto:team@unlockgpu.com) to coordinate quietly or publicly
* **Buy AMD shares** to gain voting power
* **Review our technical priorities** in the [Developer Priorities Document](https://unlockgpu.com/priorities/)
* **Read the full AMD GPU Research Sentiment report**: [AMDGPUResearchSentimentReport.html](../reports/gemini/AMDGPUResearchSentimentReport.html)

### Strategic Engagement:
* **Endorse** the principles of open GPU compute—publicly or internally
* **Support dev priorities** through code contributions, bug reports, or roadmap feedback
* **Collaborate** on SYCL, OpenXLA, and other cross-vendor standards

### Timeline Awareness:
* **Q3 2025**: Resolution filing deadline
* **Q1 2026**: AMD annual shareholder meeting

---

**A healthier GPU ecosystem benefits all of science.**
NVIDIA's moat won't fall because of idealism. But it might fall because the research community gets organized.

👉 [Back to the Manifesto »](https://unlockgpu.com) 