//変数名はキャメル型で
//＝は代入演算子だから、比較したいなら===とする
//関数名はF2を押して編集すると一括で変わる
//代入変数でなければ、constで定義する

function calc (hoge, fuga) {

    const firstStitch = hoge;
    const zougen = fuga;

    const secondStitch = firstStitch + zougen;

    if (zougen > 0) {
    
        const i = firstStitch - zougen;
        if (i >= 0){
            if ((i % zougen) === 0)　{
                // (i/zougen)を出力
            } else {
                // {Math.floor(i/zougen)} + "余り" + (i % zougen) と出力
            };
        } else {
            //"3目以上の増やし目が必要です"
        };
    
    } else if (zougen === 0) {
        //エラー
    
    } else if (0 > zougen) {
    
        const ab = Math.abs(zougen);
        const i = firstStitch - ab*2;
        if (i >= 0){
            if ((i % ab) === 0)　{
                // (i/ab)を出力
            } else {
                // {Math.floor(i/ab)} + "余り" + (i % ab) と出力
            };
        } else {
            //エラー
        };
    };
    
}


$("#startCalc").on('click', (event) => {
    console.log("hoge");

    const inputStitch = $("#inputStitch").val();
    console.log(inputStitch);

    $("#secondStich").text(new Date());
});
