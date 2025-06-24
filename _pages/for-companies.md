---
layout: page
title: For Companies
permalink: /for-companies/
---

# Why Forward-Looking Companies Should Support the UnlockGPU Campaign

*UnlockGPU is not about interfering in AMD's business. It's about fixing a broken part of the ecosystem that affects all of us. Companies who care about the future of AI, open infrastructure, and developer autonomy have every reason to get involved.*

---

## The Problem: A Chokepoint in the Compute Stack

NVIDIA's dominance in GPU software—through CUDA—creates a bottleneck for innovation. It:

* Locks the entire AI ecosystem into one vendor
* Drives up costs ("NVIDIA tax")
* Forces everyone to adapt to a closed, proprietary stack

AMD has competitive hardware and claims open-source values. But after years of underinvestment in software, developers don't trust them. The ROCm stack has earned the community nickname ["the Dark Souls of machine learning"](https://linustechtips.com/topic/1603733-rocm-is-the-dark-souls-of-machine-learning/)—technically possible but brutally difficult. Everyone wants an alternative—but no one believes it's ready.

---

## The Business Risk: Production AI on Broken Software

This isn't just about developer preference—it's about business continuity:

* **25% of AI models fail accuracy tests** on AMD hardware, making production deployment risky
* **Critical features missing or underperforming**: Flash Attention 2, vLLM FP8 quantization non-functional or slow on consumer GPUs
* **Installation failures and driver instability** block teams from even evaluating AMD alternatives
* **Widespread reports of system crashes, debugging overhead, and user abandonment**

**The market impact:** AMD powers 34% of Top500 supercomputers but struggles with grassroots developer adoption—creating a dangerous ecosystem inversion where enterprise leads but innovation suffers.

---

## Real-World Company Experiences: Evidence from the Field

A recent [analytical report](../reports/gemini/AMDGPUAIMLCaseStudies.html) documents the challenges faced by companies and organizations using AMD GPUs for AI/ML workloads. Key findings include:

| Company/Org                | Use Case / Hardware         | Key Complaint / Impact                                                                 |
|----------------------------|----------------------------|---------------------------------------------------------------------------------------|
| **Microsoft Azure**        | GPT-4 inference / MI300X   | Achieved price-performance only with major internal engineering to overcome ROCm bugs  |
| **Meta (Facebook AI)**     | Llama 405B / MI300X, MI250 | Built custom AITemplate to abstract hardware due to native software limitations        |
| **TensorWave**             | AI training / MI325X       | Chose AMD for memory, but cited ROCm's lack of ubiquity and developer familiarity      |
| **Hugging Face (user)**    | LLM fine-tuning            | OOM errors, "garbled output" with multi-GPU, project delays                           |
| **Stability AI (users)**   | Stable Diffusion, LLMs     | Widespread instability, performance issues, user abandonment, "500% more debugging"    |
| **Tinygrad**               | AI hardware/software dev    | "Massive issue with AMD software in the past"                                         |
| **Academic clusters**      | OpenCL profiling           | Profiling tools crashed, project abandoned, switched to NVIDIA                        |
| **Framework Laptop (user)**| PyTorch on Radeon 890M     | ROCm did not support iGPU, forced to use third-party patches, misleading marketing     |
| **llama.cpp (user)**       | LLM inference / RX 7900 XTX| Flash Attention much slower than NVIDIA, user switched to used NVIDIA cards           |

*For detailed case studies and technical breakdowns, see the [full report](../reports/gemini/AMDGPUAIMLCaseStudies.html).* 

---

## The Hidden Costs of AMD Adoption

While AMD hardware can be attractive on paper, the **hidden costs** are substantial:

- **Extensive developer time** spent on debugging, workarounds, and manual code modifications
- **Project delays** due to software bugs, missing features, and unreliable drivers
- **Increased operational costs** from the need for specialized engineering talent
- **Frequent abandonment** of AMD hardware in favor of NVIDIA due to ecosystem gaps
- **Two-tiered market**: Only hyperscalers (Meta, Microsoft) can afford the internal investment to make AMD work; most companies cannot

> "The 'cheaper' hardware quickly becomes more expensive when you factor in lost productivity and engineering overhead." — [AMDGPUAIMLCaseStudies.html](../reports/gemini/AMDGPUAIMLCaseStudies.html)

---

## Why Companies Should Care

### This Is a Shared Strategic Interest

If you work in:

* **Cloud infrastructure** (e.g. AWS, Azure, Oracle)
* **AI model development** (e.g. Meta, OpenAI, Anthropic)
* **Open-source frameworks** (e.g. PyTorch, JAX, Triton, Hugging Face)
* **Enterprise tooling or platforms** (e.g. data science, CAD, medical imaging)

Then you already rely on GPU compute—and probably wish you had more options.

Support for AMD software maturity is **not charity**. It's an investment in reducing risk, lowering cost, and unlocking long-term optionality.

---

