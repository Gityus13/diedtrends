// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-theme');
        if (document.body.classList.contains('light-theme')) {
            themeIcon.className = 'fas fa-sun';
        } else {
            themeIcon.className = 'fas fa-moon';
        }
    });

    // Trend Data - Compiled from search results
    const trends = [
        {
            id: 1,
            name: "The One Chip Challenge",
            category: "dangerous",
            era: "2020s",
            description: "Eating a single chip made with Carolina Reaper peppers. Caused severe health issues and even a teen's death in 2023, leading to product recall.",
            status: "dead",
            origin: "TikTok / Brand Promotion",
            year: "2022-2023",
            tags: ["dangerous", "food"],
            icon: "🌶️"
        },
        {
            id: 2,
            name: "Flappy Bird",
            category: "game",
            era: "2010s",
            description: "A brutally difficult mobile game that became a sleeper hit in 2014. Developer removed it from app stores, citing guilt over its addictive nature.",
            status: "dead",
            origin: "Mobile Gaming",
            year: "2013-2014",
            tags: ["game", "mobile"],
            icon: "🐦"
        },
        {
            id: 3,
            name: "The Blackout Challenge",
            category: "dangerous",
            era: "2020s",
            description: "Choking oneself to the point of passing out. Deprives the brain of oxygen, leading to potential brain damage or death.",
            status: "dead",
            origin: "TikTok",
            year: "2020-2022",
            tags: ["dangerous", "social"],
            icon: "⛔"
        },
        {
            id: 4,
            name: "CryptoKitties",
            category: "culture",
            era: "2010s",
            description: "The first mainstream blockchain game (2017) where users collected/traded unique digital cats. It became so popular it clogged the Ethereum network.",
            status: "alive",
            origin: "Blockchain/NFT",
            year: "2017-2018",
            tags: ["culture", "tech", "game"],
            icon: "🐱"
        },
        {
            id: 5,
            name: "The Skullbreaker Challenge",
            category: "dangerous",
            era: "2020s",
            description: "A prank where two people kick the legs out from a jumping third person, causing a dangerous backward fall.",
            status: "dead",
            origin: "TikTok",
            year: "2020",
            tags: ["dangerous"],
            icon: "💀"
        },
        {
            id: 6,
            name: "Planking",
            category: "social",
            era: "2010s",
            description: "Lying face down in unusual public places. Started as silly fun but escalated to dangerous heights, causing injuries from falls.",
            status: "dead",
            origin: "Social Media",
            year: "2011",
            tags: ["social", "challenge"],
            icon: "🛏️"
        },
        {
            id: 7,
            name: "The Cinnamon Challenge",
            category: "dangerous",
            era: "2010s",
            description: "Attempting to swallow a spoonful of dry cinnamon without water. The fine powder is easily inhaled, causing gagging and choking.",
            status: "dead",
            origin: "YouTube",
            year: "2012",
            tags: ["dangerous", "food"],
            icon: "🍂"
        },
        {
            id: 8,
            name: "Labubus Fashion",
            category: "culture",
            era: "2020s",
            description: "Monstrous (and adorable) plush toys from Pop Mart that became massive fashion bag charms on TikTok in 2025.",
            status: "alive",
            origin: "TikTok / Fashion",
            year: "2025",
            tags: ["culture", "fashion", "social"],
            icon: "👾"
        },
        {
            id: 9,
            name: "NyQuil Chicken",
            category: "dangerous",
            era: "2020s",
            description: "Cooking chicken in cough syrup. Boiling concentrates the medication, creating toxic fumes and dangerous food.",
            status: "dead",
            origin: "TikTok",
            year: "2022",
            tags: ["dangerous", "food"],
            icon: "🍗"
        },
        {
            id: 10,
            name: "The Benadryl Challenge",
            category: "dangerous",
            era: "2020s",
            description: "Taking large doses of the antihistamine to induce hallucinations. Leads to dangerous side effects like seizures and coma.",
            status: "dead",
            origin: "TikTok",
            year: "2020",
            tags: ["dangerous"],
            icon: "💊"
        },
        {
            id: 11,
            name: "Blue Whale Challenge",
            category: "dangerous",
            era: "2010s",
            description: "A manipulative 50-day 'game' escalating to self-harm and suicide. Targeted vulnerable teens online.",
            status: "dead",
            origin: "Social Media / Forums",
            year: "2016-2017",
            tags: ["dangerous", "social"],
            icon: "🐋"
        },
        {
            id: 12,
            name: "Mannequin Challenge",
            category: "social",
            era: "2010s",
            description: "A 2016 trend where people filmed themselves frozen in place like mannequins. A harmless, creative viral video trend.",
            status: "dead",
            origin: "Social Media",
            year: "2016",
            tags: ["social", "culture"],
            icon: "🗿"
        },
        {
            id: 13,
            name: "Tide Pod Challenge",
            category: "dangerous",
            era: "2010s",
            description: "Daring people to eat brightly colored, candy-like laundry detergent pods. Extremely toxic and led to poisonings.",
            status: "dead",
            origin: "YouTube / Social Media",
            year: "2017-2018",
            tags: ["dangerous"],
            icon: "🧼"
        },
        {
            id: 14,
            name: "AI Slop / Zombie Internet",
            category: "culture",
            era: "2020s",
            description: "The flood of AI-generated, low-quality content that clogs search and social feeds, creating a 'zombie internet'.",
            status: "alive",
            origin: "AI Proliferation",
            year: "2024-Present",
            tags: ["culture", "tech"],
            icon: "🤖"
        },
        {
            id: 15,
            name: "Sephora Kids Skincare",
            category: "social",
            era: "2020s",
            description: "Young girls mimicking elaborate adult skincare routines with harsh active ingredients, often causing skin damage.",
            status: "alive",
            origin: "TikTok / Beauty",
            year: "2024-2025",
            tags: ["social", "culture"],
            icon: "✨"
        },
        {
            id: 16,
            name: "Swatting",
            category: "dangerous",
            era: "2010s",
            description: "Making a false emergency call to send a SWAT team to someone's address. A dangerous 'prank' treated as a serious felony.",
            status: "alive",
            origin: "Gaming / Streaming",
            year: "2010s-Present",
            tags: ["dangerous", "crime"],
            icon: "🚔"
        },
        {
            id: 17,
            name: "2016 Nostalgia Trend",
            category: "culture",
            era: "2020s",
            description: "In 2026, users declared '2026 is the new 2016,' nostalgically revisiting the fashion, memes, and perceived unified culture.",
            status: "alive",
            origin: "Social Media",
            year: "2026",
            tags: ["culture", "social", "meta"],
            icon: "📼"
        },
        {
            id: 18,
            name: "Adobe Flash Websites",
            category: "culture",
            era: "2010s",
            description: "The dominant tool for creating interactive, animated websites. It was phased out by 2020 due to major security flaws and the rise of HTML5.",
            status: "dead",
            origin: "Web Design",
            year: "2000-2020",
            tags: ["culture", "tech"],
            icon: "⚡"
        },
        {
            id: 19,
            name: "Scrolling Marquee Text",
            category: "social",
            era: "2010s",
            description: "Text that scrolled horizontally across a webpage, often used on personal sites and early forums. Criticized for being distracting.",
            status: "dead",
            origin: "Web Design",
            year: "1990s-2000s",
            tags: ["social", "tech"],
            icon: "📜"
        },
        {
            id: 20,
            name: "Website Hit Counters",
            category: "culture",
            era: "2000s",
            description: "A public counter displayed on websites to show visitor numbers. They were often inaccurate and became a symbol of the early web.",
            status: "dead",
            origin: "Web Culture",
            year: "1990s-2000s",
            tags: ["culture", "tech"],
            icon: "🧮"
        },
        {
            id: 21,
            name: "Animated Cursors",
            category: "social",
            era: "2000s",
            description: "Custom, moving cursors (like sparkles or cartoon characters) for personal websites. A hallmark of extreme early-web customization.",
            status: "dead",
            origin: "Web Culture",
            year: "1990s-2000s",
            tags: ["social", "tech"],
            icon: "✨"
        },
        {
            id: 22,
            name: "Vine (6-Second Loops)",
            category: "social",
            era: "2010s",
            description: "A short-form video app where clips were exactly 6 seconds and looped. It spawned a unique creative culture before shutting down in 2017.",
            status: "dead",
            origin: "Social Media",
            year: "2013-2017",
            tags: ["social", "video"],
            icon: "🍇"
        },
        {
            id: 23,
            name: "Google+",
            category: "social",
            era: "2010s",
            description: "Google's attempt at a social network, launched in 2011. It struggled to gain traction and was shut down for consumers in 2019.",
            status: "dead",
            origin: "Social Media",
            year: "2011-2019",
            tags: ["social", "tech"],
            icon: "➕"
        },
        {
            id: 24,
            name: "FarmVille / Social Browser Games",
            category: "game",
            era: "2010s",
            description: "A wave of simple, repetitive games on Facebook that relied on asking friends for help. Defined the late 2000s/early 2010s social media experience.",
            status: "dead",
            origin: "Facebook Gaming",
            year: "2009-2012",
            tags: ["game", "social"],
            icon: "🚜"
        },
        {
            id: 25,
            name: "Pokémon GO Summer 2016",
            category: "game",
            era: "2010s",
            description: "An unprecedented global AR phenomenon where millions took to the streets. Its intense peak popularity was a unique cultural moment.",
            status: "dead",
            origin: "Mobile Gaming",
            year: "2016",
            tags: ["game", "culture"],
            icon: "🌍"
        },
        {
            id: 26,
            name: "Gangnam Style",
            category: "culture",
            era: "2010s",
            description: "The first YouTube video to reach 1 billion views. PSY's 2012 K-pop hit with its signature horse-riding dance became a true global phenomenon.",
            status: "dead",
            origin: "YouTube / Music",
            year: "2012",
            tags: ["culture", "music", "video"],
            icon: "🐴"
        },
        {
            id: 27,
            name: "Ice Bucket Challenge",
            category: "social",
            era: "2010s",
            description: "A viral fundraiser for ALS where people dumped ice water on themselves and nominated others. Raised over $220 million globally.",
            status: "dead",
            origin: "Social Media",
            year: "2014",
            tags: ["social", "charity"],
            icon: "🧊"
        },
        {
            id: 28,
            name: "Tamagotchi",
            category: "game",
            era: "1990s",
            description: "A portable digital pet from the 90s that required constant care (feeding, cleaning, playing). Created a global craze and schoolyard drama when pets 'died'.",
            status: "dead",
            origin: "Toys / Games",
            year: "1996-1998",
            tags: ["game", "culture"],
            icon: "🥚"
        },
        {
            id: 29,
            name: "Fidget Spinners",
            category: "culture",
            era: "2010s",
            description: "Small ball-bearing toys spun between fingers. Marketed for anxiety, they became a massive 2017 fad in schools before being banned by many teachers.",
            status: "dead",
            origin: "Toys",
            year: "2017",
            tags: ["culture", "toy"],
            icon: "🔄"
        },
        {
            id: 30,
            name: "The Harlem Shake",
            category: "social",
            era: "2010s",
            description: "A 30-second video meme format in 2013: one person dances alone, then cut to everyone in crazy costumes dancing wildly.",
            status: "dead",
            origin: "YouTube",
            year: "2013",
            tags: ["social", "dance", "video"],
            icon: "💃"
        },
        {
            id: 31,
            name: "Google Glass",
            category: "culture",
            era: "2010s",
            description: "Google's futuristic augmented reality glasses. Huge hype as a 'next big thing' in 2013-2014, but failed due to high price, limited use, and privacy concerns ('Glassholes').",
            status: "dead",
            origin: "Tech Hardware",
            year: "2013-2015",
            tags: ["culture", "tech"],
            icon: "👓"
        },
        {
            id: 32,
            name: "Pogs",
            category: "game",
            era: "1990s",
            description: "A playground game from the 90s involving collecting and slamming cardboard/caps. Players would win or lose each other's 'pog' collections.",
            status: "dead",
            origin: "Toys / Games",
            year: "1990-1995",
            tags: ["game", "toy"],
            icon: "⭕"
        },
        {
            id: 33,
            name: "Y2K Panic",
            category: "culture",
            era: "1990s",
            description: "Widespread fear that computer bugs at the turn of the year 2000 would cause global system failures (planes falling, banks crashing). Massive preparation, minimal actual impact.",
            status: "dead",
            origin: "Tech Culture",
            year: "1999-2000",
            tags: ["culture", "tech"],
            icon: "💻"
        },
        {
            id: 34,
            name: "Dabbing",
            category: "social",
            era: "2010s",
            description: "A dance move popularized around 2015 where one drops their head into the bent crook of a slinging arm. Became ubiquitous and then heavily mocked.",
            status: "dead",
            origin: "Hip-Hop / Social Media",
            year: "2015-2017",
            tags: ["social", "dance"],
            icon: "🙌"
        },
        {
            id: 35,
            name: "Pet Rock",
            category: "culture",
            era: "1970s",
            description: "A marketing fad of the 1970s: a regular rock sold in a custom box with a care manual. A commentary on consumerism that sold millions.",
            status: "dead",
            origin: "Toys / Marketing",
            year: "1975",
            tags: ["culture", "toy"],
            icon: "🪨"
        },
        {
            id: 36,
            name: "Pokémon Card Craze (1999)",
            category: "game",
            era: "1990s",
            description: "The first massive wave of Pokémon card collecting and trading in schools. Led to bans, fights, and a booming secondary market.",
            status: "dead",
            origin: "Toys / Games",
            year: "1999-2000",
            tags: ["game", "culture"],
            icon: "🃏"
        },
        {
            id: 37,
            name: "Silent Library",
            category: "social",
            era: "2010s",
            description: "A YouTube/vine trend where friends try to complete challenges in a 'library' without laughing or making noise, often ending in hilarious failure.",
            status: "dead",
            origin: "YouTube / MTV",
            year: "2010s",
            tags: ["social", "challenge"],
            icon: "📚"
        },
        {
            id: 38,
            name: "Silly Bandz",
            category: "culture",
            era: "2000s",
            description: "Rubber bands shaped like animals/objects that were worn as bracelets. A huge elementary/middle school trading fad around 2010, often banned by schools.",
            status: "dead",
            origin: "Toys / Fashion",
            year: "2008-2011",
            tags: ["culture", "toy", "fashion"],
            icon: "🦕"
        },
        {
            id: 39,
            name: "The Macarena",
            category: "culture",
            era: "1990s",
            description: "A Spanish dance song by Los Del Rio that became a global line-dance craze in 1995-1996. Played at virtually every wedding and school dance.",
            status: "dead",
            origin: "Music / Dance",
            year: "1995-1996",
            tags: ["culture", "dance", "music"],
            icon: "💃"
        },
        {
            id: 40,
            name: "VHS Tapes",
            category: "culture",
            era: "1980s",
            description: "The dominant home video format from the late 70s to early 2000s. Required rewinding, suffered from degradation, and were replaced by DVDs.",
            status: "dead",
            origin: "Tech / Media",
            year: "1976-2000s",
            tags: ["culture", "tech"],
            icon: "📼"
        },
        {
            id: 41,
            name: "Chat Roulette",
            category: "social",
            era: "2010s",
            description: "A website that randomly paired strangers worldwide for video chat. Briefly exploded in popularity in 2010 but became infamous for inappropriate content.",
            status: "dead",
            origin: "Web / Social",
            year: "2009-2011",
            tags: ["social", "tech"],
            icon: "🎰"
        },
        {
            id: 42,
            name: "Pokémon GO Fest 2017",
            category: "game",
            era: "2010s",
            description: "The first real-world Pokémon GO event in Chicago was a disaster due to technical glitches, leading to player riots and full refunds.",
            status: "dead",
            origin: "Mobile Gaming",
            year: "2017",
            tags: ["game", "fail"],
            icon: "🎪"
        },
        {
            id: 43,
            name: "Adobe Flash Websites",
            category: "culture",
            era: "2000s",
            description: "The dominant tool for animated, interactive websites in the 2000s. Required a special browser plugin and was notorious for security flaws, leading to its complete discontinuation by 2020[citation:5][citation:8].",
            status: "dead",
            origin: "Web Technology",
            year: "~2000-2020",
            tags: ["culture", "tech", "web"],
            icon: "⚡"
        },
        {
            id: 44,
            name: "Photo Dumps",
            category: "social",
            era: "2020s",
            description: "Casual, seemingly random collections of photos posted to social media. An 'anti-aesthetic' trend that became so mainstream it lost its meaning and felt overly curated by 2025[citation:9].",
            status: "dead",
            origin: "Instagram / Social Media",
            year: "Early 2020s",
            tags: ["social"],
            icon: "🗂️"
        },
        {
            id: 45,
            name: "AI-Generated Profile Avatars",
            category: "social",
            era: "2020s",
            description: "Using AI tools like Lensa to create stylized, artistic profile pictures. The trend peaked and saturated social feeds quickly before people moved on from the novelty[citation:9].",
            status: "dead",
            origin: "AI / Social Media",
            year: "2022-2023",
            tags: ["social", "tech"],
            icon: "🤖"
        },
        {
            id: 46,
            name: "BeReal for Brands",
            category: "social",
            era: "2020s",
            description: "Corporations and marketers attempting to use the authentic, unpolished 'BeReal' app format for promotions. Widely seen as inauthentic and cringeworthy, killing the trend[citation:9].",
            status: "dead",
            origin: "Marketing / BeReal",
            year: "2022-2024",
            tags: ["social", "marketing"],
            icon: "📱"
        },
        {
            id: 47,
            name: "Website Guestbooks",
            category: "culture",
            era: "1990s",
            description: "A staple of 1990s personal homepages where visitors could leave public comments. A hallmark of the decentralized, community-driven 'Old Web' that preceded social media[citation:5].",
            status: "dead",
            origin: "Old Web / GeoCities",
            year: "1990s",
            tags: ["culture", "web", "social"],
            icon: "📖"
        },
        {
            id: 48,
            name: "Webpage Hit Counters",
            category: "culture",
            era: "1990s",
            description: "A widget, often at the bottom of a site, displaying how many visitors a page had. A status symbol on personal homepages during the early internet[citation:5].",
            status: "dead",
            origin: "Old Web",
            year: "1990s",
            tags: ["culture", "tech"],
            icon: "👁️"
        },
        {
            id: 49,
            name: "TikTok 'Core' Aesthetics",
            category: "social",
            era: "2020s",
            description: "Hyper-specific, fast-cycling aesthetic trends like 'cottagecore', 'goblincore', or 'tomato girl'. They became recycled at 'meme speed' and faded quickly[citation:9].",
            status: "dead",
            origin: "TikTok",
            year: "Early 2020s",
            tags: ["social", "fashion"],
            icon: "🎭"
        },
        {
            id: 50,
            name: "Duck Face Selfies",
            category: "social",
            era: "2000s",
            description: "Puckering the lips in a exaggerated pout for photos. A ubiquitous and much-mocked posing trend of the late 2000s and early 2010s[citation:4].",
            status: "dead",
            origin: "MySpace / Early Social Media",
            year: "~2008-2013",
            tags: ["social"],
            icon: "🦆"
        },
        {
            id: 51,
            name: "Low-Rise Jeans",
            category: "culture",
            era: "2000s",
            description: "Extremely low-cut jeans that dominated early 2000s fashion. The trend faded due to widespread criticism over comfort and practicality[citation:4].",
            status: "dead",
            origin: "Fashion",
            year: "Early 2000s",
            tags: ["culture", "fashion"],
            icon: "👖"
        },
        {
            id: 52,
            name: "Jelly Shoes",
            category: "culture",
            era: "1980s/90s",
            description: "Transparent, PVC plastic shoes. A major fashion fad that caused blisters and saw a brief, unsuccessful attempted comeback[citation:4].",
            status: "dead",
            origin: "Fashion",
            year: "1980s, 2010s",
            tags: ["culture", "fashion"],
            icon: "👡"
        },
        {
            id: 53,
            name: "Frosted Tips Hair",
            category: "culture",
            era: "1990s",
            description: "A hairstyle where the ends of the hair are bleached lighter than the roots. A defining, later-mocked look of late 90s and boy band culture[citation:4].",
            status: "dead",
            origin: "Pop Culture",
            year: "Late 1990s",
            tags: ["culture", "fashion"],
            icon: "💇"
        },
        {
            id: 54,
            name: "Autoplay MIDI Music",
            category: "culture",
            era: "1990s",
            description: "Simple, synthesized instrumental tunes that would automatically play when you loaded a personal website. A defining (and often startling) feature of the 'Old Web'[citation:5].",
            status: "dead",
            origin: "Old Web / GeoCities",
            year: "1990s",
            tags: ["culture", "tech"],
            icon: "🎵"
        },
        {
            id: 55,
            name: "VHS Tapes",
            category: "culture",
            era: "1980s",
            description: "The dominant home video format before DVDs. They required rewinding, degraded in quality over time, and are now a symbol of retro media[citation:7].",
            status: "dead",
            origin: "Consumer Tech",
            year: "1970s-2000s",
            tags: ["culture", "tech"],
            icon: "📼"
        },
        {
            id: 56,
            name: "The Bottle Flip Challenge",
            category: "game",
            era: "2010s",
            description: "A viral challenge started by a high school student in 2016, where people tried to flip a plastic water bottle and land it upright[citation:7].",
            status: "dead",
            origin: "YouTube / Schools",
            year: "2016",
            tags: ["game", "challenge"],
            icon: "🧴"
        },
        {
            id: 57,
            name: "Hatchimals Craze",
            category: "culture",
            era: "2010s",
            description: "A toy frenzy in 2016 for interactive stuffed animals that 'hatched' from an egg. It was the must-have, hard-to-find gift of Christmas 2016[citation:7].",
            status: "dead",
            origin: "Toys / Holiday Season",
            year: "2016",
            tags: ["culture", "toy"],
            icon: "🐣"
        }
    ];

    // DOM Elements
    const archiveGrid = document.getElementById('archiveGrid');
    const trendCountEl = document.getElementById('trendCount');
    const featuredName = document.getElementById('featuredName');
    const featuredEra = document.getElementById('featuredEra');
    const featuredDesc = document.getElementById('featuredDesc');
    const featuredStatus = document.getElementById('featuredStatus');
    const featuredOrigin = document.getElementById('featuredOrigin');
    const featuredImage = document.getElementById('featuredImage');
    const featuredTags = document.getElementById('featuredTags');
    const randomizeBtn = document.getElementById('randomizeBtn');
    const categoryFilter = document.getElementById('categoryFilter');
    const yearFilter = document.getElementById('yearFilter');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const resetFilters = document.getElementById('resetFilters');
    const emptyState = document.getElementById('emptyState');

    // Initialize
    trendCountEl.textContent = trends.length;
    renderTrendCards(trends);
    setRandomFeaturedTrend();

    // Render Trend Cards
    function renderTrendCards(filteredTrends) {
        archiveGrid.innerHTML = '';
        emptyState.style.display = filteredTrends.length === 0 ? 'block' : 'none';
        
        filteredTrends.forEach(trend => {
            const card = document.createElement('article');
            card.className = 'trend-card';
            card.dataset.category = trend.category;
            card.dataset.era = trend.era;
            
            // Determine badge text
            let badgeText = '';
            if (trend.category === 'dangerous') badgeText = '⚠️ DANGER';
            else if (trend.status === 'dead') badgeText = '💀 DEAD TREND';
            
            // Generate tags HTML
            const tagsHtml = trend.tags.map(tag => {
                let tagClass = 'tag';
                if (tag === 'dangerous') tagClass += ' tag-danger';
                else if (tag === 'game') tagClass += ' tag-game';
                else if (tag === 'social') tagClass += ' tag-social';
                else if (tag === 'culture') tagClass += ' tag-culture';
                return `<span class="${tagClass}">${tag}</span>`;
            }).join('');
            
            card.innerHTML = `
                <div class="card-image">
                    <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:4rem;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);color:white;">
                        ${trend.icon}
                    </div>
                    ${badgeText ? `<div class="card-badge">${badgeText}</div>` : ''}
                </div>
                <div class="card-content">
                    <h3>${trend.name}</h3>
                    <p class="card-era"><i class="fas fa-calendar"></i> ${trend.year} | ${trend.era}</p>
                    <p class="card-desc">${trend.description}</p>
                    <div class="card-tags">
                        ${tagsHtml}
                        <span class="tag" style="background:${trend.status === 'dead' ? 'rgba(255,71,87,0.2)' : 'rgba(45,213,115,0.2)'};color:${trend.status === 'dead' ? '#ff4757' : '#2ed573'};">
                            ${trend.status === 'dead' ? '&#128128; Dead' : '&#x1F7E2; Alive'}
                        </span>
                    </div>
                </div>
            `;
            
            // Click to feature
            card.addEventListener('click', () => {
                setFeaturedTrend(trend);
                window.scrollTo({ top: document.getElementById('randomizer').offsetTop - 100, behavior: 'smooth' });
            });
            
            archiveGrid.appendChild(card);
        });
    }

    // Set Featured Trend
    function setFeaturedTrend(trend) {
        featuredName.textContent = trend.name;
        featuredEra.innerHTML = `<i class="fas fa-calendar"></i> Era: ${trend.era} (${trend.year})`;
        featuredDesc.textContent = trend.description;
        featuredStatus.innerHTML = trend.status === 'dead' 
            ? '&#128128; <span class="status-dead">Officially Dead</span>' 
            : '&#x1F7E2; <span class="status-alive">Still Lingering</span>';
        featuredOrigin.textContent = trend.origin;
        
        // Update image
        featuredImage.innerHTML = `
            <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:6rem;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);color:white;border-radius:15px;">
                ${trend.icon}
            </div>
        `;
        
        // Update tags
        featuredTags.innerHTML = '';
        trend.tags.forEach(tag => {
            const span = document.createElement('span');
            span.className = 'tag';
            if (tag === 'dangerous') span.className += ' tag-danger';
            else if (tag === 'game') span.className += ' tag-game';
            else if (tag === 'social') span.className += ' tag-social';
            else if (tag === 'culture') span.className += ' tag-culture';
            else span.className += ' tag';
            span.textContent = tag;
            featuredTags.appendChild(span);
        });
        
        // Add status tag
        const statusTag = document.createElement('span');
        statusTag.className = 'tag';
        statusTag.style.background = trend.status === 'dead' ? 'rgba(255,71,87,0.2)' : 'rgba(45,213,115,0.2)';
        statusTag.style.color = trend.status === 'dead' ? '#ff4757' : '#2ed573';
        statusTag.innerHTML = trend.status === 'dead' ? '&#128128; Dead' : '&#x1F7E2; Alive';
        featuredTags.appendChild(statusTag);
    }

    // Set Random Featured Trend
    function setRandomFeaturedTrend() {
        const randomTrend = trends[Math.floor(Math.random() * trends.length)];
        setFeaturedTrend(randomTrend);
    }

    // Filter Functions
    function filterTrends() {
        const category = categoryFilter.value;
        const era = yearFilter.value;
        const searchTerm = searchInput.value.toLowerCase();
        
        let filtered = trends.filter(trend => {
            const categoryMatch = category === 'all' || trend.category === category;
            const eraMatch = era === 'all' || trend.era === era;
            const searchMatch = searchTerm === '' || 
                trend.name.toLowerCase().includes(searchTerm) ||
                trend.description.toLowerCase().includes(searchTerm) ||
                trend.tags.some(tag => tag.includes(searchTerm));
            
            return categoryMatch && eraMatch && searchMatch;
        });
        
        renderTrendCards(filtered);
    }

    // Event Listeners
    randomizeBtn.addEventListener('click', setRandomFeaturedTrend);
    categoryFilter.addEventListener('change', filterTrends);
    yearFilter.addEventListener('change', filterTrends);
    searchInput.addEventListener('input', filterTrends);
    searchButton.addEventListener('click', filterTrends);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') filterTrends();
    });
    
    resetFilters.addEventListener('click', function() {
        categoryFilter.value = 'all';
        yearFilter.value = 'all';
        searchInput.value = '';
        filterTrends();
    });

    // Set random title
    const randomTitles = ["Relic of the Day", "Blast from the Past", "Digital Fossil", "Trend of the Day"];
    document.getElementById('randomTitle').textContent = randomTitles[Math.floor(Math.random() * randomTitles.length)];
    
    // Initialize filter
    filterTrends();
});
