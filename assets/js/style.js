//ハンバーガーメニューをクリックしたとき
document.querySelector('.navbar-toggler').onclick = function(){
    //開いた時と閉じたとき
    if(document.getElementById('navbar').classList.contains('show')){
        document.querySelector('#navbar').classList.remove('show');
    } else {
    document.querySelector('#navbar').classList.add('show');
    }
}
