# FAQ

## Table of Contents

### Strategy & Approach
- [What actual force do you have over AMD?](#actual-force)
- [Why not target NVIDIA directly?](#why-amd)  
- [Doesn't AMD already know all of this?](#amd-knows)
- [Why shareholder activism instead of working with AMD directly?](#why-shareholder-activism)
- [What happens if AMD ignores the shareholder resolution?](#if-ignored)

### Technical Context
- [What specific technical problems need to be fixed?](#technical-problems)
- [How is AMD's ROCm different from CUDA?](#rocm-vs-cuda)
- [What would success look like for developers?](#success-metrics)

### Participation & Getting Involved
- [How can I help if I'm not a developer or investor?](#how-to-help)
- [Do I need to buy AMD stock to participate?](#need-stock)
- [What's the timeline for this campaign?](#timeline)
- [How will I know if this campaign is making progress?](#tracking-progress)

### About the Campaign
- [How is this different from online petitions?](#vs-petitions)
- [Who is behind this campaign?](#who-behind)

---

## Strategy & Approach

<a id="actual-force"></a>
## Q: What actual force do you have over AMD? How can a few people change a billion-dollar company?

**A:**

We're not just making noise—we're using formal shareholder activism, which is fundamentally different from internet petitions.

**The barrier is surprisingly low:** Anyone owning just $2,000 of AMD stock for one year can file a shareholder resolution. We already meet these requirements.

**Why resolutions matter:** Unlike petitions, shareholder resolutions are formal corporate governance that:
- Get mandatory inclusion in proxy statements sent to all shareholders
- Require board response and public disclosure
- Generate media coverage because they're real corporate actions, not just online campaigns
- Even minority votes of 10-20% create significant pressure and force management attention

**Real precedent:** Engine No. 1 successfully changed ExxonMobil's board with only 0.02% ownership by combining technical credibility with strategic activism.

Our unique advantage is combining developer expertise with investor pressure—making our demands technically credible and financially legitimate.

For detailed explanation of our shareholder activism strategy, see [Shareholder Activism: How You Can Force Real Change](Activism.md).

<a id="why-amd"></a>

## Q: Why not target NVIDIA directly? Isn't NVIDIA the real problem? Why focus on AMD when they already support open source?

**A:**

NVIDIA's CUDA monopoly is the core problem—it creates vendor lock-in, inflates prices, and blocks open AI/scientific computing. We absolutely want open GPU computing free from single-vendor control.

However, NVIDIA only responds to real competition, not public pressure. Years of calls to "open up CUDA" have been ignored because their monopoly works and their platform "just works."

AMD is the only realistic challenger with both the hardware and open-source commitment. But AMD's current "openness" isn't enough:

- Software experience (drivers, libraries, ease of use) lags far behind NVIDIA
- Developers face broken workflows, missing features, and limited support
- Community verdict: "Open source" is just marketing unless tools actually work

### Why focus on AMD?

NVIDIA's monopoly will only break when a credible, open alternative exists. The fastest path is pushing AMD to deliver on their potential—fixing software, expanding support, and earning developer trust.

Our campaign demands execution, not promises. We're pushing AMD to be truly competitive, not just "open."

### If AMD delivers, everyone wins:

- Prices drop and the "CUDA tax" disappears
- Open science and AI become accessible to more people
- NVIDIA is forced to compete or open up

### Bottom line:

AMD is the only company with a realistic path to break NVIDIA's monopoly—but only if they fix what's broken. When AMD wins, we all win.

<a id="amd-knows"></a>
## Q: Doesn't AMD already know all of this? Why should an external campaign be necessary?

**A:**

It's true—AMD's leadership understands the CUDA monopoly, the market opportunity, and the need for a competitive open-source software stack. They talk about it in interviews, investor calls, and press releases. They know what needs fixing.

So why is outside pressure still needed?

**Knowing ≠ Doing.** Big organizations often struggle to turn knowledge into action. AMD has known about these problems for years—but progress has been slow and inconsistent.

**Credibility Gap.** Developers and investors have been burned by broken promises and missed timelines. There's a lack of trust that AMD will deliver without public accountability.

**Internal Pressures.** Like any large company, AMD has shifting priorities, competing departments, and budget constraints. It's easy for crucial software work to be delayed or cut—unless there's a strong outside signal that the world is watching.

**Independent Oversight Creates Results.** Think of credit rating agencies: every company knows it should manage its debt, but ratings still matter—because external scrutiny affects access to capital, board decisions, and even executive compensation. The same is true for open software at AMD: public, independent evaluation makes it a top priority, not just an internal talking point.

**Proven Track Record.** In tech, real change—open drivers, better standards, security audits—almost always follows sustained, external, community or investor pressure. It's rarely just the result of internal insight.

**In short:**
We're not here to "educate" AMD. We're here to create the public, independent accountability that finally moves the needle. Even when management knows the right answer, external pressure and oversight are what turn promises into progress.

<a id="why-shareholder-activism"></a>
## Q: Why shareholder activism instead of working with AMD directly?

**A:**

While traditional approaches like developer feedback and community forums continue to be valuable, we're excited to try something new: formal shareholder activism.

**Why this is a novel approach for GPU computing:**
- Developer advocacy has typically been limited to forums, GitHub issues, and informal feedback
- Open source communities rarely leverage financial ownership for technical improvements
- No major GPU software campaign has combined developer expertise with investor pressure
- This bridges the gap between technical credibility and corporate governance power

**This approach offers unique opportunities:**
- Creates legal obligations (resolutions must be included in proxy statements)
- Forces board-level attention (can't be delegated to lower-level managers)
- Generates public accountability (voting results become public record)
- Provides ongoing leverage (annual meetings create recurring pressure)

**We're not replacing collaboration**—we're adding a powerful new tool. The goal is to complement existing efforts with formal accountability mechanisms that can amplify our voice.

Think of it as "trust but verify" for corporate commitments—something worth trying in the GPU computing space.

<a id="if-ignored"></a>
## Q: What happens if AMD ignores the shareholder resolution?

**A:**

Even if AMD's management opposes our resolution, the process itself creates multiple pressure points:

**Immediate Impact:**
- Resolution gets included in proxy materials sent to all shareholders
- AMD must provide an official response explaining their position
- Media coverage highlights the issues and AMD's response
- Analysts and institutional investors pay attention

**Ongoing Pressure:**
- We can file similar resolutions annually until issues are addressed
- Voting results become public benchmarks of shareholder sentiment
- Poor responses damage AMD's credibility with developers and investors
- Success builds momentum for future campaigns

**Historical Pattern:**
Most successful shareholder campaigns don't win on the first vote—they build pressure over time. Engine No. 1 spent months building their case before their ExxonMobil victory.

Even "losing" votes of 10-20% often trigger management action because they signal serious problems that can't be ignored.

---

## Technical Context

<a id="technical-problems"></a>
## Q: What specific technical problems need to be fixed?

**A:**

Based on our research of internet forums and developer discussions, we've identified problems that fall into several key categories. This represents what we've discovered *so far*—we expect to uncover additional issues as we gather direct community feedback:

**1. Driver Stability & Installation**
- Frequent black screens, timeouts, and crashes on Windows
- Fragile installation process that breaks with Windows updates
- Poor compatibility with multi-monitor setups and third-party tools

**2. Limited Hardware Support**
- ROCm only supports "blessed" GPUs, often dropping consumer cards
- Missing support for widely-available RX 6000/7000 series
- Short support lifecycles compared to NVIDIA

**3. Software Ecosystem Gaps**
- Missing Windows support for ROCm (ML development mostly happens on Windows)
- Incomplete library support (FlashAttention, LoRA, many JAX features)
- Poor compatibility with popular ML frameworks out of the box

**4. Documentation & Tooling**
- Unclear documentation compared to CUDA
- Missing beginner-friendly tutorials and migration guides
- Limited debugging and profiling tools

**5. Developer Trust**
- Years of broken promises have created skepticism
- Poor communication about roadmaps and deprecation plans
- Lack of transparent progress reporting

For detailed technical priorities, see our [Developer Priorities Document](Priorities.md).

<a id="rocm-vs-cuda"></a>
## Q: How is AMD's ROCm different from CUDA, and why does it matter?

**A:**

**ROCm (AMD's platform):**
- Open source and vendor-neutral
- Supports HIP (similar to CUDA) and other standards
- Works on AMD GPUs and aims for broader hardware support
- Smaller ecosystem with gaps in libraries and tools

**CUDA (NVIDIA's platform):**
- Proprietary and NVIDIA-only
- Mature ecosystem with extensive libraries and tools
- "Just works" experience that developers trust
- Creates vendor lock-in—code written for CUDA only runs on NVIDIA

**Why this matters:**
NVIDIA's monopoly allows them to charge premium prices (the "NVIDIA tax") and control the direction of AI/scientific computing. A competitive, open alternative would:
- Drive down GPU prices through competition
- Prevent vendor lock-in for researchers and companies
- Enable innovation that isn't controlled by a single company
- Make AI and scientific computing more accessible

The technical capabilities exist—AMD's hardware is competitive. The missing piece is the software ecosystem and developer trust that makes ROCm a viable alternative to CUDA.

<a id="success-metrics"></a>
## Q: What would success look like from a developer perspective?

**A:**

At this early stage, we're focused on identifying and prioritizing the most critical issues. As the campaign develops and we gather more community input, we'll establish specific success metrics.

**Initial goals include:**
- Getting AMD to acknowledge and prioritize the technical issues we've identified
- Creating a transparent roadmap for addressing developer pain points
- Establishing regular communication channels between AMD and the developer community

**Broader vision:**
We want to break open the GPU computing market so developers have genuine choices based on technical merit, not vendor lock-in. Currently, NVIDIA's monopoly forces developers to accept their terms regardless of cost or technical fit.

Beyond AMD, we welcome other GPU developers to contribute their own open source drivers and frameworks. While ROCm is AMD-focused, the broader goal is fostering an open GPU computing ecosystem where multiple vendors can compete on merit rather than proprietary lock-in.

---

## Participation & Getting Involved

<a id="how-to-help"></a>
## Q: How can I help if I'm not a developer or investor?

**A:**

There are many ways to contribute:

**Spread Awareness:**
- Share the campaign on social media (#UnlockGPU)
- Discuss with friends in tech, finance, or academia
- Write about the issues on your blog or LinkedIn

**Provide Use Cases:**
- Share stories about GPU computing challenges you've faced
- Explain how vendor lock-in affects your work or studies
- Help document real-world impacts of the current situation

**Join the Community:**
- Follow project updates and vote on priorities
- Participate in discussions about campaign strategy
- Connect us with relevant experts or organizations

**Financial Support:**
- Consider buying AMD stock (even small amounts help)
- Support organizations working on open standards
- Donate to open source GPU computing projects

Every voice matters—this campaign's strength comes from broad, diverse support across the tech community.

<a id="need-stock"></a>
## Q: Do I need to buy AMD stock to participate?

**A:**

**No, stock ownership isn't required to participate** in most aspects of the campaign. You can contribute by spreading awareness, providing technical feedback, and supporting the community.

**However, owning AMD stock does provide additional leverage:**
- You can vote on shareholder resolutions
- Your voice carries weight as an actual owner
- It aligns your financial interests with the campaign's success

**Alternative approaches:**
- Many institutional investors (pension funds, ETFs) hold AMD stock on your behalf
- You can influence their voting through shareholder advocacy organizations
- Focus on technical contributions and community building

Stock ownership amplifies your voice, but the campaign's success depends on broad participation from the entire tech community.

<a id="timeline"></a>
## Q: What's the timeline for this campaign?

**A:**

To be formulated.

**Key milestone:** AMD's annual shareholder meeting in May 2026 will be the focal point for formal resolutions, but campaign activities happen year-round.

<a id="tracking-progress"></a>
## Q: How will I know if this campaign is making progress?

**A:**

To be formulated.

---

## About the Campaign

<a id="vs-petitions"></a>
## Q: How is this different from online petitions?

**A:**

**Online petitions:**
- Informal requests with no legal status
- Easy to ignore with no consequences
- Often lack specific, actionable demands
- Generate temporary attention but rarely lasting change

**Shareholder activism:**
- Legally binding process with SEC oversight
- Creates formal obligations for corporate response
- Forces board-level attention and public disclosure
- Provides ongoing leverage through annual meetings
- Combines financial pressure with technical credibility

**Our unique approach:**
- Developer expertise makes demands technically credible
- Investor participation provides financial leverage
- Public campaign builds media pressure and accountability
- Specific, measurable demands with clear success criteria

This isn't just asking politely—it's using the formal mechanisms of corporate governance to create real pressure for change.

<a id="who-behind"></a>
## Q: Who is behind this campaign?

**A:**

To be honest so far it is just me - Zbigniew Łukasiak [my AI related blog](https://zzbbyy.substack.com/), 
plus a friend who holds AMD shares for over a year and who promiste do file the shareholder resolution (I hold them too but not long enough).

I am looking for allies.

