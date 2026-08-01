const products = [
  // ═══ DISCORD ACC ═══
  { name: "3 Months Aged • Email & Phone Verified", desc: "Fresh Discord account, 3 months aged. Email and phone verified. Ready to use.", price: "€0.20", category: "Discord", stock: "1745", gradient: "linear-gradient(135deg, #5865F2, #7289DA)", icon: "D" },
  { name: "2018 Aged Account", desc: "Discord acc 2018.", price: "€3.10", category: "Discord", stock: "86", gradient: "linear-gradient(135deg, #5865F2, #4752c4)", icon: "D" },
  { name: "Discord Nitro Promo Code • 1 Month", desc: "Promo code for 1 month of Discord Nitro. Redeem on your account.", price: "€0.40", category: "Discord", stock: "0", gradient: "linear-gradient(135deg, #5865F2, #ff73fa)", icon: "D" },
  { name: "Discord Nitro Promo Code • 3 Months", desc: "Promo code for 3 months of Discord Nitro. Redeem on your account.", price: "€1.40", category: "Discord", stock: "20", gradient: "linear-gradient(135deg, #5865F2, #ff73fa)", icon: "D" },

  // ═══ SOCIAL MEDIA BOOSTING ═══
  { name: "TikTok 100 Views", desc: "100 views delivered to your TikTok video. Stackable for larger quantities.", price: "€0.20", category: "Social Media", stock: "Infinite", gradient: "linear-gradient(135deg, #ec4899, #f43f5e)", icon: "T" },
  { name: "TikTok 100 Likes", desc: "100 likes on your TikTok video. Stackable for larger quantities.", price: "€0.30", category: "Social Media", stock: "Infinite", gradient: "linear-gradient(135deg, #ec4899, #f43f5e)", icon: "T" },
  { name: "Instagram 100 Views", desc: "100 views on your Instagram video. Stackable for larger quantities.", price: "€0.20", category: "Social Media", stock: "Infinite", gradient: "linear-gradient(135deg, #ec4899, #f59e0b)", icon: "I" },
  { name: "Instagram 100 Likes", desc: "100 likes on your Instagram post. Stackable for larger quantities.", price: "€0.30", category: "Social Media", stock: "Infinite", gradient: "linear-gradient(135deg, #ec4899, #f59e0b)", icon: "I" },
  { name: "Instagram 100 Followers", desc: "100 followers delivered to your Instagram account. Stackable.", price: "€0.45", category: "Social Media", stock: "Infinite", gradient: "linear-gradient(135deg, #ec4899, #f59e0b)", icon: "I" },
  { name: "YouTube 100 Views", desc: "100 views on your YouTube video. Stackable for larger quantities.", price: "€0.20", category: "Social Media", stock: "Infinite", gradient: "linear-gradient(135deg, #ef4444, #f43f5e)", icon: "Y" },
  { name: "YouTube 1000 Likes", desc: "1000 likes on your YouTube video. Stackable.", price: "€0.35", category: "Social Media", stock: "Infinite", gradient: "linear-gradient(135deg, #ef4444, #f43f5e)", icon: "Y" },
  { name: "YouTube 100 Subs", desc: "100 subscribers delivered to your YouTube channel. Stackable.", price: "€0.75", category: "Social Media", stock: "Infinite", gradient: "linear-gradient(135deg, #ef4444, #f43f5e)", icon: "Y" },

  // ═══ METHODS ═══
  { name: "Darkweb Email Provider", desc: "Access to a private darkweb email provider. Anonymous, secure, no logs.", price: "€10.00", category: "Methods", stock: "Infinite", gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)", icon: "M" },
  { name: "Z.ai Bypass / Jailbreak", desc: "Working bypass and jailbreak method for Z.ai. Full access unlocked.", price: "€5.00", category: "Methods", stock: "Infinite", gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)", icon: "M" },
  { name: "Opus 4.8 Premium Prompt Bypass", desc: "Premium prompt bypass for Opus 4.8. Never seen before.", price: "€6.00", category: "Methods", stock: "Infinite", gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)", icon: "M" },
  { name: "Grok Jailbreak", desc: "Full jailbreak method for Grok. Unlocks restricted capabilities.", price: "€6.00", category: "Methods", stock: "Infinite", gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)", icon: "M" },
  { name: "Deepseek Jailbreak / Bypass", desc: "Working bypass for Deepseek restrictions.", price: "€2.00", category: "Methods", stock: "Infinite", gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)", icon: "M" },
  { name: "Private Forum Invite", desc: "Invite to a private forum. Exclusive community, limited access.", price: "€30.00", category: "Methods", stock: "3", gradient: "linear-gradient(135deg, #6366f1, #4f46e5)", icon: "M" },
  { name: "Every Game for Free + Classic Games", desc: "Safe and tested method to get every game for free, including classics. Full guide included.", price: "€8.00", category: "Methods", stock: "Infinite", gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)", icon: "M" },
  { name: "IP Str3ss Site Access", desc: "Access to an IP stress testing site. You will need to pay for the service itself.", price: "€2.00", category: "Methods", stock: "Infinite", gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)", icon: "M" },
  { name: "NoLog Residential Proxy Site", desc: "Premium residential proxy site with no logging. High quality and reliable.", price: "€5.00", category: "Methods", stock: "Infinite", gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)", icon: "M" },
  { name: "WW Za Carts Site", desc: "High quality, stealthy and reliable worldwide carts site..", price: "€15.00", category: "Methods", stock: "Infinite", gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)", icon: "M" },
  { name: "Best 1-on-1 Clothing WW Shipping", desc: "Worldwide shipping site and method for 1-on-1 clothing. Easy money maker.", price: "€25.00", category: "Methods", stock: "Infinite", gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)", icon: "M" },
  { name: "Hidden Cybersec / Pentest Site", desc: "Hidden site with every modern malware and pentest/cybersec tool. Always latest versions.", price: "€18.00", category: "Methods", stock: "10", gradient: "linear-gradient(135deg, #6366f1, #4f46e5)", icon: "M" },
  { name: "Unpatched Free Nitro Method", desc: "Working, unpatched method for free Discord Nitro. Step-by-step guide.", price: "€5.00", category: "Methods", stock: "Infinite", gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)", icon: "M" },

  // ═══ GAMBLING ═══
  { name: "Stake 2-Step Verification", desc: "2-step verification setup for Stake.", price: "€2.00", category: "Gambling", stock: "15", gradient: "linear-gradient(135deg, #f59e0b, #ef4444)", icon: "G" },

  // ═══ GAMING ═══
  { name: "Epic Games 200–350 Games (NFA)", desc: "Epic Games account with 200–350 games. Non-full access.", price: "€1.00", category: "Gaming", stock: "12", gradient: "linear-gradient(135deg, #10b981, #06b6d4)", icon: "G" },
  { name: "Epic Games 350+ Games (NFA)", desc: "Epic Games account with 350+ games. Non-full access.", price: "€2.40", category: "Gaming", stock: "8", gradient: "linear-gradient(135deg, #10b981, #06b6d4)", icon: "G" },
  { name: "GTA V Premium (FA)", desc: "Grand Theft Auto V Premium edition. Full access account.", price: "€8.00", category: "Gaming", stock: "5", gradient: "linear-gradient(135deg, #10b981, #06b6d4)", icon: "G" },
  { name: "Minecraft (FA)", desc: "Minecraft Java account. Full access, change email and password.", price: "€6.00", category: "Gaming", stock: "17", gradient: "linear-gradient(135deg, #10b981, #06b6d4)", icon: "G" },
  { name: "DayZ (FA)", desc: "DayZ standalone account. Full access.", price: "€2.00", category: "Gaming", stock: "39", gradient: "linear-gradient(135deg, #10b981, #06b6d4)", icon: "G" },
  { name: "EA FC 26 (FA)", desc: "EA Sports FC 26 account. Full access. Latest edition.", price: "€9.00", category: "Gaming", stock: "2", gradient: "linear-gradient(135deg, #10b981, #06b6d4)", icon: "G" },
  { name: "CS2 Prime 0–300 Hours (FA)", desc: "CS2 Prime account, 0–300 hours. Full access. Clean account.", price: "€11.00", category: "Gaming", stock: "10", gradient: "linear-gradient(135deg, #10b981, #06b6d4)", icon: "G" },
  { name: "CS2 Prime 1100–4000 Hours (FA)", desc: "CS2 Prime account, 1100–4000 hours. Full access. High playtime.", price: "€25.00", category: "Gaming", stock: "10", gradient: "linear-gradient(135deg, #10b981, #06b6d4)", icon: "G" },
  { name: "1k Robux", desc: "1000 Robux delivered to your account. Stackable for larger amounts.", price: "€11.00", category: "Gaming", stock: "Any", gradient: "linear-gradient(135deg, #10b981, #06b6d4)", icon: "G" },

  // ═══ VALORANT ═══
  { name: "EU — Level 1-20 • 1000–2000VP (FA)", desc: "Valorant EU account, level 1-20, 1000–2000 VP inventory. Full access.", price: "€12.00", category: "Valorant", stock: "38", gradient: "linear-gradient(135deg, #ff4655, #ff6b6b)", icon: "V" },
  { name: "EU — Level 40-100 • 3000–10000VP (FA)", desc: "Valorant EU account, level 40-100, 3000–10000 VP inventory. Full access.", price: "€22.00", category: "Valorant", stock: "4", gradient: "linear-gradient(135deg, #ff4655, #ff6b6b)", icon: "V" },
  { name: "EU — Level 50-200 • 5000–20000VP (FA)", desc: "Valorant EU account, level 50-200, 5000–20000 VP inventory. Full access.", price: "€35.00", category: "Valorant", stock: "7", gradient: "linear-gradient(135deg, #ff4655, #ff6b6b)", icon: "V" },
  { name: "3630 VP", desc: "3630 Valorant Points delivered to your account. Account info required.", price: "€32.00", category: "Valorant", stock: "Infinite", gradient: "linear-gradient(135deg, #ff4655, #c43d4b)", icon: "V" },
  { name: "7200 VP", desc: "7200 Valorant Points delivered to your account. Account info required.", price: "€62.00", category: "Valorant", stock: "Infinite", gradient: "linear-gradient(135deg, #ff4655, #c43d4b)", icon: "V" },
  { name: "10500 VP", desc: "10500 Valorant Points delivered to your account. Account info required.", price: "€89.00", category: "Valorant", stock: "Infinite", gradient: "linear-gradient(135deg, #ff4655, #c43d4b)", icon: "V" },

  // ═══ MINECRAFT ═══
  { name: "Best Duping Mod — Latest Version", desc: "Link to the best Minecraft duping mod. Always updated to the latest version.", price: "€1.00", category: "Minecraft", stock: "Infinite", gradient: "linear-gradient(135deg, #22c55e, #16a34a)", icon: "M" },
  { name: "Best Hacked Client — Universal", desc: "Link to the best Minecraft hacked client. Universal version, works on all versions.", price: "€1.00", category: "Minecraft", stock: "Infinite", gradient: "linear-gradient(135deg, #22c55e, #16a34a)", icon: "M" },

  // ═══ FORTNITE ═══
  { name: "5k–7k V-Bucks (FA)", desc: "Fortnite account with 5000–7000 V-Bucks. Full access.", price: "€17.50", category: "Fortnite", stock: "6", gradient: "linear-gradient(135deg, #a855f7, #d946ef)", icon: "F" },
  { name: "800–1200 V-Bucks (FA)", desc: "Fortnite account with 800–1200 V-Bucks. Full access.", price: "€6.00", category: "Fortnite", stock: "42", gradient: "linear-gradient(135deg, #a855f7, #d946ef)", icon: "F" },
  { name: "Black Knight + 50–250 Skins (FA)", desc: "Fortnite account with Black Knight and 50–250 skins. Full access. OG account.", price: "€90.00", category: "Fortnite", stock: "8", gradient: "linear-gradient(135deg, #a855f7, #7c3aed)", icon: "F" },
  { name: "100–250 Skins • Tryhard Only (FA)", desc: "Fortnite account with 100–250 skins. Tryhard account. Full access.", price: "€17.00", category: "Fortnite", stock: "4", gradient: "linear-gradient(135deg, #a855f7, #d946ef)", icon: "F" },
  { name: "Travis Scott + 100–250 Skins (FA)", desc: "Fortnite account with Travis Scott skin and 100–250 skins. Full access.", price: "€60.00", category: "Fortnite", stock: "6", gradient: "linear-gradient(135deg, #a855f7, #7c3aed)", icon: "F" },

  // ═══ STREAMING ═══
  { name: "Netflix — No Ads, No VPN (NFA)", desc: "Netflix premium account. No ads, no VPN required. Non-full access.", price: "€1.00", category: "Streaming", stock: "1360", gradient: "linear-gradient(135deg, #e50914, #b91c1c)", icon: "N" },
  { name: "Disney+ — Lifetime (NFA)", desc: "Disney+ lifetime account. Non-full access. One-time payment.", price: "€0.30", category: "Streaming", stock: "51", gradient: "linear-gradient(135deg, #e50914, #7c3aed)", icon: "D" },
  { name: "Paramount+ — USA (FA)", desc: "Paramount+ USA account. Full access.", price: "€0.50", category: "Streaming", stock: "156", gradient: "linear-gradient(135deg, #e50914, #0891b2)", icon: "P" },
  { name: "ChatGPT Plus (FA)", desc: "ChatGPT Plus account. Full access. GPT-4 capabilities.", price: "€8.00", category: "Streaming", stock: "26", gradient: "linear-gradient(135deg, #10a37f, #1a7f64)", icon: "C" },
  { name: "CapCut Pro — Lifetime (FA)", desc: "CapCut Pro lifetime subscription. Full access.", price: "€1.00", category: "Streaming", stock: "129", gradient: "linear-gradient(135deg, #e50914, #f59e0b)", icon: "C" },
  { name: "Duolingo Premium", desc: "Duolingo Super/Premium account. Full language access.", price: "€0.80", category: "Streaming", stock: "152", gradient: "linear-gradient(135deg, #58cc02, #38a700)", icon: "D" },
  { name: "HBO Max (NFA)", desc: "HBO Max streaming account. Non-full access.", price: "€1.00", category: "Streaming", stock: "100", gradient: "linear-gradient(135deg, #e50914, #7c2d12)", icon: "H" },
  { name: "NBA (NFA)", desc: "NBA League Pass account. Non-full access.", price: "€1.00", category: "Streaming", stock: "100", gradient: "linear-gradient(135deg, #e50914, #1e3a8a)", icon: "N" },
  { name: "Spotify Premium (FA)", desc: "Spotify Premium account. Full access. Ad-free music.", price: "€6.00", category: "Streaming", stock: "9", gradient: "linear-gradient(135deg, #1DB954, #1ed760)", icon: "S" },

  // ═══ TWITCH ═══
  { name: "Twitch 500 Followers (FA)", desc: "Twitch account with 500 followers. Full access.", price: "€2.00", category: "Twitch", stock: "28", gradient: "linear-gradient(135deg, #9146ff, #a855f7)", icon: "T" },
  { name: "Twitch 2,000+ Followers (FA)", desc: "Twitch account with 2,000+ followers. Full access.", price: "€4.00", category: "Twitch", stock: "20", gradient: "linear-gradient(135deg, #9146ff, #a855f7)", icon: "T" },
  { name: "Twitch 5,000+ Followers (FA)", desc: "Twitch account with 5,000+ followers. Full access.", price: "€8.00", category: "Twitch", stock: "23", gradient: "linear-gradient(135deg, #9146ff, #a855f7)", icon: "T" },
  { name: "Twitch 10,000+ Followers (FA)", desc: "Twitch account with 10,000+ followers. Full access. High value.", price: "€14.00", category: "Twitch", stock: "12", gradient: "linear-gradient(135deg, #9146ff, #7c3aed)", icon: "T" },

  // ═══ VPN ═══
  { name: "Mullvad VPN", desc: "Mullvad VPN access. Anonymous, no account required.", price: "€3.20", category: "VPN", stock: "27", gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)", icon: "V" },
  { name: "NordVPN Premium (NFA)", desc: "NordVPN Premium account. Non-full access. Top-tier protection.", price: "€0.90", category: "VPN", stock: "123", gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)", icon: "V" },
  { name: "CyberGhost — 1 Year (NFA)", desc: "CyberGhost VPN, 1 year subscription. Non-full access.", price: "€0.90", category: "VPN", stock: "522", gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)", icon: "V" },
  { name: "IPVanish — 1 Year (NFA)", desc: "IPVanish VPN, 1 year subscription. Non-full access.", price: "€1.00", category: "VPN", stock: "98", gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)", icon: "V" }
];

const DISCORD_LINK = "https://discord.gg/AXYrRzeJar";
