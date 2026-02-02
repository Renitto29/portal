const db = require('./database');

const statsData = [
    { label: 'Faculty Members', value: '45+' },
    { label: 'Publications', value: '120+' },
    { label: 'Research Areas', value: '15+' },
    { label: 'Awards', value: '50+' }
];

const facultyData = [
    {
        name: 'Prof.R.Deepika',
        role: 'Professor, CSE',
        description: 'Expert in neural networks and deep learning applications. PhD from IIT Madras.',
        achievement_badge: '5 Publications',
        image_path: 'images/staff deepika mam.jpeg'
    },
    {
        name: 'Asst Prof.U.Tharani Chitra',
        role: 'Associate Professor, Networking',
        description: 'Specialized in network security and cryptography. Recipient of Best Researcher Award 2022.',
        achievement_badge: 'Award Winner',
        image_path: 'images/tharani chitra mam.jpeg'
    },
    {
        name: 'Dr. Arun Mishra',
        role: 'Professor, Data Science',
        description: 'Pioneer in big data analytics with industry collaborations. Head of Data Science Research Center.',
        achievement_badge: '3 Patents',
        image_path: 'images/kavitha mam.jpeg'
    }
];

const achievementsData = [
    {
        title: 'NSF Grant Awarded for AI Research',
        description: 'Dr. Meena and team secured $500,000 grant for developing ethical AI frameworks for healthcare applications.',
        date: 'June 15, 2023',
        type: 'Research' // Mapped to bg-success
    },
    {
        title: 'Best Paper Award at IEEE Conference',
        description: 'PhD student Anjali Patel won best paper award for her research on quantum computing algorithms.',
        date: 'May 28, 2023',
        type: 'Award' // Mapped to bg-warning
    }
];

function seed() {
    db.serialize(() => {
        // Clear existing data
        db.run("DELETE FROM stats");
        db.run("DELETE FROM faculty");
        db.run("DELETE FROM achievements");

        // Insert Stats
        const stmtStats = db.prepare("INSERT INTO stats (label, value) VALUES (?, ?)");
        statsData.forEach(item => {
            stmtStats.run(item.label, item.value);
        });
        stmtStats.finalize();

        // Insert Faculty
        const stmtFaculty = db.prepare("INSERT INTO faculty (name, role, description, achievement_badge, image_path) VALUES (?, ?, ?, ?, ?)");
        facultyData.forEach(item => {
            stmtFaculty.run(item.name, item.role, item.description, item.achievement_badge, item.image_path);
        });
        stmtFaculty.finalize();

        // Insert Achievements
        const stmtAchievements = db.prepare("INSERT INTO achievements (title, description, date, type) VALUES (?, ?, ?, ?)");
        achievementsData.forEach(item => {
            stmtAchievements.run(item.title, item.description, item.date, item.type);
        });
        stmtAchievements.finalize();

        console.log('Database seeded successfully.');
    });
}

// Allow time for table creation if running immediately after db init
setTimeout(seed, 1000);
