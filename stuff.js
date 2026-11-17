function MoveObj(image, leftPos, upPos, startPosLeft, startPosHeight){
    image.width = 100;
    image.height = 100;

    image.style.position = 'absolute';

    image.style.left = (startPosLeft + (image.width * leftPos * 0.41)).toString() + 'px';
    image.style.top = (startPosHeight + (image.height * upPos * 0.2355)).toString() + 'px';
}

function CreateSquare(url, size, height){
    for (let b = height; b > 0; b--){
        for (let i = 0; i < size; i++){
            for (let z = 0; z < size; z++){
                var image = new Image();

                image.src = url + "minecraft:cobblestone/render.png";

                MoveObj(image, i - z, i + (z) + b * 2, 100 * (size / 2), 0);

                document.body.appendChild(image);
            }
        }
    }
}

window.onload = function() {
    CreateSquare('https://blocksitems.com/api/v2/blocks/', 8, 4);
}