# Executive Summary — Travel Explorer

**Module:** WEB APPLICATION DEVELOPMENT  
**Student:** Rojbin Karakoc Celik 

## 1. Introduction

Travel Explorer is a responsive city-break guide developed as a four-page static web application covering six international destinations and their key attractions. Instead of maintaining a separate page for every destination, `city.html` reads a `?city=<slug>` URL parameter and renders the relevant city content dynamically. This executive summary critically evaluates the responsive design strategy, key implementation decisions, development tools, accessibility and usability measures, and the technical challenges and limitations identified during development.

## 2. Understanding of responsive design

I understand responsive web design as the creation of one interface that adapts to different viewport sizes, available space and user preferences rather than relying on separate mobile and desktop websites. Marcotte (2010) identifies fluid grids, flexible images and media queries as the core ingredients of responsive web design, and all three are used in Travel Explorer. The main container is fluid but constrained by a maximum width; images use `max-width: 100%`, `aspect-ratio` and `object-fit: cover`; and the layout changes through `min-width` media queries at `48em` and `64em`. The base design is single-column and mobile-first, with wider layouts progressively adding horizontal navigation and additional grid columns (Wroblewski, 2011). Fluid typography using `clamp()` also allows headings to scale between defined minimum and maximum sizes without requiring another breakpoint.

Figures 1–6 demonstrate these responsive changes across Home, Destinations and City. The breakpoints were chosen according to when content could comfortably support additional columns rather than according to named devices. This is more robust because screen sizes vary continuously and users may zoom or increase text size. Using `em` rather than fixed-pixel breakpoint values also means that layout thresholds can respond more naturally when the user changes browser text sizing. Responsive images reinforce the same principle: the layout does not simply shrink a desktop design, but allows the browser to choose an image resource appropriate to the rendered size. A limitation of the breakpoint approach is that changes still depend on viewport width rather than the size of an individual component; container queries could make reusable components more independent in a future version.

## 3. Key design decisions and why

A major design decision was to use Flexbox for one-dimensional structures such as the header, navigation and filters, while Grid manages two-dimensional card and hero layouts. This matches the intended W3C layout models and avoids forcing one technique onto every component (W3C, 2025a; W3C, 2025b).

For destination cards, I used explicit one-, two- and three-column stages rather than `repeat(auto-fit, minmax(...))`. Although `auto-fit` is more fluid, it can produce less predictable column counts and overly wide cards. The chosen approach trades some automatic flexibility for stronger visual control (Figures 3–4).

Destination information is centralised in `data.js`, while one reusable `city.html` renders all six cities. This reduces duplication and simplifies adding destinations, although city content then depends on JavaScript and is not fully progressively enhanced.

JavaScript is separated into ES modules for navigation, rendering, validation, storage, images and data, with `main.js` as the entry point. This improves separation of concerns and maintainability. Form validation uses the native Constraint Validation API rather than duplicated regex logic, while `localStorage` operations are wrapped safely and namespaced.

## 4. Tools and IDEs

The project uses static HTML, CSS and JavaScript without a framework or build step. Development therefore required a code editor, a local HTTP server and browser developer tools. A local server is important for testing ES modules rather than opening them through `file://` (MDN, 2026a). Responsive/device tools support the mobile/desktop comparisons in Figures 1–10. A specific IDE or automated audit should only be named if it was actually used.

## 5. Accessibility and usability

Accessibility is built into the interface. Each page uses semantic landmarks and a skip link so keyboard and screen-reader users can bypass repeated navigation. A global `:focus-visible` outline supports WCAG 2.2 Success Criterion 2.4.7 (W3C, 2024). The mobile menu uses `aria-expanded` and `aria-controls`; Escape closes it and returns focus to the trigger, following the WAI-ARIA disclosure pattern.

Figures 7–10 demonstrate responsive and accessible form handling. Inputs have explicit labels and HTML constraints. Invalid fields receive `aria-invalid="true"`, messages are announced through `aria-live="polite"`, and failed submission moves focus to the first invalid field. Figure 9 shows the desktop error state, supporting WCAG requirements for identifying and correcting errors.

