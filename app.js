const Icon = new Vivus(
    'mySvg', {
        type: 'scenario',
        duration: 300
    }

);

function playGears() {
    Icon.stop().reset().play();
}