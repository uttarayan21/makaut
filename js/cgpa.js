function cgpa() {
    var sem_1 = parseFloat(document.getElementById("sem_1").value);
    var sem_2 = parseFloat(document.getElementById("sem_2").value);
    var sem_3 = parseFloat(document.getElementById("sem_3").value);
    var sem_4 = parseFloat(document.getElementById("sem_4").value);
    var sem_5 = parseFloat(document.getElementById("sem_5").value);
    var sem_6 = parseFloat(document.getElementById("sem_6").value);
    var sem_7 = parseFloat(document.getElementById("sem_7").value);
    var sem_8 = parseFloat(document.getElementById("sem_8").value);
    
    document.getElementById("cgpa").innerHTML = "Your CGPA is : " + ((sem_1 + sem_2)/2 + (sem_3 + sem_4)/2 + (sem_5 + sem_6)*1.5/2 + (sem_7 + sem_8)*1.5/2 )/5
    document.getElementById("result").classList = "mt-3 collapse show"
}
