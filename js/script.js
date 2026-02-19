// System Interface Logic

console.log('System Profile Loaded: Georgin Thomas (S-Rank)');

function showSection(sectionId) {
    const displayArea = document.getElementById('dynamic-info');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Update Active Nav State
    navLinks.forEach(item => {
        item.classList.remove('active');
        // Simple check to match onclick, ideally use identifiers
        if (item.getAttribute('onclick').includes(sectionId)) {
            item.classList.add('active');
        }
    });

    displayArea.innerHTML = '';
    displayArea.classList.remove('fade-in');
    void displayArea.offsetWidth; // Trigger reflow
    displayArea.classList.add('fade-in');

    if (sectionId === 'about') {
        displayArea.innerHTML = `
            <p class="intro-p">
                I am a passionate and results-driven individual focused on the intersection of <strong>Full-Stack Development</strong> and <strong>Artificial Intelligence</strong>.
            </p>
            <p class="intro-p">
                Actively mastering the <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js) to build scalable web applications.
            </p>
            <div class="mini-stats">
                <span><strong>MERN</strong>: Mastered</span>
                <span><strong>DSA</strong>: 100+ Solved</span>
            </div>
        `;
    }
    else if (sectionId === 'projects') {
        displayArea.innerHTML = `
            <h3>Active Quests</h3>
            <div style="font-size: 1rem; margin-top: 10px;">
                <div style="margin-bottom: 15px; border-bottom: 1px solid rgba(139,0,0,0.3); padding-bottom: 5px;">
                    <strong style="color:white;">Warehouse Mgmt System</strong> 
                    <span style="float:right; color:green; font-size: 0.8rem;">[COMPLETED]</span>
                </div>
                <div style="margin-bottom: 15px; border-bottom: 1px solid rgba(139,0,0,0.3); padding-bottom: 5px;">
                    <strong style="color:white;">LunarLogic</strong> 
                    <span style="float:right; color:green; font-size: 0.8rem;">[COMPLETED]</span>
                </div>
                <div>
                     <strong style="color:white;">HealthLens</strong> 
                     <span style="float:right; color:orange; font-size: 0.8rem;">[IN PROGRESS]</span>
                </div>
            </div>
        `;
    }
    else if (sectionId === 'contact') {
        displayArea.innerHTML = `
             <h3>Send a Raven</h3>
             <form id="raven-form" onsubmit="handleRavenDispatch(event)" style="max-width: 400px;">
                <input type="text" name="entry.1514560068" placeholder="Your Name" required>
                <input type="email" name="entry.510649962" placeholder="Your Email" required>
                <textarea name="entry.344695963" placeholder="Message to the Monarch..." rows="3" required></textarea>
                <button class="btn-primary" type="submit">DISPATCH RAVEN</button>
             </form>
        `;
    }
    else if (sectionId === 'stats') {

        displayArea.innerHTML = `
            <h3>Player Status</h3>
            <p><strong>Job:</strong> Unemployed (Open to Work)</p>
            <p><strong>Title:</strong> Code Forger</p>
            <p><strong>Level:</strong> 24</p>
            <br>
            <p><strong>STR (MERN):</strong> 85/100</p>
            <p><strong>INT (AI/ML):</strong> 70/100</p>
            <p><strong>AGI (DSA):</strong> 90/100</p>
        `;
    }
    else if (sectionId === 'skills') {
        displayArea.innerHTML = `
            <h3>Skill Tree</h3>
            <p><strong>Languages:</strong> Java, Python, C++, JavaScript</p>
            <p><strong>Frameworks:</strong> React, Node.js, Express, MongoDB</p>
            <p><strong>Special:</strong> Machine Learning, Data Science</p>
            <p><strong>Tools:</strong> Git, AWS, Docker</p>
        `;
    }
}

function handleRavenDispatch(event) {
    event.preventDefault();

    const form = document.getElementById('raven-form');
    const formData = new FormData(form);

    // Google Form Action URL
    const actionUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc8xTQgOopPyhRVjA5pPj1HdzjbWFiIEyr3A_TLjKNwipHENw/formResponse";

    // Submit using fetch in no-cors mode
    fetch(actionUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    }).then(() => {
        // Show success popup
        const popup = document.getElementById('confirmation-popup');
        popup.classList.add('show');

        // Clear form
        form.reset();
    }).catch(err => {
        console.error('Error dispatching raven:', err);
        alert('The raven was intercepted! Please try again.');
    });
}

function closePopup() {
    const popup = document.getElementById('confirmation-popup');
    popup.classList.remove('show');
}

