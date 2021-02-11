Webcam.set({
    width:300,
    height:230,
    image_format:'png',
    png_quality:100
});
/*webcam is set*/
camera=document.getElementById("camera");
/*camera variable is linked to div tag*/
Webcam.attach( '#camera' );
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    })
}
console.log('ml5 version:',ml5.version);
/*consoled ml5.js*/
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/eDzyHHmdm/',modelLoaded);