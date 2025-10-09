# Product Development Notebook

----

## Initial Brainstorming

### General Direction:  
  Exploring a companion robot designed to improve emotional connection and communication for international students and long-distance families/couples.  

### Pain Points Identified:
  - Difficulty in maintaining meaningful communication across countries and time zones.  
  - Lack of emotional presence in current tools (text, video calls), user need for more natural, playful, and ritualized interaction.  
  - Many seniors and children struggle to adapt to new technologies like smartphones and FaceTime.

### Reference Products: 
  We came across the [ROLA Mini Companion Robot](https://www.enabot.com/products/rola-mini-companion-robot), which already addresses companionship but lacks strong differentiation and marketing appeal.  

### Idea Variants: 
  - Idea A: Adaptation of ROLA Mini with improved emotional interaction features (e.g., light, sound, motion).  
  - Idea B: Long-distance ritual companion robot emphasizing shared routines (morning greetings, meals, etc).  
  - Idea C: Companion robot tailored for elderly parents and small childrens (simplified UI + physical button for check-ins).  
  - Idea D: Pet monitoring robot introduces playful interactions (treat delivery, light-based games) to engage pets rather than just watch them.

### Reflection:  
  From the beginning, my group member and I discussed the overall direction of our product. Since we are both international students, we share the common challenge of maintaining meaningful communication with our families in another country. Building on this pain point, I proposed an idea inspired by a social media reel: in the reel, a person in a long-distance relationship interacts with her partner through a small robot that he remotely controls, such as pushing a tray of jam toward her while engaging in playful conversations.  
  After exploring similar existing products, we found [ROLA Mini](https://www.enabot.com/products/rola-mini-companion-robot) and decided to use it as a reference point to identify how it could be improved—both functionally and in terms of marketing value.  


##  Features Communication with AI

> Unless otherwise noted, throughout the evaluation, we use ChatGPT-5 and keep all prompts in a single conversation thread. For brevity, we include only key excerpts.

### Raw Output 

Prompt: **Give me the target user profile of social robots like ROLA Mini Companion Robot**

ChatGPT:This social robot is designed for users who value emotional presence and ritualized companionship as much as functional utility. Core segments include young urban professionals seeking light support after work, elderly adults who may experience loneliness or mobility challenges, and families or couples maintaining long-distance relationships. They tend to adopt smart tech early, engage with the robot in short daily interactions, and are willing to pay for services that add social or emotional value. In essence, the ideal user is emotionally open, routine-oriented, and looks for a low-friction way to feel less alone.

<details>
<summary><b>Click to view full communication process</b></summary>



Prompt: **What are these ideal users pain points?**

ChatGPT: In essence, the core pain point is: “I want to feel connected and cared for, but current digital tools make connection feel effortful, shallow, or cold.” Users hesitate to adopt “cameras/mics” unless they trust the brand to protect them. And they need for “human-like” companionship in a non-intrusive form.

Prompt: **Base on these pain points, list 5 possible improvements to the ROLA Mini Companion Robot based on the target users' needs in short.**


ChatGPT: The social robot offers five core features: ambient signals (light, sound, haptics) to convey presence without live calls; time-shifted messaging for sharing moments across time zones; ritual builder for simple shared routines; senior-friendly mode with easy check-ins; and privacy-first design with clear indicators and local processing to build trust.

Prompt: **Can you give me some core UX flows?**

ChatGPT: 
1. Morning Greeting  
App tap → Robot glows warm light + chime → Optional short greeting plays  

2. Shared Meal  
User triggers “Dinner Bell” → Remote robot rings + lights → Camera shares short highlight  

3. Time-Shifted Postcard  
Record message → Schedule playback → Robot auto-plays with light pulse → Receiver sends light/emoji reply  

4. Elderly Check-In  
Press physical button → Sends “I’m OK” → Robot glows green → Family sends light/voice ack  

5. Consent-Based Drop-In  
Request live view → Robot shows indicator → Local user confirms → Stream opens (auto timeout)  

6. Pet Highlight  
Robot detects pet activity → Captures clip → Shares highlight with family/partner


Prompt: **What is the feature bullet point for them? (v1)** 

ChatGPT: 
- Morning Glow Greeting – Send a warm light + chime “good morning” ritual to start the day together.
- Shared Dinner Bell – Ring a gentle mealtime signal across homes, with optional pet/family highlights.
- Time-Shifted Postcards – Record short video/audio notes that auto-play when your loved one arrives.
- One-Tap Check-In – Simple physical button for seniors to say “I’m OK” or “I’m home” instantly.
- Consent-First Drop-In – Request live view only with clear visual consent and auto time-outs.

Prompt: **Now act as a product innovation consultant for social robots. (v2)** 

The current feature list feels too similar to existing market offerings and lacks differentiation. 
Suggest 5–7 new, distinctive, and creative features that go beyond what is currently common. 
Each feature should include: 
1) a short name, 
2) a 1–2 sentence description, 
3) the unique value or “wow factor” compared to existing products.

