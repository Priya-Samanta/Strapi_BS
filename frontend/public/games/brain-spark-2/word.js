const words = [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flowers and plants"
    },
    {
        word: "position",
        hint: "Location of someone or something"
    },
    {
        word: "feather",
        hint: "Hair-like outer covering of a bird"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "tongue",
        hint: "The muscular organ in the mouth"
    },
    {
        word: "expansion",
        hint: "The process of increase or growth"
    },
    {
        word: "country",
        hint: "A politically identified region"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "The ability of the tongue to detect flavors"
    },
    {
        word: "store",
        hint: "A large shop where goods are traded"
    },
    {
        word: "field",
        hint: "An area of land for farming activities"
    },
    {
        word: "friend",
        hint: "A person other than a family member"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "A person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "A place containing a collection of books"
    },
    {
        word: "window",
        hint: "Transparent opening in a wall"
    },
    {
        word: "journey",
        hint: "Travel from one place to another"
    },
    {
        word: "courage",
        hint: "Brave and fearless attitude"
    },
    {
        word: "bicycle",
        hint: "Two-wheeled vehicle powered by pedals"
    },
    {
        word: "music",
        hint: "Art form consisting of sound and rhythm"
    },
    {
        word: "mountain",
        hint: "Large natural elevation of the earth's surface"
    },
    {
        word: "adventure",
        hint: "Exciting or daring experience"
    },
    {
        word: "sunshine",
        hint: "Direct sunlight or warmth from the sun"
    },
    {
        word: "knowledge",
        hint: "Information, facts, or skills acquired through experience or education"
    },
    {
        word: "happiness",
        hint: "State of being happy or joyful"
    },
    {
        word: "chocolate",
        hint: "Sweet food made from roasted and ground cacao beans"
    },
    {
        word: "river",
        hint: "Large natural flowing watercourse"
    },
    {
        word: "dream",
        hint: "Succession of images, ideas, emotions, or sensations during sleep"
    },
    {
        word: "laptop",
        hint: "Portable computer small enough to sit on a person's lap"
    },
    {
        word: "courage",
        hint: "Brave and fearless attitude"
    },
    {
        word: "forest",
        hint: "Large area covered predominantly with trees"
    },
    {
        word: "ocean",
        hint: "Vast body of saltwater that covers most of the Earth's surface"
    },
    {
        word: "laughter",
        hint: "Expression of joy or amusement"
    },
    {
        word: "rainbow",
        hint: "Optical and meteorological phenomenon with a spectrum of colors"
    },
    {
        word: "camera",
        hint: "Device used for capturing and recording images"
    },
    {
        word: "peace",
        hint: "State of harmony, absence of conflict"
    },
    {
        word: "coffee",
        hint: "Beverage brewed from roasted coffee beans"
    },
    {
        word: "butterfly",
        hint: "Insect with colorful wings and a slender body"
    },
    {
        word: "painting",
        hint: "Art form of applying paint to a surface"
    },
    {
        word: "star",
        hint: "Luminous sphere of plasma held together by gravity"
    },
    {
        word: "nature",
        hint: "Natural world and its phenomena"
    },
    {
        word: "adventure",
        hint: "Exciting or daring experience"
    },
    {
        word: "pencil",
        hint: "Writing instrument with a thin cylindrical graphite core"
    },
    {
        word: "smile",
        hint: "Facial expression showing happiness or pleasure"
    },
    {
        word: "universe",
        hint: "All existing matter, space, and energy"
    },
    {
        word: "moon",
        hint: "Natural satellite that orbits around a planet"
    },
    {
        word: "happiness",
        hint: "State of being happy or joyful"
    },
    {
        word: "chess",
        hint: "Strategy board game played by two players"
    },
    {
        word: "summer",
        hint: "Warmest season of the year"
    },
    {
        word: "book",
        hint: "Written or printed work consisting of pages bound together"
    },
    {
        word: "wisdom",
        hint: "Ability to discern and judge what is true, right, or lasting"
    },
    {
        word: "rain",
        hint: "Water falling from the clouds in droplets"
    },
    {
        word: "friendship",
        hint: "Relationship between two or more people who trust and support each other"
    },
    {
        word: "sunrise",
        hint: "Time when the sun appears above the horizon in the morning"
    },
    {
        word: "science",
        hint: "Systematic study of the natural world through observation and experimentation"
    },
    {
        word: "moonlight",
        hint: "Light from the moon at night"
    },
    {
        word: "beach",
        hint: "Sandy or pebbly shore by the ocean, sea, lake, or river"
    },
    {
        word: "adventure",
        hint: "Exciting or daring experience"
    },
    {
        word: "camera",
        hint: "Device used for capturing and recording images"
    },
    {
        word: "star",
        hint: "Luminous sphere of plasma held together by gravity"
    },
    {
        word: "peace",
        hint: "State of harmony, absence of conflict"
    },
    {
        word: "coffee",
        hint: "Beverage brewed from roasted coffee beans"
    },
    {
        word: "smile",
        hint: "Facial expression showing happiness or pleasure"
    },
    {
        word: "nature",
        hint: "Natural world and its phenomena"
    },
    {
        word: "adventure",
        hint: "Exciting or daring experience"
    },
    {
        word: "pencil",
        hint: "Writing instrument with a thin cylindrical graphite core"
    },
    {
        word: "smile",
        hint: "Facial expression showing happiness or pleasure"
    },
    {
        word: "universe",
        hint: "All existing matter, space, and energy"
    },
    {
        word: "moon",
        hint: "Natural satellite that orbits around a planet"
    },
    {
        word: "happiness",
        hint: "State of being happy or joyful"
    },
    {
        word: "chess",
        hint: "Strategy board game played by two players"
    },
    {
        word: "summer",
        hint: "Warmest season of the year"
    },
    {
        word: "book",
        hint: "Written or printed work consisting of pages bound together"
    },
    {
        word: "wisdom",
        hint: "Ability to discern and judge what is true, right, or lasting"
    },
    {
        word: "rain",
        hint: "Water falling from the clouds in droplets"
    },
    {
        word: "friendship",
        hint: "Relationship between two or more people who trust and support each other"
    },
    {
        word: "sunrise",
        hint: "Time when the sun appears above the horizon in the morning"
    },
    {
        word: "science",
        hint: "Systematic study of the natural world through observation and experimentation"
    },
    {
        word: "moonlight",
        hint: "Light from the moon at night"
    },
    {
        word: "beach",
        hint: "Sandy or pebbly shore by the ocean, sea, lake, or river"
    },
    {
        word: "adventure",
        hint: "Exciting or daring experience"
    },{
        word: "wonder",
        hint: "A feeling of amazement or curiosity"
    },
    {
        word: "harmony",
        hint: "A pleasing combination of different elements"
    },
    {
        word: "butterfly",
        hint: "Colorful insect with wings, often found in gardens"
    },
    {
        word: "innocence",
        hint: "Lack of guilt or wrongdoing"
    },
    {
        word: "laughter",
        hint: "The sound of joy or amusement"
    },
    {
        word: "peaceful",
        hint: "Calm and free from disturbance"
    },
    {
        word: "whisper",
        hint: "Speaking softly in hushed tones"
    },
    {
        word: "explore",
        hint: "To investigate or travel in search of new things"
    },
    {
        word: "memories",
        hint: "Recollections of past events and experiences"
    },
    {
        word: "discover",
        hint: "To find something for the first time"
    },
    {
        word: "happiness",
        hint: "State of being happy or joyful"
    },
    {
        word: "delight",
        hint: "Great pleasure or joy"
    },
    {
        word: "creative",
        hint: "Having the ability to produce new and imaginative things"
    },
    {
        word: "victory",
        hint: "The state of winning or triumphing"
    },
    {
        word: "sunrise",
        hint: "Time when the sun appears above the horizon in the morning"
    },
    {
        word: "moonlight",
        hint: "Light from the moon at night"
    },
    {
        word: "candle",
        hint: "A stick of wax with a wick that is burned to produce light"
    },
    {
        word: "fantasy",
        hint: "A world of the imagination or unreal elements"
    },
    {
        word: "brilliant",
        hint: "Exceptionally bright or talented"
    },
    {
        word: "journey",
        hint: "Travel from one place to another"
    },
    {
        word: "celebrate",
        hint: "To commemorate a special event with festivities"
    },
    {
        word: "storybook",
        hint: "A collection of stories, often for children"
    },
    {
        word: "harbor",
        hint: "A sheltered place for ships and boats"
    },
    {
        word: "glitter",
        hint: "Tiny, bright, and shiny particles"
    },
    {
        word: "chocolate",
        hint: "Sweet food made from roasted and ground cacao beans"
    },
    {
        word: "rainbow",
        hint: "Optical and meteorological phenomenon with a spectrum of colors"
    },
    {
        word: "camera",
        hint: "Device used for capturing and recording images"
    },
    {
        word: "dance",
        hint: "Rhythmic movement to music"
    },
    {
        word: "sunset",
        hint: "Time when the sun goes below the horizon in the evening"
    },
    {
        word: "friendship",
        hint: "Relationship between two or more people who trust and support each other"
    }
    
];
