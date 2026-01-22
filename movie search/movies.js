const movies = [
    // --- MODERN BLOCKBUSTERS (⅓) ---
    {
        title: "Dune",
        year: 2021,
        genre: "Sci-Fi",
        poster: "https://image.tmdb.org/t/p/w342/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        alt: "Dune movie poster",
        plot: "A gifted young man must travel to a dangerous planet to secure his family's future."
    },
    {
        title: "Dune: Part Two",
        year: 2024,
        genre: "Sci-Fi",
        poster: "https://image.tmdb.org/t/p/w342/1pdfQWqHjP8Z3wgn5ZlY06uL2vF.jpg",
        alt: "Dune Part Two movie poster",
        plot: "Paul Atreides unites with the Fremen to wage war against House Harkonnen."
    },
    {
        title: "Oppenheimer",
        year: 2023,
        genre: "Drama",
        poster: "https://image.tmdb.org/t/p/w342/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
        alt: "Oppenheimer movie poster",
        plot: "The story of J. Robert Oppenheimer and the creation of the atomic bomb."
    },
    {
        title: "Barbie",
        year: 2023,
        genre: "Comedy",
        poster: "https://image.tmdb.org/t/p/w342/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
        alt: "Barbie movie poster",
        plot: "Barbie and Ken explore the real world after leaving Barbie Land."
    },
    {
        title: "Spider-Man: No Way Home",
        year: 2021,
        genre: "Action",
        poster: "https://image.tmdb.org/t/p/w342/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        alt: "Spider-Man No Way Home movie poster",
        plot: "Spider-Man faces multiverse chaos when old villains return."
    },
    {
        title: "The Batman",
        year: 2022,
        genre: "Action",
        poster: "https://image.tmdb.org/t/p/w342/74xTEgt7R36Fpooo50r9T25onhq.jpg",
        alt: "The Batman movie poster",
        plot: "Batman investigates a series of murders linked to Gotham's corruption."
    },
    {
        title: "Top Gun: Maverick",
        year: 2022,
        genre: "Action",
        poster: "https://image.tmdb.org/t/p/w342/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
        alt: "Top Gun Maverick movie poster",
        plot: "Maverick trains a new generation of fighter pilots for a dangerous mission."
    },
    {
        title: "Godzilla Minus One",
        year: 2023,
        genre: "Action",
        poster: "https://image.tmdb.org/t/p/w342/2YqZ6IyFk7menirwziJvfoVvSOh.jpg",
        alt: "Godzilla Minus One movie poster",
        plot: "Postwar Japan faces a terrifying new threat: Godzilla."
    },
    {
        title: "Mission: Impossible – Dead Reckoning",
        year: 2023,
        genre: "Action",
        poster: "https://image.tmdb.org/t/p/w342/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
        alt: "Mission Impossible Dead Reckoning movie poster",
        plot: "Ethan Hunt races to stop a rogue AI from threatening the world."
    },
    {
        title: "Black Panther: Wakanda Forever",
        year: 2022,
        genre: "Action",
        poster: "https://image.tmdb.org/t/p/w342/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
        alt: "Black Panther Wakanda Forever movie poster",
        plot: "The people of Wakanda fight to protect their nation after King T’Challa’s death."
    },

    // --- STREAMING HITS (⅓) ---
    {
        title: "Extraction",
        year: 2020,
        genre: "Action",
        poster: "https://image.tmdb.org/t/p/w342/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg",
        alt: "Extraction movie poster",
        plot: "A mercenary is hired to rescue a kidnapped boy in Bangladesh."
    },
    {
        title: "Extraction 2",
        year: 2023,
        genre: "Action",
        poster: "https://image.tmdb.org/t/p/w342/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
        alt: "Extraction 2 movie poster",
        plot: "Tyler Rake returns for another high-stakes rescue mission."
    },
    {
        title: "Bird Box",
        year: 2018,
        genre: "Horror",
        poster: "https://image.tmdb.org/t/p/w342/rGfGfgL2pEPCfhIvqHXieXFn7gp.jpg",
        alt: "Bird Box movie poster",
        plot: "A mother must protect her children from unseen creatures."
    },
    {
        title: "The Gray Man",
        year: 2022,
        genre: "Action",
        poster: "https://image.tmdb.org/t/p/w342/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg",
        alt: "The Gray Man movie poster",
        plot: "A CIA assassin becomes the target of a global manhunt."
    },
    {
        title: "Red Notice",
        year: 2021,
        genre: "Comedy",
        poster: "https://image.tmdb.org/t/p/w342/wdE6ewaKZHr62bLqCn7A2DiGShm.jpg",
        alt: "Red Notice movie poster",
        plot: "An FBI profiler teams up with a thief to catch an even bigger criminal."
    },
    {
        title: "Glass Onion",
        year: 2022,
        genre: "Mystery",
        poster: "https://image.tmdb.org/t/p/w342/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg",
        alt: "Glass Onion movie poster",
        plot: "Detective Benoit Blanc investigates a murder on a billionaire's private island."
    },
    {
        title: "Don't Look Up",
        year: 2021,
        genre: "Comedy",
        poster: "https://image.tmdb.org/t/p/w342/th4E1yqsE8DGpAseLiUrI60Hf8V.jpg",
        alt: "Don't Look Up movie poster",
        plot: "Two astronomers warn the world about a planet-killing comet."
    },
    {
        title: "The Irishman",
        year: 2019,
        genre: "Crime",
        poster: "https://image.tmdb.org/t/p/w342/mbm8k3GFhXS0ROd9AD1gqYbIFbM.jpg",
        alt: "The Irishman movie poster",
        plot: "A hitman reflects on his life working for the mob."
    },
    {
        title: "The Tomorrow War",
        year: 2021,
        genre: "Sci-Fi",
        poster: "https://image.tmdb.org/t/p/w342/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg",
        alt: "The Tomorrow War movie poster",
        plot: "A man is drafted to fight a future war against alien invaders."
    },
    {
        title: "The Old Guard",
        year: 2020,
        genre: "Action",
        poster: "https://image.tmdb.org/t/p/w342/cjr4NWURcVN3gW5FlHeabgBHLcN.jpg",
        alt: "The Old Guard movie poster",
        plot: "A group of immortal warriors fight to keep their identity secret."
    },

    // --- AWARD WINNERS / CRITICALLY ACCLAIMED (⅓) ---
    {
        title: "Parasite",
        year: 2019,
        genre: "Drama",
        poster: "https://image.tmdb.org/t/p/w342/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        alt: "Parasite movie poster",
        plot: "A poor family infiltrates a wealthy household with unexpected consequences."
    },
    {
        title: "Whiplash",
        year: 2014,
        genre: "Drama",
        poster: "https://image.tmdb.org/t/p/w342/oPxnRhyAIzJKGUEdSiwTJQBa3NM.jpg",
        alt: "Whiplash movie poster",
        plot: "A young drummer faces abuse from a ruthless music instructor."
    },
    {
        title: "Moonlight",
        year: 2016,
        genre: "Drama",
        poster: "https://image.tmdb.org/t/p/w342/4911k3yRkJY7fG8P0G8pO09wZpB.jpg",
        alt: "Moonlight movie poster",
        plot: "A young Black man grapples with identity and sexuality."
    },
    {
        title: "The Social Network",
        year: 2010,
        genre: "Drama",
        poster: "https://image.tmdb.org/t/p/w342/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
        alt: "The Social Network movie poster",
        plot: "The rise of Facebook and the lawsuits that followed."
    },
    {
        title: "La La Land",
        year: 2016,
        genre: "Romance",
        poster: "https://image.tmdb.org/t/p/w342/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
        alt: "La La Land movie poster",
        plot: "A musician and an actress fall in love while chasing their dreams."
    },
    {
        title: "The Revenant",
        year: 2015,
        genre: "Adventure",
        poster: "https://image.tmdb.org/t/p/w342/oXUWEc5i3wYyFnL1Ycu8ppxxPvs.jpg",
        alt: "The Revenant movie poster",
        plot: "A frontiersman fights for survival after being left for dead."
    },
    {
        title: "Spotlight",
        year: 2015,
        genre: "Drama",
        poster: "https://image.tmdb.org/t/p/w342/6JQO9FZJN0p1U1f0m3O2kGZp2jW.jpg",
        alt: "Spotlight movie poster",
        plot: "Journalists uncover a massive scandal within the Catholic Church."
    },
    {
        title: "Nomadland",
        year: 2020,
        genre: "Drama",
        poster: "https://image.tmdb.org/t/p/w342/66GUmWpTHgAjyp4aBSXy63PZTiC.jpg",
        alt: "Nomadland movie poster",
        plot: "A woman embarks on a journey through the American West as a modern-day nomad."
    },
    {
        title: "Everything Everywhere All at Once",
        year: 2022,
        genre: "Sci-Fi",
        poster: "https://image.tmdb.org/t/p/w342/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
        alt: "Everything Everywhere All at Once movie poster",
        plot: "A woman must connect with versions of herself across the multiverse."
    },
    {
        title: "The Shape of Water",
        year: 2017,
        genre: "Fantasy",
        poster: "https://image.tmdb.org/t/p/w342/k4YbXk5veV0VbY6rJrLq8l9Qd1V.jpg",
        alt: "The Shape of Water movie poster",
        plot: "A mute woman forms a bond with a mysterious aquatic creature."
    }
];