ChatGPT: 
Seven differentiated features for a next-gen social companion robot include:  
1) Mood Mirror – detects tone and posture, reflects back mood with lights or affirmations.  
2) Shared Rhythm – linked robots sync heartbeats or breathing-like pulses across distance.  
3) Memory Seeds – stored clips reappear later as playful reminders.  
4) Companion Choreography – simple motions (nods, dances) matched to music or emotion.  
5) Ambient Storytelling – curates daily highlights into a short narrative automatically.  
6) Scent Cue Pod – optional scent cartridges for greetings and rituals.  
7) Presence Echo – When someone interacts with their robot, the paired robot creates a soft “echo” (light, chime, or mini-motion) within seconds.

Prompt: **Now act as a senior marketing expert, choose 3 features you think are the bests and give me there "Web & Social Copy", keep it in 1 or 2 sentences (v3)** 

ChatGPT: 🌟 Mood Mirror

Copy: “*Feel understood, not just observed.*”
Your companion reflects your tone and energy with gentle lights and affirmations — so you always feel seen, even on tough days.

---

💓 Shared Rhythm

Copy: *“One heartbeat, two homes.*”
Sync soft pulses of light or vibration across distance, creating an intimate sense of togetherness no video call can match.

----

📖 Ambient Storytelling

Copy: “*Your day, woven into a story.*”
From pet moments to shared notes, your companion curates highlights into a warm narrative you can relive every evening.

</details> 

### Reflection

#### Useful or generic?

