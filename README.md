# UnlockGPU: Shareholder Activism for AMD's GPU Software Ecosystem

## Project Overview

UnlockGPU is a shareholder activism campaign focused on addressing AMD's GPU software ecosystem and credibility issues. Our mission is to drive meaningful change in AMD's approach to GPU software development through strategic shareholder engagement and community mobilization.

**Current Status**: Soft launch - The website is published and live but has not been announced publicly yet. This allows for final content refinements and testing before full campaign launch.

**Launch Date**: July 28, 2025

## Technical Setup

### Jekyll Site Structure

```
UnlockGPU/
├── _posts/              # Blog posts with dates (auto-generated URLs)
├── _pages/              # Static pages without dates (/about/, /faq/, /contact/)
├── signal-articles/     # Spreadable content (/signals/article-name/)
├── reports/             # Research & analysis (/reports/report-name/)
├── guides/              # How-to content (/guides/guide-name/)
├── _layouts/            # Template files for different content types
├── _includes/           # Reusable components (headers, footers, etc.)
├── assets/              # Images, CSS, JS, PDFs
├── data/                # Raw research data and source materials
└── _config.yml          # Jekyll configuration
```

### Directory Purposes

- **`_posts/`**: Date-based blog content with automatic RSS feeds and chronological listing
- **`_pages/`**: Static pages that don't change frequently (About, FAQ, Contact)
- **`signal-articles/`**: Spreadable advocacy content with custom permalinks optimized for sharing
- **`reports/`**: Professional research and analysis with clean URLs for media/investor reference
- **`guides/`**: Practical how-to content with SEO-friendly URLs
- **`data/`**: Raw source materials for transparency and fact-checking

### Technical Standards

- **URLs**: Clean structure (`/page-name/` not `/page-name.html`)
- **Permalinks**: Custom permalinks for signal articles to optimize sharing
- **Frontmatter**: Consistent across all pages for proper Jekyll processing
- **Mobile**: Responsive design and accessibility compliance
- **SEO**: Proper meta descriptions, titles, and header hierarchy

## File Organization

### Naming Conventions
- **Files**: Use kebab-case (`amd-credibility-crisis.md`, `shareholder-voting-guide.md`)
- **Images**: Descriptive names in `/assets/` (`amd-q4-2024-earnings-chart.png`)
- **Data files**: Clear provenance in `/data/` with source documentation

### Content Types
- **Signal Articles**: `/signal-articles/article-name.md`
- **Research Reports**: `/reports/report-name.md`
- **How-to Guides**: `/guides/guide-name.md`
- **Static Pages**: `/_pages/page-name.md`

## Git Workflow

### Branch Strategy
- **`main`**: Production-ready content
- **Feature branches**: For major content additions (`feature/amd-earnings-analysis`)
- **Content branches**: For ongoing research (`content/q4-analysis`)

### Commit Messages
Use clear, descriptive messages:
- `Add Q4 earnings analysis to AMD credibility page`
- `Update shareholder voting guide for 2025 proxy season`
- `Fix broken links in research methodology`

### Best Practices
- **Small commits**: Focused changes rather than large batches
- **Regular commits**: Don't let work sit uncommitted for days
- **Descriptive PRs**: Explain the purpose and impact of changes

## Quality Control

### Pre-Publishing Checklist

#### Content Quality
- [ ] **Fact-check**: All claims, statistics, and quotes verified
- [ ] **Sources**: Primary sources and high-quality research cited
- [ ] **Legal review**: SEC compliance and securities regulations followed
- [ ] **Grammar/style**: Thoroughly proofread
- [ ] **Tone**: Appropriate for content type and target audience

#### Technical Quality
- [ ] **Links**: All external and internal links tested
- [ ] **Mobile**: Content readable on all devices
- [ ] **SEO**: Title, description, headers optimized
- [ ] **Accessibility**: Alt text, heading structure, contrast checked
- [ ] **Performance**: Images optimized, page loads quickly

#### Strategic Alignment
- [ ] **Goals**: Content serves shareholder activism objectives
- [ ] **Audience**: Appropriate for target readers
- [ ] **Action**: Clear next steps for readers
- [ ] **Spreadability**: Content designed for sharing (if signal article)

