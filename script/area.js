function calculateTrangelArea(){
    const basefild = document.getElementById('triangle-base')
    const baseValueString = basefild.value;
    const triangleBase = parseFloat(baseValueString)
    // console.log(typeof triangleBase)
    const heightfild = document.getElementById('triangle-height')
    const heightValueString = heightfild.value;
    const triangleHeight = parseFloat(heightValueString)
    // console.log(triangleHeight)

    const area = 0.5 * triangleBase * triangleHeight;
    // console.log(area)

    const triangleAreaFild = document.getElementById('triangle-area')
    const triangleAreaString = triangleAreaFild.innerText;
    triangleAreaFild.innerText = area;
}