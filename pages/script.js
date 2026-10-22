const pageDestinations = {
    rock: [
        'Rock/rwin_s.html',
        'Rock/rwin_g.html',
        'Rock/rlose_p.html',
        'Rock/rlose_rb.html',
        'Rock/rtie_.html'
    ],
    paper: [
        'Paper/pwin_r.html',
        'Paper/pwin_g.html',
        'Paper/plose_s.html',
        'Paper/plose_rb.html',
        'Paper/ptie_.html'
    ],
    scissors: [
        'Scissors/swin_p.html',
        'Scissors/swin_rb.html',
        'Scissors/slose_r.html',
        'Scissors/slose_g.html',
        'Scissors/stie_.html'
    ],
    rubberband: [
        'Rubber Band/rbwin_p.html',
        'Rubber Band/rbwin_r.html',
        'Rubber Band/rblose_s.html',
        'Rubber Band/rblose_g.html',
        'Rubber Band/rbtie_.html'
    ],
    glue: [
        'Glue/gwin_rb.html',
        'Glue/gwin_s.html',
        'Glue/glose_r.html',
        'Glue/glose_p.html',
        'Glue/gtie_.html'
    ],
    motivation: [
        'motivation_r.html',
        'motivation_p.html',
        'motivation_s.html',
        'motivation_rb.html',
        'motivation_g.html'
    ]
};

function goToRandomPage(category) {
    const pages = pageDestinations[category];
    
    if (pages && pages.length > 0) {
        const randomIndex = Math.floor(Math.random() * pages.length);
        const chosenPage = pages[randomIndex];
        
        
        if (category === 'motivation') {
            window.location.href = window.location.origin + '/pages/Motivation/' + chosenPage;
        } else {
        
            window.location.href = window.location.origin + '/pages/' + chosenPage;
        }
    }
}

function goHome() {
    window.location.href = window.location.origin + '/pages/index.html';
}