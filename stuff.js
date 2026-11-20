

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
    var newstr = image.src.replace(url, "");
    newstr = newstr.replace("/render.png", "");
    image.dataset.blocktype = newstr;
    console.log(image.dataset.blocktype);
}

let hasFetched = false;

async function OnOver() {

    if (hasFetched) return;
    hasFetched = true;

    try {
        const element = document.getElementById("spinimg");
        element.style.opacity = 1;
        const response = await fetch("https://blocksitems.com/api/v2/blocks/" + event.currentTarget.dataset.blocktype);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        element.style.opacity = 0;
        const followsquare = document.getElementById("followsquare");
        followsquare.style.opacity = 1;
        console.log(data);
        followsquare.firstElementChild.textContent = data["data"]["display_name"];
        hasFetched = false;
    } catch (error) {
        console.error("Fetch failed:", error);
        hasFetched = false; // Allow retry if needed
    }
}

function CreateSquare(url, size, height) {
    for (let b = height; b > 0; b--) {
        for (let i = 0; i < size; i++) {
            for (let z = 0; z < size; z++) {
                var image = new Image();

                Eval(url, image, b);

                MoveObj(image, i - z, i + (z) + b * 2, 100 * (size / 2), 0);

                if (b == height) {
                    document.body.style.height = (parseInt(image.style.top, 10) + 100) + "px";
                }

                image.addEventListener("mouseover", async (event) => { OnOver() });

                document.body.appendChild(image);
            }
        }
    }
}

var mouseX = 0;
var mouseY = 0;

window.onload = function () {
    const followsquare = document.getElementById("followsquare");
    document.addEventListener('mousemove', function (event) {
        console.log('Mouse X:', event.clientX, 'Mouse Y:', event.clientY);
        mouseX = event.clientX;
        mouseY = event.clientY;
        followsquare.style.left = (mouseX + 5) + 'px';
        followsquare.style.top = (mouseY + 5) + 'px';
        const element = document.elementFromPoint(event.clientX, event.clientY);
        if (element.tagName == "BODY") {
            followsquare.style.opacity = 0;
        }
        else {
            console.log(element.tagName);
        }
    });
    CreateSquare('https://blocksitems.com/api/v2/blocks/', 10, 256);
}