Other usability measures include instant search, a favourites-only filter, breadcrumbs, dynamic page titles and a clear “City not found” state. Favourite buttons use `aria-pressed`, images have specific alternative text, card images are lazy-loaded, and motion respects `prefers-reduced-motion`. Colour contrast also supports WCAG readability requirements.

## 6. Challenges and how they were overcome

One challenge was ES module loading. Opening the project directly from the filesystem can prevent modules from loading correctly, so I used a local HTTP server and a visible JavaScript fallback state that disappears after `main.js` loads.

A second challenge was image weight. The project supplies approximately 800-pixel and 1600-pixel versions and uses `srcset` and `sizes` so the browser can select an appropriate resource (MDN, 2025b). 

A further challenge was keeping filter `<option>` values consistent with the `region` and `category` strings in the data; mismatches can fail silently. Centralising the data reduces this risk, although generating filter options directly would be more robust. Accessible validation also required visible messages, ARIA state and focus management rather than visual errors alone (Figure 9-10).

## 7. Limitations and conclusion

Overall, Travel Explorer applies responsive design consistently and combines content-based breakpoints with strong accessibility and usability practices. Its main limitations are JavaScript-dependent destination content, JPEG-only imagery and the absence of newer techniques such as container queries; these provide clear directions for future improvement.

## Figures

**Figure 1.** Home page — mobile view, demonstrating the mobile-first layout and compact navigation.

**Figure 2.** Home page — PC/desktop view, demonstrating the expanded navigation and wider content presentation.

**Figure 3.** Destinations page — mobile view, showing the narrow-screen destination-card presentation.

**Figure 4.** Destinations page — PC/desktop view, showing the three-column destination grid.

**Figure 5.** City page — mobile view, showing the stacked city hero/content layout.

**Figure 6.** City page — PC/desktop view, showing the wider `3fr 2fr` hero composition.

**Figure 7.** Contact page — mobile view, showing the responsive form layout on a narrow viewport.

**Figure 8.** Contact page — PC/desktop view, showing the labelled form and constrained desktop form width.

**Figure 9.** Contact validation error — PC/desktop view, showing visible validation feedback and the form error state.

**Figure 10.** Contact validation error — mobile view, showing visible validation feedback and the form error state.

## References (Harvard)

Marcotte, E. (2010) ‘Responsive Web Design’, *A List Apart*, 25 May. Available at: https://alistapart.com/article/responsive-web-design/ (Accessed: 31 August 2026).

MDN Web Docs (2025a) *Using HTML form validation and the Constraint Validation API*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation (Accessed: 31 August 2026).

MDN Web Docs (2025b) *Using responsive images in HTML*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images (Accessed: 31 August 2026).

MDN Web Docs (2026a) *JavaScript modules*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules (Accessed: 31 August 2026).

MDN Web Docs (2026b) *Window: localStorage property*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage (Accessed: 31 August 2026).

W3C (2024) *Web Content Accessibility Guidelines (WCAG) 2.2*. W3C Recommendation, 12 December. Available at: https://www.w3.org/TR/WCAG22/ (Accessed: 31 August 2026).

W3C (2025a) *CSS Flexible Box Layout Module Level 1*. W3C Candidate Recommendation Draft, 14 October. Available at: https://www.w3.org/TR/css-flexbox-1/ (Accessed: 31 August 2026).

W3C (2025b) *CSS Grid Layout Module Level 1*. W3C Candidate Recommendation Draft, 26 March. Available at: https://www.w3.org/TR/css-grid-1/ (Accessed: 31 August 2026).

W3C WAI (n.d.) *Disclosure (Show/Hide) Pattern*. ARIA Authoring Practices Guide. Available at: https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/ (Accessed: 31 August 2026).

Wroblewski, L. (2011) *Mobile First*. New York: A Book Apart.
