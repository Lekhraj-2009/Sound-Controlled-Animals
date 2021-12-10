//Model: https://teachablemachine.withgoogle.com/models/53lSyrUvR/
//Link: https://teachablemachine.withgoogle.com/models/53lSyrUvR/model.json

dog = 0;
cat = 0;
snake = 0;
cow = 0;
lion = 0;
horse = 0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio : true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/53lSyrUvR/model.json', modelReady)

    document.getElementById("cf").style.display = "block";
    document.getElementById("waiting").style.display = "block";
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error){
        console.log("An Error occured!");
        window.alert("An Error occured!");
    } else {
        console.log("Got Results Successfully!");
        document.getElementById("cf").style.display = "none";
        document.getElementById("waiting").style.display = "none";

        console.log(results);
    
        var img = document.getElementById("result_img");
        
        if (results[0].label == "Bark") {
            img.src = 'Dog.png';
            img.style.backgroundColor = 'none';
            dog = dog + 1;
        } else if (results[0].label == "Meow") {
            img.src = 'Cat.png';
            img.style.backgroundColor = 'none';
            cat = cat + 1;
        } else if (results[0].label == "Hiss") {
            img.src = 'Snake.jpg';
            img.style.backgroundColor = 'none';
            snake = snake + 1;
        } else if (results[0].label == "Moo") {
            img.src = 'Cow.png';
            img.style.backgroundColor = 'white';
            cow = cow + 1;
        } else if (results[0].label == "Roar") {
            img.src = 'Lion.jpg';
            img.style.backgroundColor = 'none';
            lion = lion + 1;
        } else if (results[0].label == "Neigh") {
            img.src = 'Horse.png';
            img.style.backgroundColor = 'none';
            horse = horse + 1;
        } else {
            img.src = 'Ear.gif';
            img.style.backgroundColor = 'none';
        }

        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_animal_name").innerHTML = results[0].label;
        document.getElementById("result_times_detected").innerHTML = 'Dog-'+dog+', Cat-'+cat+', Snake-'+snake+', Cow-'+cow+', Lion-'+lion+', Horse-'+horse;
       
        document.getElementById("result_display").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_times_detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    }
}