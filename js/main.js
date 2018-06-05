const startBtn = document.getElementById('start_convert');
const downloadPng = document.getElementById('download__png');
const testImage = document.getElementById('test_img');

startBtn.addEventListener("change", uploadSvg);
// downloadPng.addEventListener('click', )

function uploadSvg(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function () {
        var dataURL = reader.result;
        // var image = new Image();
        testImage.onload = function () {
            convertToPng(testImage, testImage.width, testImage.height)
            testImage.style.display = 'none';
        }
        testImage.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
    imageName = input.files[0].name;
}

function convertToPng(image, width, height) {
    var canvas = document.createElement("CANVAS");
    canvas.height = width;
    canvas.width = height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, width, height);
    document.body.appendChild(canvas);
    var png = canvas.toDataURL("image/png");
    downloadPng.setAttribute('href', png);
    downloadPng.download = 'imageName'
}