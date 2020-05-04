function taoId() {

    /*lấy thời gian hiện tại theo milisecond hiện tại - 0:0:0 1/1/1997 -> milisecond*/
    var thoiGianHienTai = new Date().getTime();
    var id = Math.random().toString().substr(2, 10) + '_' + String(thoiGianHienTai);

    return id;
}