Firstly, almost every response contains something valuable. I begin with the target audience because we cannot design truly useful and feasible features without first understanding users’ pain points. Later, we will refine this in the [marketing section](#marketing-communication-with-ai). I also noticed that when the system is not guided to act as a product innovation consultant, its suggestions tend to be generic and require further refinement. However, once we add constraints to the response format, the functions become more practical, innovative, and aligned with real marketing potential.

#### Final Choice

From the generated ideas, I identified five key features that balance strong marketing potential with meaningful technical improvements. These selected features represent both differentiation in the market and feasibility for development.


- **Mood Mirror:** Moves beyond surveillance by offering empathetic feedback — the robot detects tone, posture, or context, and reflects back mood through lights or short affirmations (e.g., “You sound tired, take a break”), potentially combined with AI for more nuanced, personalized responses.  

- **Shared Rhythm:** Two linked robots, may paired with a wearable bracelets, can sync gentle pulses or breathing-like rhythms across distance, creating an intimate sense of presence far beyond text or video while also opening opportunities for bundled accessory sales.  

- **Companion Choreography:** The robot performs simple, expressive motions such as nodding, tilting, or light dances that respond to music or user emotion, adding personality absent in static smart speakers while avoiding the complexity and bulk of humanoid robots, though careful design is needed to ensure safe and meaningful movement patterns.  

- **Scent Cue Pod (Optional Add-On):** Multi-sensory connection is introduced through scent cartridges that trigger during greetings or rituals, enriching the user experience and enabling consumable upsell or bundled sets, though users will need to manage replacing or refilling the pods themselves.  

- **One-Tap Check-In:** Aimed at elderly users and children, this feature allows a simple button press to notify family members, reducing the learning curve by removing the need for complex instructions while reinforcing trust and ease of use.  



## Marketing Communication with AI

> In this section, I first incorporate the five core features identified in the previous reflections to ensure that the discussion is both feasible and aligned with our requirements.

### Brand Identity （Names & Slogans & logo）

Prompt: **Act as a product branding consultant with expertise in social robotics.** 
Using the five features listed below, suggest 10 brand names that are short, memorable, and convey companionship. 

ChatGPT: "Evo", "Kora", "Nomi", "Auri", "Senti", "Mira", "Liva", "Piri", "Halo", "Navi"

<details>
<summary><b>Click to view full communication process</b></summary>

Prompt: Give me the top-3 which are most Cross-Language Friendly and memorable, notice to double check that if there is already same name product in market

ChatGPT:
| Name  | Cross-Language Friendliness & Memorability | Conflict / Market Check | Status |
|:-------|:--------------------------------------------|:--------------------------|:--------|
| **Senti** | Very soft, easy to pronounce in many languages (Spanish, English, many European and Asian tongues). “Sentiment / sense / sense +friend” tie-in helps meaning. | I couldn’t find a major existing robot or well-known product (in robotics / companion sector) called “Senti.” Doesn’t appear to clash with top names. | Good choice. |
| **Liva** | Very short, vowel-rich, “live + care / life,” likely easy to remember. Minimal consonant clusters help non-native speakers. | I saw no strong overlap with big robot / tech brands for “Liva” (though “Liva” is used in other product categories, but not known for a companion robot). | Safe enough. |
| **Auri** | Fractions of “aura,” “aurum,” glowing, warm; easy to say in many languages; two syllables, nice sound; distinctive. | Not prominent as a robot name that I found; “Auri” appears in some brand/product names in unrelated fields (audio, jewelry etc.), but no big conflict in social robot space. | Strong candidate. |

Prompt: Act as a branding consultant. Suggest 5 creative slogans. Each one should be warm and easy to pronounced in English and remembered. Pick the top 3 with reasoning.

ChatGPT:  Here are 5 warm, memorable slogan options:
	1.	Presence you can feel.
	2.	One heartbeat, two homes.
	3.	Care that glows.
	4.	Little lights. Big comfort.
	5.	Hello, I’m here.

Top 3 & why
	•	Presence you can feel: Broad, emotional promise that fits all features (Mood Mirror, Scent Pod, Choreography). Short words, strong recall, versatile across audiences.
	•	One heartbeat, two homes: Ownable line that dramatizes Shared Rhythm (with/without bracelets). Highly distinctive vs. market; intimate without being cheesy.
	•	Little lights. Big comfort: Memorable contrast and cadence; anchors the product’s light-based expressions while implying real emotional benefit. Easy to pronounce, great for visuals.

Prompt: I would prefer "Presence you can feel" one, can you combine it with the name of product "Senti"  and 5 versions of the slogan: one playful, one emotional, one professional, one tech-focused, one minimalist. Write the output in form  *[style]: [slogan]*

ChatGPT:
- Playful: Senti — Feel the presence, share the smiles.
- Emotional: Senti — Presence you can feel, love you can hold onto.
- Professional: Senti — Redefining presence, enriching connection.
- Tech-Focused: Senti — Intelligent presence, made tangible.
- Minimalist: Senti — Presence, felt.

Prompt: For the first three slogans, can you polish them into final copy, making their characteristics more prominent and memorable?

ChatGPT: 

- Senti — Where presence turns into giggles and glow..
- Senti — Presence you can feel, love that stays close.
- Senti — Elevating presence, empowering connection.


Prompt: Act as a graphic designer， base on this name and slogan: "Senti — Presence you can feel, love that stays close.", give me 3 possible groups of *color palettes* and *typography* and *symbols*. The goal was to create a warm and approachable identity.

ChatGPT:
| Concept | Color Palette | Typography | Symbol Ideas |
|:---------|:---------------|:------------|:--------------|
| **1. Warm Glow** (emotional, cozy) | - Peach (#FFB997) – warmth, kindness  <br> - Soft Coral (#FF6F61) – affection, intimacy  <br> - Cream White (#FFF7F0) – comfort, lightness  <br> - Warm Gray (#8C8C8C) – grounding balance | - Headline: **Quicksand** (rounded, humanistic sans-serif)  <br> - Body: **Nunito Sans** (clean but friendly) | - A glowing heart outline that gently radiates lines outward  <br> - Two dots linked by a curve (people connected)  <br> - Halo ring suggesting presence/light |
| **2. Calm Presence** (minimalist, soothing) | - Sky Blue (#A7C7E7) – calm, trust  <br> - Lavender (#C7B9FF) – empathy, softness  <br> - Light Sand (#F8EAD8) – warmth without heaviness  <br> - Slate Gray (#5C5C5C) – stability | - Headline: **Poppins** (modern geometric sans-serif)  <br> - Body: **Open Sans** (versatile, clean) | - A gentle ripple circle expanding out (presence echo)  <br> - Abstract infinity loop symbolizing togetherness  <br> - Breathing dots pattern evoking Shared Rhythm |
| **3. Joyful Companion** (playful, friendly) | - Sunset Yellow (#FFD66B) – joy, optimism  <br> - Mint Green (#A8E6CF) – freshness, life  <br> - Blush Pink (#FFAAA5) – warmth, affection  <br> - Charcoal (#3A3A3A) – contrast, clarity | - Headline: **Baloo 2** (rounded, playful display font)  <br> - Body: **Lato** (legible, modern sans-serif) | - A smiling arc under two dots (companion face)  <br> - Stylized heartbeat line morphing into a circle  <br> - Playful dancing shapes symbolizing motion/companionship |
</details> 

Then I switch to DALL·E 3 to generate icons using the color palettes and symbols it provided, adding the prompt: “Given this information, generate a simple, vector-style icon”
Here is the images I get from those 3 prompts:



1. prompt 1

<div style="display: flex;">

<div style="flex: 1; padding: 10px;">
 
![](image_pink_1.png)

</div>

<div style="flex: 1; padding: 10px;">

![](image_pink_2.png)

</div>

</div>

2. prompt 2

<div style="display: flex;">

<div style="flex: 1; padding: 10px;">
 
![](blue_1.png)

</div>

<div style="flex: 1; padding: 10px;">

![](blue_2.png)

</div>

</div>

3. prompt 3

<div style="display: flex;">

<div style="flex: 1; padding: 10px;">
 
![](yellow_1.png)

</div>

<div style="flex: 1; padding: 10px;">

![](yellow_2.png)

</div>

</div>


### Target Audience

Prompt: Act as a UX researcher. Generate 3 detailed user personas for this social companion robot base on those 5 main features. 
For each persona, include: name, age, occupation, lifestyle, goals, pain points, and how they would use the robot. 
Output in 3 seperate paragraphs.

ChatGPT:
- Emily Zhang
- Age: 27
- Occupation: Marketing Associate at a tech startup
- Lifestyle: Lives alone in a small city apartment; long-distance relationship with her partner abroad; enjoys yoga, music, and video calls but often feels digital interactions are shallow.
- Use: **Mood Mirror** for affirmations, **Shared Rhythm** to sync with partner, **Companion Choreography** for playful music breaks.

-------


<details>
<summary><b>Click to view full communication process</b></summary>

- George Thompson
- Age: 68
- Occupation: Retired school principal
- Lifestyle: Lives in a suburban home; children live in different states; enjoys gardening and walks but often feels isolated; prefers simple, tangible tech.
- Use:  **One-Tap Check-In** for easy family updates,  **Mood Mirror** prompts to connect,  **Companion Choreography** with music, Scent Cue Pod for calming rituals.

-------

- Sofia & Mateo Alvarez (with kids, 5 & 8)
- Age: 34 & 36
- Occupation: Nurse & Civil Engineer
- Lifestyle: Busy parents juggling shift work and childcare; want to keep grandparents involved across time zones; seek meaningful family rituals.
- Use: **Shared Rhythm** during meals, **Companion Choreography** for bedtime fun, **Scent Cue Pod** for family rituals, **One-Tap Check-In** for kids’ goodnights.

  
Prompt:  Identify 4–5 target audience segments for it . 
For each segment, provide: demographic traits, psychographics, typical behaviors, and primary needs. 
Format as bullet points.

ChatGPT:
| Segment | Demographic Traits | Psychographics | Typical Behaviors | Primary Needs |
|:--------|:-------------------|:---------------|:------------------|:--------------|
| **Young Professionals in Long-Distance Relationships** | 25–35 years old; urban; mid-income; often tech-savvy; single households | Value emotional closeness; open to new tech for connection; seek work-life balance | Frequent texting/video calls; use wellness apps; stream music | Maintain intimacy despite distance; lightweight emotional rituals; reduce stress and loneliness |
| **Elderly Living Alone** | 60–80 years old; suburban/rural; moderate income; varying tech comfort | Seek reassurance and family connection; may fear burdening family; value simplicity and trust | Occasional video calls; routine-based activities; rely on family check-ins | Simple check-in method; reduce social isolation; non-intrusive companionship; safety reassurance |
| **Busy Families with Kids** | Parents 30–45; dual-income; 1–3 children; often multigenerational ties | Value family rituals; want kids to connect with grandparents; desire shared experiences | Use video calls with grandparents; schedule-driven routines; limited time for family bonding | Strengthen family rituals; engage kids with fun interactions; connect generations effortlessly |
| **Tech-Savvy Couples & Early Adopters** | 20–40; urban; higher income; gadget enthusiasts | Excited by novelty; value personalization and design; enjoy multi-sensory experiences | Try new gadgets quickly; customize smart homes; share tech on social media | Unique emotional tech experiences; personalization; playful & innovative features |

Prompt: Act as a UX researcher. For each target segment, describe typical narrative scenarios showing how they would interact with a companion robot. Keep it to 3–4 sentences per segment.

ChatGPT:

👩‍💻 Young Professionals in Long-Distance Relationships

Emma finishes work late, feeling drained, and sees her robot softly glowing with a light pattern from her partner across the ocean. She taps it, and the Shared Rhythm pulse begins, syncing their presence without needing a call. Before bed, she leaves a short time-shifted video postcard, knowing it will greet her partner in the morning. The robot turns the routine into a comforting ritual that makes distance feel lighter.

-------

👴 Elderly Living Alone

George sits down after dinner, and the robot prompts him gently with a glow: “Want to check in with your family?” He presses the One-Tap button, and his daughter receives a reassuring “I’m doing well” notification. Later, the Mood Mirror reflects soft calming lights while music plays, keeping him company. The simplicity helps him feel connected without wrestling with complicated devices.

-------

👨‍👩‍👧 Busy Families with Kids

At dinner, the Alvarez family places their robot in the center of the table, and it lights up in sync with the grandparents’ robot across town. The kids laugh as the robot does a short dance before bedtime, creating a playful closing to the evening. Before sleep, the children press One-Tap Check-In, sending a “goodnight” glow to their grandparents. The robot becomes a shared ritual keeper that bridges generations.

-------

💡 Tech-Savvy Couples & Early Adopters

A couple sets their robot on a shelf as part of their smart home setup, curious to explore its features. During a movie night, they trigger Companion Choreography, and the robot sways gently to the soundtrack, creating atmosphere. Later, they experiment with custom Mood Mirror settings, tweaking colors and light patterns to match their personalities. For them, the robot is both a playful gadget and a creative medium.

-------

Prompt: I feel that short, time-shifted video postcards are not very useful, since people generally prefer live interaction. In addition, the idea of robotic dance should not be limited to movements stored in a database; instead, another person could remotely control the robot’s joints to perform simple and endearing actions, such as pushing a tray. Meanwhile, the audio call function should remain active, and the colors and lighting could be offered through a few preset combinations as well as custom options. Finally, for the music playback feature designed for elderly individuals living alone, the source of the playlists should be clearly specified. Base on these modify the typical narrative scenarios a bit, condense these into 1–2 sentence “scenario snapshots” for pitch decks.


ChatGPT:


👩‍💻 Young Professionals in Long-Distance Relationships

Emma unwinds after work as her robot glows with her partner’s chosen colors; an open audio call and a playful remote tray push make distance feel more alive.

👴 Elderly Living Alone

George uses One-Tap to reassure his daughter, then relaxes with a Spotify “Golden Classics” playlist and soft lights, feeling both safe and accompanied.

👨‍👩‍👧 Busy Families with Kids

The Alvarez kids giggle as grandparents remotely nudge the robot’s tray during dinner, then say goodnight with glowing signals and bedtime calls.

💡 Tech-Savvy Couples & Early Adopters

A couple lets a friend abroad control their robot for playful gestures during movie night, while experimenting with custom light and presence settings.


</details> 




### Marketing Copy

#### Website Hero Text

Prompt: Act as a marketing copywriter. Write 10 options for a website hero text (one sentence only) for this social companion robot with those 5 main features that emphasizes emotional connection, presence, and rituals. 
Constraints: maximum 10 words, warm and memorable tone, suitable for the first line users see on a homepage.

ChatGPT:
- Presence made tangible, wherever love needs to be felt.  
- Stay close, even when life keeps you apart.  
- Small rituals, big comfort — togetherness made simple.  
- Because love deserves more than just a screen.  
- Your everyday moments, shared in light and motion.  
- Feel the heartbeat of connection across any distance.  
- Not just calls — companionship you can truly feel.  
- Bring warmth, presence, and rituals into daily life.  
- Love, lit up in colors, touch, and sound.  
- A gentle companion that makes distance feel smaller.  



<details>
<summary><b>Click to view full communication process</b></summary>

Prompt:
Give me 5 more hero text like - Because love deserves more than just a screen. 

ChatGPT:

- Because presence should be felt, not just seen.  
- Because moments matter more than missed calls.  
- Because connection is deeper than pixels and sound.  
- Because rituals make love last across distance.  
- Because companionship belongs in everyday life, not apps.
</details>


-----


#### Feature List (bullets)
Prompt: Act as a product manager. Create a feature list (5–7 bullet points) for this product which would be used in the website. 
Each bullet should include: feature name (2–3 words) + short benefit-oriented description (under 12 words). 
Focus on companionship, ease of use, and emotional presence.


ChatGPT:
- **Mood Mirror** – Gentle cues reflect emotions, making you feel understood.  
- **Shared Rhythm** – Sync heart-like pulses to feel close across distance.  
- **Companion Moves** – Playful gestures bring joy and shared rituals alive.  
- **One-Tap Check-In** – Simple button keeps family reassured without fuss.  
- **Ambient Storytelling** – Daily highlights turned into warm, shared narratives.  
- **Custom Light Language** – Express care through colors, moods, and rituals.  
- **Privacy First** – Local AI and clear consent for safe connections.




<details>
<summary><b>Click to view full communication process</b></summary>
 
Prompt: Rewrite the product feature list so it sounds  more engaging and user-centered. Use a persuasive, promotional tone suitable for a website homepage. Each bullet should highlight emotional benefits, not just technical details, and feel attractive to potential users. **(v2)**

ChatGPT:
- **Mood Mirror** – Feel truly seen with gentle light and motion that reflect your emotions and brighten your day.  
- **Shared Rhythm** – Stay close across any distance with heartbeat-like pulses that remind you someone cares.  
- **Companion Moves** – Watch your robot dance, nod, and gesture—bringing joy and playfulness into daily rituals.  
- **One-Tap Check-In** – Reassure loved ones instantly with a single touch—no apps, no stress.  
- **Ambient Storytelling** – Relive your day as warm highlights, turning ordinary moments into shared memories.  
- **Custom Light Language** – Express affection through colors and glows that say “I’m here for you.”  
- **Privacy First** – Share presence safely with clear consent, local AI, and total peace of mind.



Prompt: Now make them both in two short, parallel sentences that feel rhythmic and memorable **(v3)**

ChatGPT:
- **Mood Mirror** – It reflects your feelings. It helps you feel understood.  
- **Shared Rhythm** – It syncs gentle pulses. It keeps you close anywhere.  
- **Companion Moves** – It adds playful gestures. It turns routines into joy.  
- **One-Tap Check-In** – It sends instant reassurance. It connects loved ones with ease.  
- **Ambient Storytelling** – It curates daily highlights. It makes memories feel alive.  
- **Custom Light Language** – It glows with affection. It speaks presence without words.  
- **Privacy First** – It safeguards your moments. It ensures trust every time.

</details>


------

#### Sample “Review / Endorsement”

Prompt: Act as both a user and a reviewer. Write 5 short sample reviews for a social companion robot. 
Mix perspectives: an elderly parent, a young professional, a long-distance partner, and a tech journalist. 
Each review should be under 25 words, sound authentic, and highlight emotional or practical value.

ChatGPT:
👴 Elderly Parent
“One button and my daughter knows I’m safe. It feels simple, reassuring, and kind.”

👩‍💼 Young Professional
“After long workdays, the soft lights and little gestures make my apartment feel less empty.”

💑 Long-Distance Partner
“Shared heartbeat pulses remind me my partner’s presence is real, even thousands of miles away.”

👨‍💻 Tech Journalist
“Finally, a robot that values rituals and presence over gimmicks—practical, warm, and refreshingly human.”

👩 Family User
“My kids laugh when grandparents ‘move’ the robot at dinner. It keeps family time alive.”



<details>
<summary><b>Click to view full communication process</b></summary>

Prompt: add some real names or locations and give their different speaking tones, it feel too fake.

ChatGPT:
👴 Elderly Parent (gentle, heartfelt)
“I’m 72, and with one tap my son in Chicago knows I’m fine. That little light makes me feel cared for.” — Margaret, Des Moines

👩‍💼 Young Professional (casual, relieved)
“Work from home gets lonely, but Senti greets me with a glow. It’s silly, but it really lifts my evenings.” — Daniel, Brooklyn

💑 Long-Distance Partner (romantic, emotional)
“When her heartbeat pulse shows up on my side, I swear it feels like she’s right here. Way more real than texting.” — Ana, Austin

👨‍💻 Tech Journalist (analytical, witty)
“Not another plastic gadget—this one nails emotional presence. Rituals, lights, movement: finally a companion robot that earns its spot on the table.” — Rajiv Malhotra, San Francisco

👩 Family User (warm, playful)
“Our twins giggle when grandma in Madrid makes the robot dance during dinner. It turned into our favorite nightly ritual.” — Sofia, Miami

</details>


-------

#### Social Media Captions 


Prompt: Act as a social media manager. Write 6 promotional captions for this product: 2 for Instagram , 2 for LinkedIn , 2 for TikTok.  Keep each caption under 20 words and add relevant hashtags where natural.

ChatGPT:
📸 Instagram

	1.	Presence you can feel, love you can share. ✨💓 #StayConnected #Senti
    
	2.	From morning glows to bedtime rituals — companionship reimagined. 🌙💡 #EverydayTogether

----

💼 LinkedIn

	3.	Human connection, powered by design. Senti brings presence to remote work and family life. #Innovation #CompanionTech
    
    4.	Beyond video calls: Senti creates rituals that build trust, warmth, and belonging. #FutureOfConnection

---

🎵 TikTok

	5.	When your robot says “I’m here” with light 💡❤️ #SentiVibes #CompanionRobot
    
	6.	Long distance? Not anymore. One tap, one glow, one smile. 😍✨ #CloserWithSent

------

<details>
<summary><b>Click to view full communication process</b></summary>


Prompt: Act as a social media strategist. Suggest 5 concepts for Instagram Reels or TikTok videos that influencers could record to promote a social companion robot. Do not write full scripts, just give high-level concepts and specify what type of influencer would be best for each.


ChatGPT:

1. **Long-Distance Glow**  
   - *Concept:* Two partners in different cities show how Senti lights up with heartbeat pulses when they think of each other.  
   - *Best Influencer:* Lifestyle/relationship influencers or couples known for sharing authentic LDR content.  

2. **One-Tap Reassurance**  
   - *Concept:* An elderly parent presses the One-Tap button, and the adult child reacts instantly with relief and love.  
   - *Best Influencer:* Family-focused creators, multigenerational storytellers, or parent influencers.  

3. **Daily Ritual Upgrade**  
   - *Concept:* A young professional showcases morning coffee with Senti glowing beside them, and evening wind-down with companion gestures.  
   - *Best Influencer:* Wellness/lifestyle creators who highlight routines and mindful living.  

4. **Kids + Grandparents Playtime**  
   - *Concept:* Kids giggle as grandparents remotely trigger Senti’s gestures during dinner or bedtime rituals.  
   - *Best Influencer:* Family vloggers or parenting influencers with young children.  

5. **Tech Reviewer’s First Impressions**  
   - *Concept:* A tech influencer unboxes Senti, showing emotional-first features (lights, gestures) with emphasis on how it feels different from other gadgets.  
   - *Best Influencer:* Tech reviewers or early adopters with strong credibility in consumer electronics.  


</details>

#### Reflection

The initial prompt gave me a wide range of warm and concise hero texts.  I found that some options (e.g., *"Because love deserves more than just a screen"*) stood out for emotional impact and personally think it is really enthusiastic while others felt more generic and plain (*"Bring warmth, presence, and rituals into daily life"*).  

Asking for “more like X” in a follow-up prompt was kind of effective — the second batch had stronger parallel structure and a consistent emotional tone.  But they do not have that much emotional intensity and attraction. So I just keep the *"Because love deserves more than just a screen"* one.

In the feature list section, the first version was functional and clear but leaned toward technical phrasing so I want it to increase its attraction, then rhythm and memorability. Each version served a different purpose,  and comparing them helped me see which direction works best for homepage copy.  

I let the LLM design Reels concepts because social media needs visual, relatable stories. This showed how features translate into everyday scenarios and gave me quick, creative directions for influencer content.





## Monetization

### Models
Prompt : Act as a product strategist for this robotics.
Suggest 5 monetization strategies for this social companion robot,
including revenue model, target user, and pricing example.
Output in table format.



ChatGPT:
| Strategy                | Revenue Model                | Target User Segment              | Pricing Example                           |
|:-------------------------|:------------------------------|:----------------------------------|:-------------------------------------------|
| **Direct Device Sales** | One-time hardware purchase   | Families, couples, elderly users | $299–$499 per unit                        |
| **Subscription Add-ons**| Monthly service subscription | Young professionals, LDR couples | $9.99/month for premium features (extra gestures, light packs, mood playlists) |
| **Family Connectivity Plan** | Multi-user shared plan  | Multi-generational families      | $19.99/month connects up to 5 family members |
| **Corporate Wellness**  | B2B bulk leasing + service   | Employers, retirement homes      | $199/device upfront + $15/month maintenance |
| **Accessory & Content Store** | In-app microtransactions | Early adopters, style-conscious users | $2.99–$9.99 for skins, rituals, voice packs |


<details>
<summary><b>Click to view full communication process</b></summary>


Prompt: list the strategic advantages & risks of them

ChatGPT:
1. **Direct Device Sales**  
   - Advantage: High upfront revenue, fast recovery of R&D costs.  
   - Risk: Limited hardware margins; cash flow pressure if sales slow down.  

2. **Subscription Add-ons**  
   - Advantage: Creates recurring revenue and stronger user stickiness.  
   - Risk: Requires continuous new content; cancellations if value declines.  

3. **Family Connectivity Plan**  
   - Advantage: Strengthens multi-generational bonding and expands user base.  
   - Risk: Pricing may feel unfair for single-person households.  

4. **Corporate Wellness**  
   - Advantage: Large B2B contracts, boosts brand authority.  
   - Risk: Long sales cycles, higher demands on support and maintenance.  

5. **Accessory & Content Store**  
   - Advantage: Low entry cost, impulse-friendly purchases, higher margins.  
   - Risk: Over-reliance on cosmetic add-ons may weaken core value.  

</details>


-----


### KPIs

Prompt: Act as a product manager for our product, Suggest 8–10 KPIs to measure both product success and business performance. Output in a table with columns: KPI | Definition | Example Target Value.

ChatGPT:

| KPI                          | Definition                                                      | Example Target Value              |
|:------------------------------|:-----------------------------------------------------------------|:-----------------------------------|
| **Monthly Active Users (MAU)** | Number of unique users interacting with the robot each month.  | 50,000 MAU within 12 months       |
| **Daily Active Users (DAU)**  | Users engaging daily with key features (lights, gestures, calls). | 20% of MAU                        |
| **Engagement Time**           | Average minutes per day users spend interacting with the robot. | 15+ minutes/day                   |
| **Feature Adoption Rate**     | % of users using new features (e.g., One-Tap Check-In, Shared Rhythm). | 60% within 3 months of launch     |
| **Customer Satisfaction (CSAT)** | Average satisfaction rating after interactions or support.   | ≥ 4.5 / 5                         |
| **Net Promoter Score (NPS)**  | % of users likely to recommend the product to others.           | 40+                               |
| **Churn Rate**                | % of users unsubscribing or ceasing use.                        | < 5% monthly                      |
| **Average Revenue per User (ARPU)** | Revenue generated per active user per month.              | $12/month                         |
| **Customer Lifetime Value (CLV)** | Total revenue expected from one customer over their lifecycle. | $400+                             |
| **Gross Margin**              | Percentage of revenue left after cost of goods sold (COGS).     | ≥ 55%                             |

<details>
<summary><b>Click to view full communication process</b></summary>

Prompt: Rank these 10 KPIs base on therir importance and split them into product category vs. commercial category, output in another table

ChatGPT:

| Rank | KPI                          | Category   | Why Important (Brief)                          |
|:------|:-------------------------------|:------------|:------------------------------------------------|
| 1    | Monthly Active Users (MAU)    | Product    | Measures overall user base and product vitality. |
| 2    | Daily Active Users (DAU)      | Product    | Shows daily stickiness, core to product value. |
| 3    | Engagement Time               | Product    | Indicates companionship depth and actual usage value. |
| 4    | Feature Adoption Rate         | Product    | Tracks if new features are embraced by users.  |
| 5    | Customer Satisfaction (CSAT)  | Product    | Directly reflects user happiness and retention likelihood. |
| 6    | Net Promoter Score (NPS)      | Product    | Captures willingness to recommend, showing emotional bond and growth potential. |
| 7    | Churn Rate                    | Commercial | Reveals retention and revenue stability, key for long-term growth. |
| 8    | Average Revenue per User (ARPU)| Commercial | Shows per-user monetization, vital for business viability. |
| 9    | Customer Lifetime Value (CLV) | Commercial | Long-term revenue per user, informs acquisition spend. |
| 10   | Gross Margin                  | Commercial | Reflects profitability and business sustainability. |

• Product KPIs (top six) take priority, since this is a new type of social companion robot. In the early stage, the most important goals are having users, keeping them engaged for a long time, and ensuring they enjoy the experience.

• Business KPIs (last four) will become the focus only once the product matures, to ensure profitability and long-term sustainability.
</details>

### Reflection 
In the monetization part, my first prompt gave me five pretty standard strategies (direct sales, subscriptions, family plan, B2B, add-ons). They were fine, but felt a bit generic. When I tried again and asked specifically for “advantages and risks,” the answers suddenly felt more useful because I could see not just what the options are, but also the trade-offs behind them.

For KPIs, the first list came back with the usual suspects like MAU and DAU, churn. These are solid, but too general for our product. After refining the prompt to make the model rank and split them into categories, the output became much clearer. It highlighted things like “engagement time” and “feature adoption rate” as priorities, which fit better to the design goals of this product.