### Industry Leadership—Shaping the Ecosystem Together

Active participation in the GPU ecosystem is not interference—it's responsible industry leadership. Companies routinely invest in, collaborate with, and hold their suppliers and partners accountable to ensure a healthy, innovative, and resilient technology landscape. This is how progress happens in every critical sector.

Supporting the UnlockGPU campaign is about ensuring that all key players, including AMD, are responsive to the needs of the developer community and the broader ecosystem. It's a strategic move to secure the future of open, competitive, and developer-friendly AI infrastructure.

The campaign calls for:

* A real software budget ($200M/year ring-fenced for GPU software)
* Long-term consumer GPU support (5-year lifecycles, RDNA4 inclusion)
* Transparent roadmaps and developer input (binding quarterly progress reports)

These are standard, reasonable expectations for any company that aspires to be a foundational part of the AI and compute ecosystem. By advocating for them, you help create a more robust, innovative, and competitive environment that benefits everyone.

---

### Why User-Driven Innovation Matters

Research from MIT's Eric von Hippel shows that the most important innovations often come from users themselves—not from the companies that make the products. In the world of AI and GPU compute, developers and organizations who rely on these platforms have the deepest insight into which features are missing, which bugs block real projects, and what it takes to make AI work in production.

Developers and practitioners possess "sticky information"—firsthand knowledge about workflows that break, features that are truly needed, and the real-world impact of software gaps. This information is difficult for manufacturers to access through traditional channels.

For more, see von Hippel's book: [*Democratizing Innovation* (MIT Press, free PDF)](https://web.mit.edu/evhippel/www/democ1.htm)

By organizing as shareholders and setting public technical priorities, we're not just asking AMD to listen—we're creating a system where user-driven innovation is systematically captured and acted upon. This approach accelerates progress, ensures that real needs are addressed, and makes the ecosystem better for everyone, faster.

---

## What Companies Should Demand from AMD

Based on the evidence, companies should push for:

1. **Robust, reliable ROCm software**: Prioritize stability, bug fixes, and comprehensive feature support (not just hardware specs)
2. **Full support for consumer and Windows GPUs**: Out-of-the-box compatibility for all modern AMD GPUs, not just select models
3. **Transparent roadmaps and accountability**: Public progress reports, developer input, and clear timelines for feature parity
4. **Deeper integration with third-party frameworks**: Ensure PyTorch, TensorFlow, Hugging Face, and others work as well as on NVIDIA
5. **Investment in developer experience and tooling**: Easy installation, reliable profilers/debuggers, and responsive support
6. **Evidence of real change**: Track reductions in project abandonment, debugging time, and user complaints

---

## Ways to Support (Quiet or Loud)

| Action                                                    | Public?           | Impact                   | Minimum Investment |
| --------------------------------------------------------- | ----------------- | ------------------------ | ------------------ |
| Buy AMD shares and vote on the 2026 resolution            | Private           | Strategic leverage       | - |
| Help file the resolution (if eligible)                    | Optional          | Legitimizes campaign     | SEC eligibility    |
| Endorse open GPU ecosystems publicly                      | Public            | Builds momentum          | None               |
| Offer technical feedback or roadmap suggestions           | Private or public | Improves ROCm stack      | None               |
| Collaborate on open standards and interop (SYCL, OpenXLA) | Public            | Long-term systemic shift | Development time   |

---

## The Leverage Is Real

Even a **10–20% shareholder vote** can trigger internal change at AMD. This isn't a petition—it's corporate governance. The 2026 shareholder meeting is the moment to act.

You don't need a majority stake. You need conviction, credibility, and coordination. UnlockGPU is organizing that—and inviting strategic partners who share the goal.

**Historical precedent:** Engine No. 1 changed ExxonMobil's board with just 0.02% ownership by combining technical credibility with strategic activism.

---

## What You Can Do Now

### Immediate Actions:
* **Contact us** at [team@unlockgpu.com](mailto:team@unlockgpu.com) to coordinate quietly or publicly
* **Buy AMD shares** to gain voting power
* **Review our technical priorities** in the [Developer Priorities Document](https://unlockgpu.com/priorities/)
* **Read the full AMD GPU AI/ML Case Studies report**: [AMDGPUAIMLCaseStudies.html](../reports/gemini/AMDGPUAIMLCaseStudies.html)

### Strategic Engagement:
* **Endorse** the principles of open GPU compute—publicly or internally
* **Support dev priorities** through code contributions, bug reports, or roadmap feedback
* **Collaborate** on SYCL, OpenXLA, and other cross-vendor standards

### Timeline Awareness:
* **Q3 2025**: Resolution filing deadline
* **Q1 2026**: AMD annual shareholder meeting

---

**A healthier GPU ecosystem benefits everyone.**
NVIDIA's moat won't fall because of idealism. But it might fall because the rest of the industry gets organized.

👉 [Back to the Manifesto »](https://unlockgpu.com)
