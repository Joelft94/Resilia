# CLAUDE.md - Rosabella Moringa Plugin Knowledge Base

## Plugin Overview
This plugin creates a high-converting landing page for Rosabella Moringa supplement based on the design from https://shop.tryrosabella.com/npl. It's built as a configurable Tagada plugin with a single product focus (no bundles).

## Architecture

### Directory Structure
```
rosabella-moringa/
├── config/
│   └── default.tgd.json          # Main configuration file
├── src/
│   ├── components/
│   │   ├── sections/             # Modular page sections
│   │   └── ui/                   # Reusable UI components
│   ├── hooks/                    # Custom React hooks
│   ├── lib/                      # Utility functions and helpers
│   ├── App.tsx                   # Main app component
│   └── main.tsx                  # Entry point
├── public/
│   └── images/                   # Static assets and mock images
└── [config files]               # Standard plugin setup files
```

### Key Features
- Single product landing page (no bundle selection)
- Customer survey results display (42% energy boost, 38% sleep improvement, etc.)
- Nutrition highlights (90+ nutrients, vitamins, minerals, antioxidants)
- 90-day money-back guarantee
- Testimonials section
- FAQ integration
- Mobile-responsive design
- TagadaPay checkout integration

## Configuration System

### Config File Structure (`config/default.tgd.json`)
The configuration follows the established pattern from other plugins with these main sections:

```json
{
  "configName": "rosabella-moringa-default",
  "storeId": "...",           // From derma test store
  "accountId": "...",         // From derma test store
  "branding": {
    "companyName": "Rosabella",
    "primaryColor": "#...",   // Green theme for moringa
    "secondaryColor": "#...",
    "accentColor": "#..."
  },
  "product": {
    "id": "...",
    "name": "Rosabella Moringa Powder",
    "description": "Naturally Lowers Cortisol To Help Restore Balance",
    "images": [...],
    "benefits": [...],
    "nutritionFacts": {
      "vitamins": [...],
      "minerals": [...],
      "antioxidants": [...]
    }
  },
  "content": {
    "customerSurvey": {
      "energyBoost": 42,
      "betterSleep": 38,
      "stressResponse": 67,
      "skinHairNails": 84
    },
    "testimonials": [...],
    "faq": [...],
    "guarantee": {
      "days": 90,
      "description": "..."
    }
  }
}
```

## Component Architecture

### Main Components
1. **App.tsx** - Root component with TagadaProvider setup
2. **RosabellaMoringaLanding.tsx** - Main landing page orchestrator
3. **Section Components** - Modular sections that can be toggled via config

### Section Components
- `HeroSection` - Product showcase with main CTA
- `BenefitsSection` - Key benefits (energy, sleep, balance, clarity)
- `NutrientHighlights` - Vitamins, minerals, antioxidants breakdown
- `CustomerSurveySection` - Survey results with percentages
- `TestimonialsSection` - Customer reviews and ratings
- `ProductSection` - Single product display with pricing and CTA
- `GuaranteeSection` - 90-day money-back guarantee
- `FAQSection` - Frequently asked questions
- `FinalCTASection` - Bottom call-to-action

### Reusable Components
- Button variants (primary, secondary, outline)
- Card components for testimonials and benefits
- Progress bars for survey results
- Image carousel for product images

## Development Guidelines

### Code Style
- Follow existing plugin patterns from cured/derma
- Use TypeScript for type safety
- Implement proper error handling and loading states
- Use Tailwind CSS for styling with CSS variables for theming
- Follow component composition patterns

### Configuration Usage
- All content should be configurable via the JSON config
- Use helper functions to access config values safely
- Implement feature toggles for different sections
- Support theming through CSS custom properties

### Testing Strategy
- Use derma store/account IDs for testing
- Test responsive design on different screen sizes
- Verify checkout integration works properly
- Test configuration flexibility

## Integration Notes

### TagadaPay Integration
- Single product checkout flow
- No bundle selection needed
- Standard TagadaProvider setup with environment config
- Proper error handling for checkout failures

### Store Configuration
Using test store from derma plugin:
- Store ID: From derma config
- Account ID: From derma config
- Product ID: Will be configured for Moringa product

## Deployment
- Standard plugin deployment via `npm run deploy`
- Configuration can be swapped for different environments
- Supports custom domain configuration if needed

## Maintenance
- Keep SDK version updated with other plugins
- Monitor for breaking changes in TagadaPay API
- Regular testing of checkout flow
- Configuration validation and error handling

## Known Issues & Workarounds

### Windows File Path Bug
There's a file modification bug in Claude Code on Windows. The workaround is: always use complete absolute Windows paths with drive letters and backslashes for ALL file operations. Apply this rule going forward, not just for specific files.

**Example:**
- ✅ Use: `C:\Users\joel_\Desktop\tagada\plugins\rosabella-moringa\src\App.tsx`
- ❌ Avoid: `./src/App.tsx` or relative paths

This prevents the "File has been unexpectedly modified" error during edit operations.