## Content Strategy

### Content Types & Criteria

#### Signal Articles
**Purpose**: Shareable content that spreads through conscious audience choice
**Criteria**: Must meet both Spreadable Media and Made to Stick frameworks
**Location**: `/signal-articles/`

#### Research & Analysis
**Purpose**: Evidence-based foundation for activism arguments
**Criteria**: Academic-level sourcing, objective analysis, actionable insights
**Location**: `/reports/`

#### Guides
**Purpose**: Practical, actionable content for stakeholders
**Criteria**: Step-by-step instructions, clear outcomes, immediately useful
**Location**: `/guides/`

### Research Standards

#### Source Hierarchy
1. **Primary sources**: SEC filings, official documentation, direct quotes
2. **High-quality research**: Peer-reviewed studies, industry analysis, academic papers
3. **Multiple verification**: Cross-check facts across sources
4. **Date sensitivity**: Always note when data/information is current
5. **Transparency**: Disclose any potential conflicts of interest

## Success Metrics

### Content Performance
- **Engagement**: Shares, comments, time on page, social media metrics
- **Reach**: Unique visitors, referral sources, geographic distribution
- **Action**: Sign-ups, downloads, shareholder participation rates
- **Media pickup**: Coverage by financial and tech press

### Campaign Goals
- **Awareness**: Industry recognition of AMD software issues
- **Shareholder engagement**: Increased activism participation
- **Corporate response**: AMD acknowledgment and concrete action
- **Ecosystem improvement**: Measurable software quality improvements

### Key Performance Indicators
- Monthly unique visitors
- Social media engagement rates
- Media mention volume and sentiment
- Shareholder proxy participation
- Corporate governance responses

## Content Maintenance

### Regular Updates

#### Quarterly Reviews
- **Guides**: Review all how-to content for accuracy
- **Research**: Update data with latest available information
- **Links**: Check and fix broken external links
- **Strategy**: Assess campaign progress and adjust content focus

#### Event-Driven Updates
- **Earnings cycles**: Update financial data and analysis within 48 hours
- **Product releases**: Assess impact on arguments and strategy
- **News cycles**: Respond to relevant industry developments
- **Regulatory changes**: Update compliance and legal guidance

### Archive Strategy
- **Outdated content**: Keep with clear date warnings and links to updates
- **Historical record**: Maintain for campaign documentation and transparency
- **Version control**: Track significant changes to key documents
- **Legacy URLs**: Maintain redirects to avoid broken links

## Legal & Compliance

### Shareholder Activism Guidelines
- **SEC compliance**: Follow all disclosure requirements for activist investors
- **Factual accuracy**: No misleading or false statements about AMD or competitors
- **Good faith**: Activism must serve legitimate shareholder interests
- **Documentation**: Keep records of all research sources and communications

### Content Disclaimers
- **Forward-looking statements**: Include appropriate disclaimers
- **Financial interests**: Disclose any positions in AMD or competitor stocks
- **Opinion vs. fact**: Clearly distinguish analysis from factual claims
- **Investment advice**: Clarify that content is not personalized investment advice

## Development Setup

### Requirements
- Ruby 2.7+
- Jekyll 4.0+
- Bundler
- Git

### Local Development
```bash
# Clone repository
git clone [repository-url]
cd UnlockGPU

# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# Build for production
bundle exec jekyll build
```

### Deployment
The site auto-deploys to GitHub Pages from the `main` branch. Changes are live within minutes of merging.

## Contributing

### Content Contributors
1. **Research**: Follow research standards and cite all sources
2. **Writing**: Match tone to content type (see .cursorrules for AI guidance)
3. **Review**: All content must pass quality control checklist
4. **Legal**: Sensitive content requires legal review before publishing

### Technical Contributors
1. **Issues**: Use GitHub issues for bug reports and feature requests
2. **Pull requests**: Include clear description of changes and impact
3. **Testing**: Verify changes work across devices and browsers
4. **Documentation**: Update relevant docs with any structural changes

## Contact & Support

- **Project Lead**: [Contact information]
- **Technical Issues**: GitHub Issues
- **Legal Questions**: [Legal contact]
- **Media Inquiries**: [Media contact]

---

*Last updated: July 28, 2025* 