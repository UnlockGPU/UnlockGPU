
# UnlockGPU: Developer Priorities Document

*This is a living document that captures the key technical priorities, pain points, and expectations from the developer community for AMD’s GPU software stack (ROCm, HIP, drivers, libraries, tooling). It complements the [Unlock the GPU Manifesto](https://unlockgpu.com/) by grounding its demands in concrete, evolving needs. PRs and issue reports welcome.*

---

## 1. **Supported Hardware: Stability, Breadth, and Predictability**

**Problem:**  
ROCm historically supports a limited set of “blessed” GPUs, often dropping older or consumer-tier cards prematurely. On the consumer side, persistent instability and fragile support ecosystems undermine trust, even with the latest hardware. Instability in the Adrenalin driver suite continues to be a pain point, with users reporting black screens, timeouts, and performance drops even on recent cards ([Ongoing Struggles](https://community.amd.com/t5/pc-drivers-software/the-ongoing-struggles-with-amd-drivers/td-p/695257)).

**Priorities:**
- Ensure ROCm and driver support cover **widely available consumer GPUs** (e.g., RX 6000/7000 series) and latest APUs, not just data center SKUs.
- **Support lifecycles** of at least 5 years for compute-enabled GPUs; avoid “silent” removals in point releases.
- **Address driver stability as a top strategic priority**: invest in automated, diverse regression testing across a broad matrix of hardware/software configs.
- Publish **clear support/deprecation roadmaps** for all drivers (consumer and enterprise).
- Expand open-source contributions and collaboration (learn from Linux/Mesa success: [Linux open source vs proprietary drivers](https://www.reddit.com/r/linux_gaming/comments/149eksh/open_source_vs_proprietary_amd_drivers/)).

**Why this matters:**  
Grassroots developers and gamers are the foundation of community knowledge and advocacy. Instability or early deprecation erodes trust, impacting both consumer and enterprise adoption.

---

## 2. **Installation, Ecosystem Robustness, and Self-Healing**

**Problem:**  
ROCm setup is fragile; driver install/updates on Windows often cause conflicts (e.g., Windows Update overwriting AMD drivers, [PA-300 error](https://www.reddit.com/r/ZephyrusG14/comments/r6m4io/how_to_fix_amd_radeon_software_not_compatible/)). Ecosystem conflicts (third-party tools, peripherals, multi-monitor setups) expose brittle code paths.

**Priorities:**
- Provide **well-maintained containers** for major frameworks (PyTorch, TensorFlow, etc.).
- Ship robust, user-friendly install managers (e.g., [AMD Install Manager](https://www.amd.com/en/products/software/adrenalin.html)) with self-healing/diagnostic features that proactively detect conflicts and guide users.
- Support **LTS Linux distributions on release day**, and **official Windows support** (see section 3).
- Prioritize “it just works” experiences (see [Mesa/Linux success](https://forum.manjaro.org/t/should-i-install-the-amdgpu-pro-or-open-source-driver-or-should-i-stay-on-the-video-linux-driver/133823)).
- Collect anonymous telemetry (opt-in) to spot and fix common edge cases quickly.

**Why this matters:**  
First impressions matter. “NVIDIA just works” is the benchmark. If users feel anxiety or dread about AMD driver updates, adoption stalls.

---

## 3. **Windows and Multi-Platform Support**

**Problem:**  
ROCm for Windows is missing or experimental; driver quality is inconsistent. Lack of robust support blocks a huge share of developers and data scientists ([Reddit: Are AMD Drivers Still Bad?](https://pcpartpicker.com/forums/topic/428390-are-amd-drivers-still-bad)).

**Priorities:**
- Ship official ROCm for Windows with a **clear, public roadmap and staged milestones**.
- Support popular ML workloads (PyTorch, etc.) on Windows and WSL2.
- Ensure the driver stack is **robust to ecosystem variance** (BIOS, peripherals, third-party tools).

**Why this matters:**  
Most developers use Windows. Without reliable support, the default is always CUDA/NVIDIA.

---

## 4. **Library and Ecosystem Parity**

**Problem:**  
Even when base frameworks run, ROCm lacks the ecosystem depth and compatibility of CUDA. Many ML libraries and new kernels (FlashAttention, LoRA, JAX, etc.) don’t work out of the box ([HPCwire: ROCm libraries](https://www.hpcwire.com/off-the-wire/amd-expands-rocm-6-3-with-optimized-libraries-for-ai-and-hpc-workflows/)).

**Priorities:**
- **Invest in ROCm-native or compatible versions** of high-demand libraries and kernels.
- Prioritize **fixing/re-architecting bottleneck libraries** (e.g., [RCCL bottleneck](https://semianalysis.com/2025/06/13/amd-advancing-ai-mi350x-and-mi400-ualoe72-mi500-ual256/)).
- Support and promote AiTer, MIOpen, MIGraphX.
- Contribute upstream to PyTorch, Triton, Hugging Face, and more.

**Why this matters:**  
The AI/ML world moves fast. If ROCm isn’t compatible with next month’s breakthrough, users switch back to CUDA ([Reddit: ROCm 7 roadmap](https://www.reddit.com/r/ROCm/comments/1l00mis/amd_rocm_70_to_align_hip_c_even_more_closely_with/)).

---

## 5. **Documentation, Tooling, and Developer Onboarding**

**Problem:**  
Poor documentation and tooling are major blockers. Developers cite unclear docs, lack of tutorials, and missing beginner resources ([ROCprofiler SDK](https://rocm.blogs.amd.com/software-tools-optimization/rocprofiler-sdk/README.html)).

**Priorities:**
- Ship **clear, complete documentation** (parity with CUDA docs; migration guides, FAQs, troubleshooting trees).
- Invest in robust, intuitive profiling/debugging tools (ROCprofiler SDK and beyond).
- Ship a **beginner-friendly ROCm Starter Kit** (scripts, demos, step-by-step guides).
- Highlight and fund community tutorials, guides, and OSS contributions.
- Integrate smarter diagnostics and self-healing into Adrenalin/ROCm.

**Why this matters:**  
No one wants to be an unpaid beta tester or spend hours troubleshooting for basic workflows. Smooth onboarding and powerful tools build confidence and evangelism.

---

## 6. **Transparency, Communication, and Trust Repair**

**Problem:**  
Developers feel burned by unclear communication, shifting support, and lack of follow-up ([Ongoing Struggles](https://community.amd.com/t5/pc-drivers-software/the-ongoing-struggles-with-amd-drivers/td-p/695257)).

**Priorities:**
- Maintain a **public developer roadmap** and “known issues” tracker.
- Publish changelogs with impact statements (including support drops/adds).
- Host regular community updates (livestreams, Q&A, GitHub AMAs).
- Fund bug bounties and OSS contributions.

**Why this matters:**  
Transparency and consistency matter as much as technical progress. Trust is built with every honest release and update.

---

## 7. **Strategic Interoperability and Open Standards**

**Problem:**  
Fragmentation across CUDA, HIP, SYCL, OpenCL, Vulkan slows adoption and fragments effort ([HN: Cross-vendor vision](https://news.ycombinator.com/item?id=43292750), [HN: SYCL discussion](https://news.ycombinator.com/item?id=32916545)).

**Priorities:**
- **Invest in SYCL and oneAPI interoperability** (via hipSYCL, etc.).
- Contribute to LLVM, OpenXLA, and other open ML infrastructure.
- Make ROCm a *best-in-class backend* for standardized, cross-platform ML stacks.
- Collaborate with Intel and others for a unified open alternative to CUDA.

**Why this matters:**  
Open standards are the way out of single-vendor lock-in. AMD’s future is to be the best option in a connected ecosystem—not just the “second” or cheapest.

---

*Maintained by the UnlockGPU community. The next 18–24 months are critical: AMD’s dual-front war for developer trust and software maturity will shape the future of open GPU computing.*

---

## Changelog

- **2025-06:** Major revision; all sources now public and directly linked to original forums, documentation, or news coverage.

---

### **References & Further Reading**

- Linux open-source vs. proprietary drivers: [Reddit Linux Gaming](https://www.reddit.com/r/linux_gaming/comments/149eksh/open_source_vs_proprietary_amd_drivers/), [ArchWiki: AMDGPU_PRO](https://wiki.archlinux.org/title/AMDGPU_PRO)
- Driver stability, user struggles: [Reddit: r/buildapc](https://www.reddit.com/r/buildapc/comments/1d78n4i/how_are_amd_gpu_driversstability_these_days/), [AMD Community: Ongoing Struggles](https://community.amd.com/t5/pc-drivers-software/the-ongoing-struggles-with-amd-drivers/td-p/695257), [PCPartPicker forum](https://pcpartpicker.com/forums/topic/428390-are-amd-drivers-still-bad)
- Installation challenges: [AMD Adrenalin](https://www.amd.com/en/products/software/adrenalin.html)
- Diagnostic tooling & ROCprofiler: [ROCprofiler SDK](https://rocm.blogs.amd.com/software-tools-optimization/rocprofiler-sdk/README.html)
- Ecosystem & library support: [HPCWire: ROCm 6.3 improvements](https://www.hpcwire.com/off-the-wire/amd-expands-rocm-6-3-with-optimized-libraries-for-ai-and-hpc-workflows/), [SemiAnalysis: AMD AI platform bottlenecks](https://semianalysis.com/2025/06/13/amd-advancing-ai-mi350x-and-mi400-ualoe72-mi500-ual256/)
- Open standards/interoperability: [HN: Cross-vendor vision](https://news.ycombinator.com/item?id=43292750), [HN: SYCL and cross-vendor discussion](https://news.ycombinator.com/item?id=32916545)
- Official docs and troubleshooting: [AMD Troubleshooting Guide](https://www.amd.com/en/resources/support-articles/faqs/PIBRMATS2.html), [Zephyrus G14 driver fix](https://www.reddit.com/r/ZephyrusG14/comments/r6m4io/how_to_fix_amd_radeon_software_not_compatible/)
- ROCm feature plans: [Reddit: ROCm 7.0 C++ roadmap](https://www.reddit.com/r/ROCm/comments/1l00mis/amd_rocm_70_to_align_hip_c_even_more_closely_with/), [AMD blog: Unlocking new AI horizons](https://www.amd.com/en/blogs/2024/unlocking-new-horizons-in-ai-and-hpc-with-the-rele.html)

---

**Feedback, pull requests, and real-world stories welcome.**
