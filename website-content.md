# My Rehab Physio - Website Content Inventory

This file contains ALL textual content from the existing website, extracted for use in designing a new website from scratch.

## SEO & Metadata

### Root Layout (app/layout.tsx)
- **title**: "My Rehab Physio - Best Home Physiotherapy in Powai, Mumbai | Physiotherapy at Home"
- **description**: "Expert home physiotherapy services in Powai, Hiranandani Gardens, Chandivali & Mumbai. Female physiotherapist available. Neuro, Ortho, Sports & Cardio-Pulmonary Physiotherapy at home. Best physiotherapy clinic near me. Call +91-7021042122"
- **keywords**: "home physiotherapy Powai, physiotherapy at home Mumbai, physiotherapy near me, physio near me, female physiotherapist near me, home physiotherapy Hiranandani Gardens, physiotherapy at home Chandivali, best physiotherapy clinic Powai, home physio services Mumbai, physiotherapy home visits, physio at home Saki Vihar Road, home treatment physiotherapy, My Rehab Physio, neuro physiotherapy at home, ortho physiotherapy home visits, sports physiotherapy at home, physiotherapy clinic near IIT Bombay, home physiotherapy Vile Parle West, physio home services Andheri East"
- **generator**: 'v0.app'

### Homepage (app/page.tsx)
- Imports: Header, BreadcrumbNav, ClinicHero, AboutClinic, HomePhysiotherapySEO, ConditionsTreated, EnhancedDoctorProfiles, ConditionsMumbai (commented out)

## Header Component (components/header.tsx)

### Navigation Links (desktop)
- About
- Locations
- Conditions We Treat
- For Patients
- For Hospitals

### Contact/Call Section
- **Phone number**: +91-7021042122
- **Mobile behavior**: Calls via tel: link on mobile
- **Desktop behavior**: Copies phone number to clipboard with toast notification
- **Toast message**: "Phone number copied to clipboard!"

### Header Logo
- Source: /mrp-logo.jpg
- Alt: "My Rehab Physio Logo"
- Height: h-12

### Visible Toast (when phone copied)
- Fixed bottom-center black toast with white text
- Message: "Phone number copied to clipboard!"
- Duration: 3 seconds

## Clinic Hero (components/clinic-hero.tsx)

### Main Heading
- **H1**: "My Rehab Physio - Best Physiotherapy Clinic in Mumbai | Powai, Vile Parle, Chandivali"

### Subheading
- **Paragraph**: "Expert physiotherapy treatment in Mumbai with specialized team for Neuro, Ortho, Sports & Cardio-Pulmonary Physiotherapy"

