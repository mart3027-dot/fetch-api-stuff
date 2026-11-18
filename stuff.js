function MoveObj(image, leftPos, upPos, startPosLeft, startPosHeight) {
    image.width = 100;
    image.height = 100;

    image.style.position = 'absolute';

    image.style.left = (startPosLeft + (image.width * leftPos * 0.41)).toString() + 'px';
    image.style.top = (startPosHeight + (image.height * upPos * 0.2355)).toString() + 'px';
}

function Eval(url, image, b) {
    if (b == 1) {
        image.src = url + "minecraft:grass_block/render.png";
    }
    else if (b < 4) {
        image.src = url + "minecraft:dirt/render.png";
    }
    else if (b < 8) {
        if (Math.random() > 0.2) {
            if (Math.random() > 0.05) {
                image.src = image.src = url + "minecraft:stone/render.png";
            }
            else {
                image.src = image.src = url + "minecraft:coal_ore/render.png";
            }
        }
        else {
            image.src = image.src = url + "minecraft:dirt/render.png";
        }
    }
    else if (b < 128) {
        // look, is this the best way to handle this? nah. is it efficient? kinda. is it easy for me to write without thinking? yeah.
        var rand = Math.random();
        if (rand > 0.025) {
            image.src = image.src = url + "minecraft:stone/render.png";
        }
        else if (rand > 0.0225) {
            image.src = image.src = url + "minecraft:coal_ore/render.png";
        }
        else if (rand > 0.02) {
            image.src = image.src = url + "minecraft:iron_ore/render.png";
        }
        else if (rand > 0.015) {
            image.src = image.src = url + "minecraft:copper_ore/render.png";
        }
        else if (rand > 0.0125) {
            image.src = image.src = url + "minecraft:gold_ore/render.png";
        }
        else if (rand > 0.0075) {
            image.src = image.src = url + "minecraft:redstone_ore/render.png";
        }
        else if (rand > 0.005) {
            image.src = image.src = url + "minecraft:lapis_ore/render.png";
        }
        else if (rand > 0.001) {
            image.src = image.src = url + "minecraft:emerald_ore/render.png";
        }
        else {
            image.src = image.src = url + "minecraft:diamond_ore/render.png";
        }
    }
    else if (b < 160) {
        if (Math.random() > (160 - b) / 40) {
            // look, is this the best way to handle this? nah. is it efficient? kinda. is it easy for me to write without thinking? yeah.
            var rand = Math.random();
            if (rand > 0.025) {
                image.src = image.src = url + "minecraft:deepslate/render.png";
            }
            else if (rand > 0.0225) {
                image.src = image.src = url + "minecraft:deepslate_coal_ore/render.png";
            }
            else if (rand > 0.02) {
                image.src = image.src = url + "minecraft:deepslate_iron_ore/render.png";
            }
            else if (rand > 0.015) {
                image.src = image.src = url + "minecraft:deepslate_copper_ore/render.png";
            }
            else if (rand > 0.0125) {
                image.src = image.src = url + "minecraft:deepslate_gold_ore/render.png";
            }
            else if (rand > 0.0075) {
                image.src = image.src = url + "minecraft:deepslate_redstone_ore/render.png";
            }
            else if (rand > 0.005) {
                image.src = image.src = url + "minecraft:deepslate_lapis_ore/render.png";
            }
            else if (rand > 0.001) {
                image.src = image.src = url + "minecraft:deepslate_emerald_ore/render.png";
            }
            else {
                image.src = image.src = url + "minecraft:deepslate_diamond_ore/render.png";
            }
        }
        else {
            var rand = Math.random();
            if (rand > 0.025) {
                image.src = image.src = url + "minecraft:stone/render.png";
            }
            else if (rand > 0.0225) {
                image.src = image.src = url + "minecraft:coal_ore/render.png";
            }
            else if (rand > 0.02) {
                image.src = image.src = url + "minecraft:iron_ore/render.png";
            }
            else if (rand > 0.015) {
                image.src = image.src = url + "minecraft:copper_ore/render.png";
            }
            else if (rand > 0.0125) {
                image.src = image.src = url + "minecraft:gold_ore/render.png";
            }
            else if (rand > 0.0075) {
                image.src = image.src = url + "minecraft:redstone_ore/render.png";
            }
            else if (rand > 0.005) {
                image.src = image.src = url + "minecraft:lapis_ore/render.png";
            }
            else if (rand > 0.001) {
                image.src = image.src = url + "minecraft:emerald_ore/render.png";
            }
            else {
                image.src = image.src = url + "minecraft:diamond_ore/render.png";
            }
        }
    }
    else {
        // look, is this the best way to handle this? nah. is it efficient? kinda. is it easy for me to write without thinking? yeah.
        var rand = Math.random();
        if (rand > 0.025) {
            image.src = image.src = url + "minecraft:deepslate/render.png";
        }
        else if (rand > 0.0225) {
            image.src = image.src = url + "minecraft:deepslate_coal_ore/render.png";
        }
        else if (rand > 0.02) {
            image.src = image.src = url + "minecraft:deepslate_iron_ore/render.png";
        }
        else if (rand > 0.015) {
            image.src = image.src = url + "minecraft:deepslate_copper_ore/render.png";
        }
        else if (rand > 0.0125) {
            image.src = image.src = url + "minecraft:deepslate_gold_ore/render.png";
        }
        else if (rand > 0.0075) {
            image.src = image.src = url + "minecraft:deepslate_redstone_ore/render.png";
        }
        else if (rand > 0.005) {
            image.src = image.src = url + "minecraft:deepslate_lapis_ore/render.png";
        }
        else if (rand > 0.001) {
            image.src = image.src = url + "minecraft:deepslate_emerald_ore/render.png";
        }
        else {
            image.src = image.src = url + "minecraft:deepslate_diamond_ore/render.png";
        }
    }
}

function CreateSquare(url, size, height) {
    for (let b = height; b > 0; b--) {
        for (let i = 0; i < size; i++) {
            for (let z = 0; z < size; z++) {
                var image = new Image();

                Eval(url, image, b);

                MoveObj(image, i - z, i + (z) + b * 2, 100 * (size / 2), 0);

                if (b == height){
                    document.body.style.height = (parseInt(image.style.top, 10) + 100) + "px";
                }

                document.body.appendChild(image);
            }
        }
    }
}

window.onload = function () {
    CreateSquare('https://blocksitems.com/api/v2/blocks/', 8, 256);
}