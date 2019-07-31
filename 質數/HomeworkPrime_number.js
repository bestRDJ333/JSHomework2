function Prime() {

    let test = document.getElementById('test');
    let show1 = document.getElementById('number').value; //string input num
    let show = parseInt(show1);
    let prim = []; //prim
    let isNot = false;

    for (let i = 1; i < show; i++) {
        isNot = true;
        if (show === 1) {
            isNot = false;
        }
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isNot = false;
                break;
            }

        }
        if (isNot == true) {
            prim.push(i);
        }

    }
   
    test.innerHTML = prim;
    return Prime;
}