### Google Reviews Section
- Google logo (src: /google-logo.png)
- Text: "REVIEWS"
- Link: "See our reviews on Google" (href: https://g.co/kgs/ZBMUoyZ)

### Clinic Image
- Source: /modern-physiotherapy-clinic-interior-with-equipmen.jpg
- Alt: "My Rehab Physio Interior"
- Classes: w-full h-64 object-cover rounded-lg

### Location Card (sidebar)
**Multiple Locations**
- **Powai (Main)**: Hill Side Avenue, Hiranandani Gardens, Powai, Mumbai 400076
- **Vile Parle West**: Narsee Monjee Bhavan, 7, N S Road No. 7, JVPD Scheme, Mumbai 400049
- **Chandivali**: Saki Vihar Rd, New Mhada Colony, Chandivali, Powai, Mumbai 400072

**Timings**
- Monday - Saturday
- Home visits available

**Contact**
- Phone: +91-7021042122

### Services Card
- Physiotherapy Clinic Near Me
- Female Physiotherapist Near by Me
- Physio Near Me
- Physiotherapy at Home

### Home Physiotherapy Coverage Areas
- Text: "We provide comprehensive physiotherapy services and home visits across Mumbai including Powai, Hiranandani Gardens, Chandivali, Vile Parle West, JVPD Scheme, Saki Vihar Road, Andheri East, Kanjurmarg, Vikhroli, and surrounding areas. Our qualified physiotherapists offer personalized home treatment for your convenience and comfort."
- Grid tags (2 columns):
  - Home Physiotherapy Powai
  - Physiotherapy at Home Hiranandani
  - Home Physio Chandivali
  - Female Physiotherapist Home Visits
  - Physio Near IIT Bombay
  - Home Treatment Saki Vihar Road

### Sidebar Card - Our Powai Location
- Embedded Google Map (iframe with Hill Side Avenue, Hiranandani Gardens, Powai)
- Card title: "Our Powai Location"

### Sidebar Card - Services
- Physiotherapy Clinic Near Me
- Female Physiotherapist Near by Me
- Physio Near Me
- Physiotherapy at Home

## About Clinic (components/about-clinic.tsx)

### Main Heading
- **H2**: "About My Rehab Physio - Your Trusted Experts in Movement, Recovery & Well-being"

### Body Copy (3 paragraphs)
1. "Struggling with pain or an injury? At My Rehab Physio, we're here to help you get back to what you love doing so you can fulfil your dreams. Whether you need to get back to the gym, play sports, run a marathon or simply do your work, our expert team is dedicated to guiding you every step of the way."
2. "Conveniently located in the heart of Mumbai with multiple locations in Vile Parle West, Powai, and Chandivali, we offer a wide range of services, including neuro physiotherapy, ortho physiotherapy, sports physiotherapy, and cardio-pulmonary physiotherapy – all designed to help you recover, move better, and stay active."
3. "Everything we do is focused on getting you out of pain and back to what you love doing."

### Comprehensive Approach Paragraph
"Our comprehensive approach to physiotherapy and wellness in Mumbai ensures that each patient receives personalized care tailored to their specific needs and recovery goals. We also offer convenient home visit services for your comfort and convenience."

### Feature Grid (4 columns on md, 4 on lg)
1. **Multiple Locations** - Powai, Vile Parle, Chandivali
2. **Expert Team** - Qualified Physiotherapists
3. **Specialized Care** - Neuro, Ortho, Sports, Cardio
4. **Home Visits** - Convenient At-Home Care

### Badge Tags (5 badges)
- Best Physiotherapy Clinic Mumbai
- Home Physiotherapy Services
- Female Physiotherapist Available
- Physio Near Me
- Expert Neuro Rehabilitation

## Conditions Treated (components/conditions-treated.tsx)

### Section Heading
- **H2**: "Conditions Treated at My Rehab Physio Mumbai Clinics"

### Intro Paragraph
"Conditions Treated at My Rehab Physio Mumbai Clinics"

### Conditions List (6 conditions)
1. **Neuro-Physiotherapy**: stroke rehabilitation, paralysis treatment, Bell's Palsy, neurological conditions, and nerve pain management with specialized neurological recovery techniques.
2. **Ortho-Physiotherapy**: arthritis, sciatica, lower back pain, knee pain, cervical spondylosis, neck pain, shoulder pain, frozen shoulder, and musculoskeletal disorders.
3. **Sports Physiotherapy**: sports injuries, athletic performance enhancement, tennis elbow, ACL injuries, sports rehabilitation, and injury prevention for athletes and active individuals.
4. **Cardio-Pulmonary Physiotherapy**: respiratory conditions, COPD management, cardiac rehabilitation, breathing exercises, and cardiovascular health improvement.
5. **Physiotherapy Treatment**: comprehensive pain management, mobility improvement, strength training, and functional rehabilitation across all age groups.
6. **Physiotherapy Rehabilitation**: post-operative care, post-surgical recovery, joint replacement rehabilitation, and specialized recovery programs.

### Call-to-Action
- **Button**: "Book a Consultation"
- **Link**: tel:+917021042122
- **Behavior**: Opens call dialog on mobile, copies to clipboard on desktop
- **Toast**: "Phone number copied to clipboard!" (3 second duration)

### Toast (when shown)
- Fixed bottom-center
- Black background, white text
- Message: "Phone number copied to clipboard!"

## Enhanced Doctor Profiles (components/enhanced-doctor-profiles.tsx)

### Section Heading
- **H2**: "Meet Our Expert Physiotherapy Team"

### Intro Paragraph
"Our highly qualified physiotherapists bring years of experience and specialized training to provide the best care for your recovery and wellness journey."

### Doctor Cards (3 doctors)

**Dr. Avdhoot Shimpi**
- **Title**: Dr. Avdhoot Shimpi
- **Qualification**: BPTh (Orthopedics)
- **Badge**: Senior Orthopedic Physiotherapist
- **Education & Qualifications**: Bachelor's in Orthopedic Physiotherapy from Mumbai University. Certified in Manual Therapy and Sports Rehabilitation.
- **Specializations**: Post-operative rehabilitation, joint replacement recovery, arthritis management, back pain treatment, sports injury rehabilitation, and manual therapy techniques.
- **Experience**: 5+ years of clinical experience with expertise in treating complex orthopedic conditions. Specialized training in home physiotherapy services.
- **Patient Focus**: Known for personalized treatment plans and excellent patient communication. Fluent in Hindi, Marathi, and English.

**Dr. Prajna Shetty**
- **Title**: Dr. Prajna Shetty
- **Qualification**: BPTh (Neurology)
- **Badge**: Senior Neurological Physiotherapist
- **Education & Qualifications**: Bachelor's in Neurological Physiotherapy. Expert in NDT (Neuro-Developmental Treatment) and PNF techniques.
- **Specializations**: Stroke rehabilitation, paralysis treatment, Parkinson's disease management, spinal cord injury recovery, balance training, and pediatric neurological conditions.
- **Experience**: 5+ years specializing in neurological rehabilitation with extensive experience in home-based neuro-physiotherapy treatments.
- **Patient Focus**: Compassionate approach to neurological recovery with family-centered care. Experienced in motivating patients through challenging rehabilitation journeys.

**Dr. Prerana Patil**
- **Title**: Dr. Prerana Patil
- **Qualification**: BPTh
- **Badge**: Senior Sports Physiotherapist
- **Education & Qualifications**: Bachelor's in Physiotherapy. Certified in Dry Needling, Kinesio Taping, and Athletic Performance Enhancement.
- **Specializations**: Sports injury rehabilitation, ACL reconstruction recovery, shoulder impingement, tennis elbow, running injuries, and performance optimization for athletes.
- **Experience**: 5+ years in sports physiotherapy with experience treating professional athletes and weekend warriors. Expert in injury prevention strategies.
- **Patient Focus**: Dedicated to helping athletes return to peak performance. Provides comprehensive injury prevention education and movement analysis.

### Summary Section
- **Paragraph**: "All our physiotherapists are available for both clinic visits and home consultations across Mumbai"
- **Badges** (4 outline badges):
  - Licensed Physiotherapists
  - Home Visit Specialists
  - Multilingual Team
  - Insurance Accepted

## Home Physiotherapy SEO (components/home-physiotherapy-seo.tsx)

### Section Heading
- **H2**: "Home Physiotherapy Services in Powai, Mumbai"

### Intro Paragraph
"Professional physiotherapy treatment at your doorstep. Our expert physiotherapists provide personalized care in the comfort of your home across Powai, Hiranandani Gardens, Chandivali, and surrounding areas."

### Feature Cards (4 cards grid md:grid-cols-4)
1. **Home Physiotherapy Powai** - Icon: Home
   - Subheading: "Home Physiotherapy Powai"
   - Body: "Convenient at-home treatment in Powai area"

2. **Physiotherapy Near Hiranandani** - Icon: MapPin
   - Subheading: "Physiotherapy Near Hiranandani"
   - Body: "Serving Hiranandani Gardens and nearby localities"

3. **Flexible Home Visits** - Icon: Clock
   - Subheading: "Flexible Home Visits"
   - Body: "Morning and evening slots available"

4. **Expert Team** - Icon: Users
   - Subheading: "Expert Team"
   - Body: "Qualified physiotherapists with home care experience"

### Areas We Cover
**Heading**: "Areas We Cover for Home Physiotherapy"

**Powai & Surroundings** (5 items):
- Home Physiotherapy in Powai
- Physiotherapy at Home Hiranandani Gardens
- Home Physio Services Powai Lake
- Physiotherapy Home Visits Powai Plaza
- Home Treatment Near IIT Bombay

**Chandivali & Vicinity** (5 items):
- Home Physiotherapy Chandivali
- Physio at Home Saki Vihar Road
- Home Treatment New Mhada Colony
- Physiotherapy Services Chandivali Studio
- Home Visits Near Chandivali Junction

**Extended Coverage** (5 items):
- Home Physiotherapy Vile Parle West
- Physio at Home JVPD Scheme
- Home Treatment Andheri East
- Physiotherapy Services Kanjurmarg
- Home Visits Vikhroli West

### Final CTA Section
- **Badges** (5 secondary badges):
  - Home Physiotherapy Powai
  - Physiotherapy at Home Mumbai
  - Home Physio Near Me
  - Female Physiotherapist Home Visits
  - Home Treatment Hiranandani

- **Heading**: "Book Your Home Physiotherapy Session Today"

- **Body**: "Call us at +91-7021042122 to schedule your home visit"

- **Phone link**: <a href="tel:+917021042122" className="text-primary font-semibold">+91-7021042122</a>

## Conditions Mumbai (components/conditions-mumbai.tsx)

### Section Heading
- **H2**: "Conditions We Treat in Mumbai"

### Intro Paragraph
"Consult some of the top physiotherapy treatment doctors in Mumbai to avail top-notch physiotherapy for a variety of conditions including:"

## Breadcrumb Navigation (components/breadcrumb-nav.tsx)

### Breadcrumbs
- **Home** (linked)
- Divider: ChevronRight
- **Physiotherapy Clinics** (linked)
- Divider: ChevronRight
- **Mumbai - Powai, Vile Parle, Chandivali** (current, not linked)

## Physiotherapist Profile (components/physiotherapist-profile.tsx)

### Section Heading
- **H2**: "Meet Our Expert Physiotherapy Team in Mumbai"

### Profile Cards (3 doctors)
1. **Dr. Avdhoot Shimpi (PT)**
   - **Badge**: Ortho-Physiotherapist
   - **Body**: "Specialized in orthopedic physiotherapy with expertise in musculoskeletal conditions, post-operative rehabilitation, and sports injury management."

2. **Dr. Prajna Shetty (PT)**
   - **Badge**: Neuro-Physiotherapist
   - **Body**: "Expert in neurological rehabilitation with focus on stroke recovery, paralysis treatment, and neurological condition management."

3. **Dr. Prerana Patil (PT)**
   - **Badge**: Sports Physiotherapist
   - **Body**: "Specialized in sports physiotherapy, athletic performance enhancement, and sports injury prevention and rehabilitation."

### Profile Images
- Source: /specialist-portrait.png (for all 3 doctors)
- Alt: Dr. Name
- Size: w-24 h-24 rounded-full

## Working Map (components/working-map.tsx)

### Embedded Google Map
- **Source**: Full Google Maps embed URL
- **Location**: Hill Side Avenue, Hiranandani Gardens, Powai, Mumbai 400076
- **Dimensions**: w-full h-64 rounded-lg
- **Attributes**: allowFullScreen, loading="lazy", referrerPolicy="no-referrer-when-downgrade"
- **Title**: "My Rehab Physio Powai Location"

## Additional Text Content (from grep analysis)

### Component library UI texts (class names etc.) - not displayed content

### package.json
- **name**: "my-v0-project"
- **version**: "0.1.0"

### components.json
- **style**: "new-york"
- **rsc**: true
- **tsx**: true
- **tailwind:** config, css: "app/globals.css", baseColor: "neutral", cssVariables: true, prefix: ""
- **aliases**: 
  - components: "@/components"
  - utils: "@/lib/utils"
  - ui: "@/components/ui"
  - lib: "@/lib"
  - hooks: "@/hooks"
- **iconLibrary**: "lucide"

### tsconfig.json
- Standard Next.js 14 TypeScript config

### globals.css
- Custom `oklch` color variables for light/dark mode
- Tailwind animations (tw-animate-css)
- CSS custom properties theming

### Google Services
- Google Maps iframe embed
- Google Reviews link (https://g.co/kgs/ZBMUoyZ)
- Google logo image (/google-logo.png)

### Contact Information (consistent across site)
- **Phone**: +91-7021042122
- **Areas served**: Mumbai (Powai, Hiranandani Gardens, Chandivali, Vile Parle West, JVPD Scheme, Saki Vihar Road, Andheri East, Kanjurmarg, Vikhroli and surrounding areas)

### Lucide Icons Used
- Star (for Google Reviews rating)
- MapPin (for locations)
- Clock (for timings)
- Phone (for contact)
- Users (for team/expertise)
- GraduationCap (for education)
- Award (for qualifications)
- Home (for home physiotherapy)
- ChevronRight (for breadcrumbs navigation)

### Color Themes Used
- Primary: oklch(0.205 0 0) (light), oklch(0.985 0 0) (dark)
- Secondary: oklch(0.97 0 0) (light), oklch(0.269 0 0) (dark)
- Muted: oklch(0.97 0 0) (light), oklch(0.269 0 0) (dark)
- Accent: oklch(0.97 0 0) (light), oklch(0.269 0 0) (dark)
- Destructive: oklch(0.577 0.245 27.325) (light), oklch(0.396 0.141 25.723) (dark)