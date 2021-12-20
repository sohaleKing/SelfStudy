interface drawRectOption {
   width : number;
   length: number;
   heigth?: number;             //this parameter is optional now
}



function drawRect(options:drawRectOption){
    let width = options.width;
    let length = options.length;
    if(options.heigth){
        let heigth = options.heigth;
    }
    // draw Logic
}

drawRect({
    width:200,
    length:100

});