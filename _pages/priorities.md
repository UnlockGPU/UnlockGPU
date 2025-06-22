---
layout: page
title: "Developer Priorities - Technical Requirements"
permalink: /priorities/
---

# UnlockGPU: Developer Priorities Document

*This is a living document that captures the key technical priorities, pain points, and expectations from the developer community for AMD's GPU software stack (ROCm, HIP, drivers, libraries, tooling). It complements the [Unlock the GPU Manifesto](https://unlockgpu.com/) by grounding its demands in concrete, evolving needs. PRs and issue reports welcome.*

**Current Crisis:** Developer sentiment has reached a breaking point, with ROCm earning the community nickname ["the Dark Souls of machine learning"](https://linustechtips.com/topic/1603733-rocm-is-the-dark-souls-of-machine-learning/) and [25% of AI models failing accuracy tests on AMD hardware](https://semianalysis.com/2025/05/23/amd-vs-nvidia-inference-benchmark-who-wins-performance-cost-per-million-tokens/). Despite [AMD powering 34% of Top500 supercomputers](https://www.amd.com/en/blogs/2025/amd-maintains-global-supercomputing-leadership.html), consumer and developer adoption remains stalled by fundamental software ecosystem failures.

---

## 1. **Supported Hardware: Stability, Breadth, and Predictability**

**Problem:**  
ROCm historically supports a limited set of "blessed" GPUs, often dropping older or consumer-tier cards prematurely. Critical features like vLLM FP8 and bitsandbytes quantization are non-functional on RDNA3, with upcoming ROCm versions showing no explicit support for gaming GPUs. On Linux, users report persistent ["random ring gfx_0.0.0 timeout" errors](https://www.reddit.com/r/linux_gaming/comments/1jtzj33/what_has_happened_to_amd_graphics_drivers/) and system hangs. On Windows, [RX 7000 series users face crashes with specific Adrenalin versions deemed "BROKEN,"](https://www.reddit.com/r/AMDHelp/comments/1kxfns9/possible_solution_for_amd_7000_series_gpu_driver/) forcing reliance on community tools like "Radeon Software Slimmer."

**Priorities:**
- **Guarantee consumer GPU support**: Ensure ROCm and driver support cover all consumer GPUs from RX 6000 series onward, including upcoming RDNA4 architecture.
- **Fix critical missing features**: Implement Flash Attention 2, vLLM FP8, and bitsandbytes quantization support for RDNA3 and future architectures within 12 months.
- **Support lifecycles** of at least 5 years for compute-enabled GPUs; avoid "silent" removals in point releases.
- **Address driver stability crisis**: Eliminate "random ring gfx_0.0.0 timeout" errors through comprehensive kernel driver overhaul and automated regression testing.
- **Fix Adrenalin reliability**: Address persistent bugs including settings not saving, black screens, and system instability.
- Publish **clear support/deprecation roadmaps** for all drivers (consumer and enterprise).
- Expand open-source contributions and collaboration (learn from Linux/Mesa success).

**Why this matters:**  
Consumer GPU abandonment creates "unfulfilled potential" for competitively priced hardware and drives developers to NVIDIA. Without grassroots adoption, enterprise success becomes unsustainable.

---

## 2. **Installation, Ecosystem Robustness, and Self-Healing**

**Problem:**  
[ROCm installation is a major barrier, often failing on specific Linux kernels and requiring complex workarounds](https://github.com/ROCm/ROCm/issues/4671). [Windows users resort to WSL2, described as a "nightmare" involving multiple rebuilds and manual system cleaning](https://linustechtips.com/topic/1603733-rocm-is-the-dark-souls-of-machine-learning/). Even successful installations frequently break with system updates or driver changes.

**Priorities:**
- **Deliver on ROCm 7.0 promises**: Implement truly "seamless installation" across all supported platforms with robust error recovery.
- **Fix Windows WSL2 nightmare**: Provide stable, well-documented Windows installation that doesn't require extensive system cleaning and rebuilds.
- **Package manager compatibility**: Support installation through standard package managers (apt, yum, conda, pip) without breaking existing system configurations.
- Provide **well-maintained containers** for major frameworks (PyTorch, TensorFlow, etc.) that actually work out-of-the-box.
- Ship robust, user-friendly install managers with self-healing/diagnostic features that proactively detect conflicts and guide users.
- Support **LTS Linux distributions on release day**, and **official Windows support**.
- Collect anonymous telemetry (opt-in) to identify and fix common installation failures quickly.

**Why this matters:**  
First impressions matter. Installation failures create immediate trust erosion and drive developers away before they can evaluate AMD's hardware capabilities.

---

## 3. **Windows and Multi-Platform Support**

**Problem:**  
ROCm for Windows remains experimental at best, forcing developers into complex WSL2 setups. Driver quality on Windows is inconsistent, with frequent crashes and compatibility issues blocking widespread adoption among developers and data scientists.

**Priorities:**
- Ship **official, stable ROCm for Windows** with feature parity to Linux within 18 months.
- **Eliminate WSL2 installation complexity**: Make Windows setup as simple as CUDA Toolkit installation.
- Support popular ML workloads (PyTorch, TensorFlow, etc.) natively on Windows without virtualization layers.
- Ensure the driver stack is **robust to ecosystem variance** (BIOS, peripherals, third-party tools).
- Provide Windows-specific debugging and profiling tools.

**Why this matters:**  
Most developers use Windows. Without reliable native support, CUDA remains the only viable option for Windows-based AI/ML development.

---

## 4. **Library and Ecosystem Parity**

**Problem:**  
ROCm suffers from critical "last mile" optimization gaps. Performance often lags NVIDIA significantly, with users reporting ["1/3 of the performance on a much faster card."](https://linustechtips.com/topic/1603733-rocm-is-the-dark-souls-of-machine-learning/) [Benchmarks show ROCm slower than Vulkan for LLMs and even slower than CPU for larger models that exceed VRAM](https://github.com/ROCm/ROCm/issues/4722). The accuracy crisis is severe: [25% of tested models fail accuracy tests on AMD GPUs](https://semianalysis.com/2025/05/23/amd-vs-nvidia-inference-benchmark-who-wins-performance-cost-per-million-tokens/), making production deployment risky.

**Priorities:**
- **Address accuracy crisis**: Implement comprehensive CI test coverage to eliminate the [25% model failure rate](https://semianalysis.com/2025/05/23/amd-vs-nvidia-inference-benchmark-who-wins-performance-cost-per-million-tokens/) within 12 months.
- **Performance parity**: Achieve performance within 10% of NVIDIA for major AI/ML workloads through optimized kernels and libraries.
- **Critical missing features**: Implement Flash Attention 2, vLLM FP8, and bitsandbytes quantization for consumer GPUs.
- **Invest in ROCm-native versions** of high-demand libraries and kernels popular in the community.
- Fix/re-architect bottleneck libraries (e.g., RCCL performance issues).
- Support and promote community forks and workarounds until official implementations are ready.
- Contribute upstream to PyTorch, Triton, Hugging Face, and other critical projects.

**Why this matters:**  
Performance gaps and accuracy failures make AMD unsuitable for production AI/ML workloads, regardless of hardware price advantages.

---

## 5. **Documentation, Tooling, and Developer Experience**

**Problem:**  
AMD development tools exist but are frequently unreliable. [GitHub issues report profilers failing to capture traces or detect applications](https://github.com/GPUOpen-Tools/radeon_gpu_profiler/issues), creating a "tooling paradox" where tools exist but don't work reliably. [Documentation lacks clarity for complex troubleshooting, contributing to the "Dark Souls" reputation](https://linustechtips.com/topic/1603733-rocm-is-the-dark-souls-of-machine-learning/).

**Priorities:**
- **Fix existing tools first**: Ensure ROCProfiler, Radeon Developer Tool Suite, and debugging tools actually work reliably before adding new features.
- **Comprehensive documentation overhaul**: Provide clear troubleshooting guides for common "Dark Souls" scenarios.
- Ship **clear, complete documentation** with migration guides, FAQs, and step-by-step troubleshooting trees.
- **Beginner-friendly onboarding**: Create ROCm Starter Kit with working examples that demonstrate actual functionality.
- Integrate smarter diagnostics and self-healing into tools to reduce manual troubleshooting burden.
- Fund community tutorials and guides that fill documentation gaps.

**Why this matters:**  
Unreliable tools and poor documentation create developer productivity barriers that no amount of hardware performance can overcome.

---

## 6. **Transparency, Communication, and Trust Repair**

**Problem:**  
Years of broken promises and inconsistent communication have created a severe credibility gap. Developers report feeling burned by unclear roadmaps, shifting support, and lack of follow-up on reported issues. Many GitHub issues remain "Under Investigation" indefinitely.

**Priorities:**
- **Public accountability**: Maintain real-time GitHub issue tracking with mandatory response times and resolution deadlines.
- **Binding roadmaps**: Publish quarterly roadmaps with specific feature delivery dates and public accountability for missed targets.
- **Regular community engagement**: Host monthly community calls with technical leadership to address concerns directly.
- **Transparent progress reporting**: Provide specific metrics on accuracy improvements, performance gains, and installation success rates.
- Fund bug bounties and community contributions with clear, public reward structures.

**Why this matters:**  
Trust rebuilding requires consistent, measurable progress with public accountability. Technical improvements mean nothing if developers don't believe AMD will deliver.

---

## 7. **Strategic Interoperability and Open Standards**

**Problem:**  
[AMD lacks a unified cross-architecture ISA like NVIDIA's PTX](https://news.ycombinator.com/item?id=43547309), making ROCm a "moving target" with frequent API changes and hardware deprecations. [HIP remains a "strong subset" of CUDA, lacking full parity for advanced features and comprehensive library ecosystem](https://news.ycombinator.com/item?id=43779953).

**Priorities:**
- **Develop unified ISA**: Create cross-architecture instruction set to reduce hardware fragmentation and improve long-term compatibility.
- **Achieve true CUDA parity**: Move beyond HIP being a "strong subset" to full feature compatibility including advanced CUDA features.
- **Invest in SYCL and oneAPI interoperability** for cross-vendor compatibility.
- Contribute to LLVM, OpenXLA, and other open ML infrastructure projects.
- Collaborate with Intel and others for unified open alternatives to CUDA.

**Why this matters:**  
Architectural fragmentation and incomplete CUDA compatibility create ongoing developer friction that reinforces NVIDIA's ecosystem advantage.

---

*Maintained by the UnlockGPU community. AMD's success in HPC demonstrates capability, but grassroots developer adoption remains critical for sustainable ecosystem growth. The next 18–24 months are crucial for rebuilding trust and technical credibility.*

---

## Changelog

- **2025-06:** Major revision incorporating community sentiment analysis and specific technical gap identification.
- **2025-06:** Added concrete statistics on model failure rates, performance gaps, and installation issues.

---

### **References & Further Reading**

- Comprehensive developer sentiment analysis: [AMD GPU Software Ecosystem Analysis 2024-2025](reports/gemini/SoftwareEcosystemAnalysis_condensed.html)
- Linux open-source vs. proprietary drivers: [Reddit Linux Gaming](https://www.reddit.com/r/linux_gaming/comments/149eksh/open_source_vs_proprietary_amd_drivers/), [ArchWiki: AMDGPU_PRO](https://wiki.archlinux.org/title/AMDGPU_PRO)
- Driver stability, user struggles: [Reddit: r/buildapc](https://www.reddit.com/r/buildapc/comments/1d78n4i/how_are_amd_gpu_driversstability_these_days/), [AMD Community: Ongoing Struggles](https://community.amd.com/t5/pc-drivers-software/the-ongoing-struggles-with-amd-drivers/td-p/695257), [PCPartPicker forum](https://pcpartpicker.com/forums/topic/428390-are-amd-drivers-still-bad)
- Installation challenges: [AMD Adrenalin](https://www.amd.com/en/products/software/adrenalin.html), [GitHub ROCm Issues](https://github.com/ROCm/ROCm/issues), [WSL2 Installation Issues](https://linustechtips.com/topic/1603733-rocm-is-the-dark-souls-of-machine-learning/), [ROCm Installation Failures](https://github.com/ROCm/ROCm/issues/4671)
- Diagnostic tooling & ROCprofiler: [ROCprofiler SDK](https://rocm.blogs.amd.com/software-tools-optimization/rocprofiler-sdk/README.html), [GitHub GPU Profiler Issues](https://github.com/GPUOpen-Tools/radeon_gpu_profiler/issues)
- Ecosystem & library support: [HPCWire: ROCm 6.3 improvements](https://www.hpcwire.com/off-the-wire/amd-expands-rocm-6-3-with-optimized-libraries-for-ai-and-hpc-workflows/), [SemiAnalysis: AMD AI platform bottlenecks](https://semianalysis.com/2025/06/13/amd-advancing-ai-mi350x-and-mi400-ualoe72-mi500-ual256/)
- Performance and accuracy analysis: [AMD vs NVIDIA Inference Benchmark](https://semianalysis.com/2025/05/23/amd-vs-nvidia-inference-benchmark-who-wins-performance-cost-per-million-tokens/)
- Consumer GPU support gaps: [Reddit: AMD GPU Support](https://www.reddit.com/r/hardware/comments/1i69glq/phoronix_amd_seeking_feedback_around_what_radeon/), [RX 7000 Series Driver Issues](https://www.reddit.com/r/AMDHelp/comments/1kxfns9/possible_solution_for_amd_7000_series_gpu_driver/)
- Open standards/interoperability: [HN: Cross-vendor vision](https://news.ycombinator.com/item?id=43292750), [HN: SYCL and cross-vendor discussion](https://news.ycombinator.com/item?id=32916545)
- Official docs and troubleshooting: [AMD Troubleshooting Guide](https://www.amd.com/en/resources/support-articles/faqs/PIBRMATS2.html), [Zephyrus G14 driver fix](https://www.reddit.com/r/ZephyrusG14/comments/r6m4io/how_to_fix_amd_radeon_software_not_compatible/)
- ROCm feature plans: [Reddit: ROCm 7.0 C++ roadmap](https://www.reddit.com/r/ROCm/comments/1l00mis/amd_rocm_70_to_align_hip_c_even_more_closely_with/), [AMD blog: Unlocking new AI horizons](https://www.amd.com/en/blogs/2024/unlocking-new-horizons-in-ai-and-hpc-with-the-rele.html)

---

**Feedback, pull requests, and real-world stories welcome. This document reflects the current developer community consensus on AMD GPU software priorities.**
