var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_width = 30;
block_height = 30;

player_object = "";

block_object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(img){
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(120);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(img){
        block_object = img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed = e.keyCode;

    if(e.shiftKey == true && keypressed == '80'){
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
        console.log("shift and p");
    }

    if(e.shiftKey == true && keypressed == '77'){
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
        console.log("shift and m");
    }

    if(keypressed == '70'){
        new_image('ironman_face.png');
        console.log("f for face of ironman");
    }

    if(keypressed == '66'){
        new_image('doctor strange body.JPG');
        console.log("b for body of Doctor Strange");
    }

    if(keypressed == '76'){
        new_image('captain marvel legs.jpg');
        console.log("l for legs of captain marvel");
    }

    if(keypressed == '82'){
        new_image('thor_right_hand.png');
        console.log("r for right hand of thor");
    }

    if(keypressed == '72'){
        new_image('captain_america_left_hand.png');
        console.log("h for left hand of captain america");
    }

    if(keypressed == '37'){
        left();
        console.log("left");
    }

    if(keypressed == '38'){
        up();
        console.log("up");
    }

    if(keypressed == '39'){
        right();
        console.log("right");
    }

    if(keypressed == '40'){
        down();
        console.log("down")
    }
}

