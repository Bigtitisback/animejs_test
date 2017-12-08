var anime = anime.timeline();

anime
    .add({
        targets: '.animeDiv .squareToDot',
        translateX: 250,
        rotate: 180,
        borderRadius: {
            value: ['0px', '100px'],
            duration: 500,
            easing: 'easeInOutQuad'
        },
        duration: 2000
    })
    .add({
        targets: '.animeDiv .squareToDot',
        translateX: 250,
        translateY: 250,
        rotate: {
            value: 360,
            duration: 1500
        },
        borderRadius: {
            value: ['100px', '0px'],
            duration: 250,
            easing: 'easeInOutQuad'
        },
        duration: 2000
    });
    
