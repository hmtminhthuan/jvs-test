function tinhKetQua(){
    document.getElementById("result").style.display = "none";
    document.getElementById("yes").style.display = "none";
    document.getElementById("no").style.display = "none";
    var income = document.getElementById("income").value
    var lai = document.getElementById("lai").value
    var vay = document.getElementById("vay").value
    var time = document.getElementById("time").value
    income=Number(income)
    lai=Number(lai)
    vay=Number(vay)
    time=Number(time)
    if (isNaN(income)==true || isNaN(vay)==true || isNaN(lai)==true || isNaN(time)==true || income<=0 || vay<=0 || lai<=0 || time<=0){
        income = document.getElementById("income").value=""
        lai = document.getElementById("lai").value=""
        vay = document.getElementById("vay").value=""
        time = document.getElementById("time").value=""
        document.getElementById("no").style.display = "block";
    document.getElementById("no").textContent="Lưu ý: Tất cả giá trị là một số dương. Mời bạn nhập lại"
    }else{
    var result1 = income*0.6
    var result2 = vay*(1+lai/100)/time
    var alertTag = document.getElementById("result")
    alertTag.innerHTML = ""
    var kq1 = document.createElement("h1")
    kq1.textContent = "Số tiền có thể trả trong 1 tháng: "+result1.toFixed(0)+" VNĐ"
    var kq2 = document.createElement("h1")
    kq2.textContent = "Số tiền phải trả trong 1 tháng: "+result2.toFixed(0)+" VNĐ"
    alertTag.appendChild(kq1)
    alertTag.appendChild(kq2)
    if(result1 <= result2){
    var check=document.getElementById("no")
    check.textContent = "Rất tiếc. Bạn không đủ điều kiện vay"
    document.getElementById("no").style.display = "block";
    }else{
    var check=document.getElementById("yes")
    check.textContent = "Xin chúc mừng. Bạn đã đủ điều kiện vay"
    document.getElementById("yes").style.display = "block";
        
    }
    document.getElementById("result").style.display = "block";
    }
}
function phaiTra(){
    var income = document.getElementById("income").value
    var lai = document.getElementById("lai").value
    var vay = document.getElementById("vay").value
    var time = document.getElementById("time").value
    income=Number(income)
    lai=Number(lai)
    vay=Number(vay)
    time=Number(time)
    if (isNaN(income, lai, vay, time)==true || (income || lai ||vay||time)<=0){
      document.getElementById("falseresult").style.display = "block";
    document.getElementById("falseresult").textContent="Lưu ý: Tất cả giá trị là một số dương"
    }else{
    var result = vay*(1+lai/100)/time
    document.getElementById("result").style.display = "block";
    document.getElementById("result").textContent="Số tiền phải trả trong 1 tháng: "+result.toFixed(0)+" VNĐ"
    }
}
function reset(){
    income = document.getElementById("income").value=""
    lai = document.getElementById("lai").value=""
    vay = document.getElementById("vay").value=""
    time = document.getElementById("time").value=""
    document.getElementById("result").style.display = "none";document.getElementById("yes").style.display = "none";
    document.getElementById("no").style.display = "none";
}